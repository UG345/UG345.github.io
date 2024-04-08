import requests 


URL = 'https://api.pokemonbattle.me/v2'
TOKEN = 'Token terner'
HEADERS = {'Content-Type' : 'application/json', "trainer_token": TOKEN }

 
body = {
    "name": "Бульбазавр",
    "photo": "https://dolnikov.ru/pokemons/albums/001.png"
}


body_confirm = {
    "pokemon_id": "16859"
}

params = {
    "pokemon_id": "16859",
    "name": "Cheburek"
}

response = requests.post(url = f'{URL}/pokemons', headers = HEADERS, json = body )
print(response.text)

response_confirm = requests.post(url = f'{URL}/trainers/add_pokeball', headers = HEADERS, json = body_confirm )

print(response_confirm.text)

response_confirm = requests.patch(url = f'{URL}/pokemons', headers = HEADERS, json = params)

print(response_confirm.text)








