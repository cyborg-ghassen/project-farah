from datetime import timedelta

from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import Group, Permission
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist, ValidationError
from rest_framework import serializers
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework_simplejwt.settings import api_settings
from rest_framework_simplejwt.state import token_backend

from ..models import User


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    groups_id = serializers.SerializerMethodField()
    groups_name = serializers.SerializerMethodField()
    permissions_name = serializers.SerializerMethodField()
    password = serializers.CharField(
        write_only=True,
        required=False,
        help_text='Leave empty if no change needed',
        style={'input_type': 'password', 'placeholder': 'Password'}
    )

    class Meta:
        model = User
        fields = "__all__"
        read_only_field = ['is_active', 'created', 'updated', 'created_at']
        extra_kwargs = {
            'groups': {'write_only': True},
        }

    def get_permissions_name(self, obj):
        return [perm.name for perm in obj.user_permissions.all()]

    def get_fournisseur_name(self, obj):
        return obj.fournisseur_name

    def get_groups_name(self, obj):
        return [group.name for group in obj.groups.all()]

    def get_groups_id(self, obj):
        return [group.id for group in obj.groups.all()]

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(UserSerializer, self).create(validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        if password:
            instance.set_password(password)
        return super().update(instance, validated_data)


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name', 'permissions']


class CustomTokenRefreshSerializer(TokenRefreshSerializer):
    def validate(self, attrs):
        data = super(CustomTokenRefreshSerializer, self).validate(attrs)
        decoded_payload = token_backend.decode(data['access'], verify=True)
        user_uid = decoded_payload['user_id']
        # add filter query

        obj = get_object_or_404(User, pk=user_uid)
        data['user'] = UserSerializer(obj).data
        groups = []
        perms = []
        stock_service = obj.fournisseur.stock_service if obj.fournisseur else False
        terms_services = obj.terms_service
        for group in obj.groups.all():
            groups.append(group.name)
            for perm in group.permissions.all():
                perms.append(perm.codename)
            for perm in obj.user_permissions.all():
                perms.append(perm.codename)
        perms = tuple(perms)
        data.update({'groups_name': groups, "permissions_name": perms, "stock_service": stock_service, "accept_terms": terms_services})
        return data


class LoginSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data


class RegisterSerializer(UserSerializer):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True, required=True)
    email = serializers.EmailField(required=True, write_only=True, max_length=128)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'id', 'username', 'email', 'password', 'is_active', 'created_at',
                  'avatar,']

    def create(self, validated_data):
        try:
            user = User.objects.get(email=validated_data['email'])
        except ObjectDoesNotExist:
            user = User.objects.create_user(**validated_data)
        return user
