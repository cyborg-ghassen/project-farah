from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models


# Create your models here.
class UserManager(BaseUserManager):
    """ User Model Manager """

    def create_user(self, username, password=None,
                    is_staff=False, is_superuser=False, is_active=True):
        if not username:
            raise ValueError('Users must have email Address')
        if not password:
            raise ValueError('User must have Password')
        # if not full_name:
        #     raise ValueError('User must have a full name')

        user_obj = self.model(
            username=username,
            password=password,
            is_staff=is_staff,
            is_superuser=is_superuser,
            is_active=is_active,
        )
        user_obj.set_password(password)
        user_obj.save(using=self._db)

        return user_obj

    def create_staffuser(self, username, password=None):
        user = self.create_user(
            username,
            password=password,
            is_staff=True
        )
        return user

    def create_superuser(self, username, password=None):
        user = self.create_user(
            username,
            password=password,
            is_staff=True,
            is_superuser=True
        )
        return user


class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=15, blank=True, null=True)
    last_name = models.CharField(max_length=15, blank=True, null=True)
    username = models.CharField(max_length=255, unique=True)  # require
    email = models.EmailField()
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = 'username'
    objects = UserManager()

    def __str__(self):
        return self.username
