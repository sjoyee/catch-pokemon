from django.db import models
from users.models import User

CHAR_LENGTH = 255
# Create your models here.


class Pokemon(models.Model):
    id = models.IntegerField(null=False, primary_key=True)
    name = models.CharField(max_length=CHAR_LENGTH, null=False)
    hp = models.IntegerField(null=False)
    attack = models.IntegerField(null=False)
    defense = models.IntegerField(null=False)
    type = models.CharField(max_length=CHAR_LENGTH, null=False)
    level = models.IntegerField(default=1, null=False)
    owner = models.ForeignKey(User, models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.name
