from rest_framework.decorators import api_view
from rest_framework.response import Response
from pokemon.models import Pokemon
from pokemon.serializers import PokemonSerializer


@api_view(['GET'])
def get_all_pokemons(request):
    pokemons = Pokemon.objects.all()
    serialize = PokemonSerializer(pokemons, many=True)
    return Response(serialize.data)


@api_view(['GET'])
def get_wild_pokemons(request):
    pokemons = Pokemon.objects.filter(owner=None)
    serialize = PokemonSerializer(pokemons, many=True)
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
    pokemon.update(owner=request.user)
    serialize = PokemonSerializer(pokemon, many=True)
    return Response(serialize.data)


@api_view(['POST'])
def release_pokemon(request):
    pokemon = Pokemon.objects.filter(id=request.data['id'])
    pokemon.update(owner=None)
    serialize = PokemonSerializer(pokemon, many=True)
    return Response(serialize.data)
