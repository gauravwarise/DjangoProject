from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser, Group, Permission




class AuthUser(AbstractUser):
    # #exclude this fields whil migrations
    # is_superuser = None
    # is_staff = None
    # last_login = None
    email = models.CharField(max_length=255, unique=True, db_column='email', null=False)
    password = models.CharField(max_length=255, unique=True, db_column='password', null=False)
    
    USERNAME_FIELD = 'username'

    class Meta:
        managed = True
        db_table = "auth_user"

    def save(self, *args, **kwargs):
        super(AuthUser, self).save(*args, **kwargs)
