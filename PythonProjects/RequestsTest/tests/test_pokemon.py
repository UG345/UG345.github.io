import requests
import pytest 

URL = 'https://api.pokemonbattle.me/v2'
HEADERS = {'Content-Type' : 'application/json'}
TOKEN = 'Token trener'
 
def test_status_code():
    response = requests.get(url = f'{URL}/trainers', params = {"trainer_id" : 2640}) 
    assert response.status_code == 200


def test_part_of_response():
    response = requests.get(url = f'{URL}/trainers', params = {"trainer_id" : 2640}) 
    assert response.json()['data'][0]['city'] == 'Ufa'

CASES = [
    ('city', 'Ufa'),
    ('trainer_name', 'Julia123')
]

@pytest.mark.parametrize('key, value', CASES)

def test_parametrize_body(key, value):
    response = requests.get(url = f'{URL}/trainers', params = {"trainer_id" : 2640})

    assert response.json()['data'][0][key] == value 
