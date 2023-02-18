# A simple proxy
from flask import Flask, request
from os import environ
import requests

app = Flask(__name__)

YELP_API_URL = 'https://api.yelp.com/v3/businesses/search'
YELP_API_KEY = environ.get('YELP_API_KEY')

@app.route('/businesses')
def proxy_link():
    bussinesses = requests.get(
                    YELP_API_URL,
                    params={
                        'latitude' : request.args['latitude'],
                        'longitude': request.args['longitude'],
                        'term'     : request.args['term'], 
                    },
                    headers={'Authorization': YELP_API_KEY}
                )

    return bussinesses.json()


if __name__ == "__main__":
    app.run(debug=True)
