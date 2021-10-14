import requests
from django.http import HttpResponse, HttpRequest, HttpResponseRedirect
from django.db import models
from django.contrib.auth.models import User
from .managers import DiscordUserOAuth2Manager

class DiscordUser(models.Model):
    objects = DiscordUserOAuth2Manager()

    id = models.BigIntegerField(primary_key=True)
    discordTag = models.CharField(max_length=37)
    avatar = models.CharField(max_length=100)
    publicFlags = models.IntegerField()
    flags = models.IntegerField()
    locale = models.CharField(max_length=100)
    mfaEnabled = models.BooleanField()
    last_login = models.DateTimeField()

    def is_authenticated(self):
        return True