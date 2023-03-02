from rest_framework.decorators import api_view
from rest_framework.response import Response
from pokemon.models import Pokemon
from pokemon.serializers import PokemonSerializer
import random


@api_view(['GET'])
def get_all_pokemons(request):
    pokemons = Pokemon.objects.all()
    serialize = PokemonSerializer(pokemons, many=True)
    return Response(serialize.data)


@api_view(['GET'])
def get_random_wild_pokemon(request):
    pokemons = list(Pokemon.objects.filter(owner=None))
    # get a random wild pokemon
    random_pokemon = random.choice(pokemons)
    serialize = PokemonSerializer(random_pokemon)
    return Response(serialize.data)


@api_view(['GET'])
def get_owned_pokemons(request):
    pokemons = Pokemon.objects.filter(owner=request.user)
    serialize = PokemonSerializer(pokemons, many=True)
    return Response(serialize.data)


@api_view(['GET'])
def get_unowned_pokemons(request):
    pokemons = Pokemon.objects.exclude(owner=request.user)
    serialize = PokemonSerializer(pokemons, many=True)
    return Response(serialize.data)


@api_view(['POST'])
def add_pokemon(request):
    pokemon = Pokemon.objects.filter(id=request.data['id'])
    # pokemon level is randomly generated from 1 to 100 inclusive
    pokemon.update(owner=request.user, level=random.randint(1, 100))
    serialize = PokemonSerializer(pokemon, many=True)
    return Response(serialize.data)


@api_view(['POST'])
def release_pokemon(request):
    pokemon = Pokemon.objects.filter(id=request.data['id'])
    # pokemon level back to 1 after released
    pokemon.update(owner=None, level=1)
    serialize = PokemonSerializer(pokemon, many=True)
    return Response(serialize.data)
