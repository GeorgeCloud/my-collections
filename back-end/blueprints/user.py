from flask import Blueprint, request
from bson.json_util import dumps
from json import loads
from db import db

user_bp = Blueprint('user_bp', __name__, template_folder='templates')

@user_bp.route('/', methods=['POST'])
def create_user():
    if request.method == 'POST':
        req_data = request.get_json()
        username = req_data['username']

        if db.users.find_one({'username': username}):
            return {message: }
        else:
            user_document = {
                'username': username,
                'password': req_data['password']  # hash
            }

            new_user = db.users.insert_one(user_document)

            del new_user['password']
            new_user['session_id'] = 707  # validate session_id is present in db or in memory

            return loads(dumps(new_user)), 201

@user_bp.route('/<username>', methods=['GET'])
def get_user(username):
    return username
