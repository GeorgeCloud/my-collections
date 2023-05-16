from flask import request, Blueprint
from os import environ
import requests
from db import redis_s
import pickle

YELP_API_URL = 'https://api.yelp.com/v3/businesses/search'
YELP_API_KEY = environ.get('YELP_API_KEY')
EXPIRATION_TIME = 600  # Seconds

yelp_bp = Blueprint('yelp_bp', __name__, template_folder='templates')

@yelp_bp.route('/', methods=['GET'])
def get_businesses():
    term = request.args['term']

    if redis_s.exists(term):
        return pickle.loads(redis_s.get(term))
    else:
        print('not exists')
        businesses_res = requests.get(
            YELP_API_URL,
            params={
                'latitude' : request.args['latitude'],
                'longitude': request.args['longitude'],
                'term'     : term,
            },
            headers={'Authorization': YELP_API_KEY}
        )

        businesses = businesses_res.json()

        redis_s.set(term, pickle.dumps(businesses))
        redis_s.expire(term, EXPIRATION_TIME)

        return businesses
