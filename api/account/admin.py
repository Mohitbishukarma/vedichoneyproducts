from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User


# forms
class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('email',)

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('email',)


# admin class
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm

    model = User

    list_display = ('email', 'is_active',
                    'is_staff', 'is_superuser', 'last_login',)
    list_filter = ('is_active', 'is_staff', 'is_superuser')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active',
         'is_superuser', 'groups', 'user_permissions')}),
        ('Dates', {'fields': ('last_login', 'date_joined')})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
         ),
    )
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(User, CustomUserAdmin)
