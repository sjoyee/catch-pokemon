from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status, generics
from pokemon.models import Pokemon
from pokemon.serializers import PokemonSerializer

# Create your views here.


class Pokemon(generics.GenericAPIView):
    serializer_class = PokemonSerializer
    queryset = Pokemon.objects.all()
