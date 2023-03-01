from djoser import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


# create UserCreateSerilizer in users/serializers.py
# to translate Django objects to native Python format.


class UserCreateSerializer(serializers.UserCreateSerializer):
    class Meta(serializers.UserCreateSerializer.Meta):
        model = User
        fields = ("id", "username", "first_name", "last_name", "password")
