import django_filters

from accounts.models import User
from auditlog.models import LogEntry
from django.contrib.auth.models import Group


class UserFilter(django_filters.FilterSet):
    type = django_filters.CharFilter(field_name='groups__name', label="Group name")

    class Meta:
        model = User
        fields = ['type']


class GroupFilter(django_filters.FilterSet):
    type = django_filters.CharFilter(field_name='name', label="Name")

    class Meta:
        model = Group
        fields = ['type']


class LogEntryFilter(django_filters.FilterSet):
    created_at = django_filters.DateFilter(field_name='timestamp__date', label='Date')

    class Meta:
        model = LogEntry
        fields = ["created_at", "object_id"]
