from django.contrib import admin

from django.contrib.auth.admin import UserAdmin
from django.forms import Textarea
from django.db import models
from user.models import User

class UserAdminConfig(UserAdmin):
    model = User
    search_fields = ('email', 'username', 'password',)
    list_filter = ('email', 'id', 'username', 'is_active', 'is_staff')
    ordering = ('-created',)
    list_display = ('email', 'username', 'is_active', 'is_staff', 'created', 'updated')
    fieldsets = (
        (None, {'fields': ('email', 'username')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )


admin.site.register(User, UserAdminConfig)