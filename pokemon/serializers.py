from rest_framework import serializers
from pokemon.models import Pokemon


"""
Inheriting the ModelSerializer class will:
- Automatically generate a set of fields and validators for the serializer
- Create default implementations of .create() and .update()
"""


class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = '__all__'
