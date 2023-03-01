import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'poke_project.settings'

import django
django.setup()

from pokemon.models import Pokemon
import csv

filepath = "./pokemon.csv"

with open(filepath) as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for row in csv_reader:
        poke = Pokemon(
            name=row[0],
            hp=row[1],
            attack=row[2],
            defense=row[3],
            type=row[4])
        poke.save()
