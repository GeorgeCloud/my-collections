from flask import request, Blueprint
from os import environ
import requests

YELP_API_URL = 'https://api.yelp.com/v3/businesses/search'
YELP_API_KEY = environ.get('YELP_API_KEY')

yelp_bp = Blueprint('yelp_bp', __name__, template_folder='templates')

@yelp_bp.route('/')
def get_businesses():
    businesses = requests.get(
                    YELP_API_URL,
                    params={
                        'latitude' : request.args['latitude'],
                        'longitude': request.args['longitude'],
                        'term'     : request.args['term'], 
                    },
                    headers={'Authorization': YELP_API_KEY}
                )

    return businesses.json()