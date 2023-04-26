from flask import Blueprint, request
from flask_bcrypt import generate_password_hash
from utils.sessions import create_session
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
            return {'message': 'username already used'}
        else:
            user_doc = {
                'username': username,
                'password': generate_password_hash(req_data['password'], 10)
            }

            db.users.insert_one(user_doc)
            del user_doc['password']

            session_id = create_session(user_doc)

            user_doc['session_id'] = session_id

            return loads(dumps(user_doc)), 201

@user_bp.route('/<username>', methods=['GET'])
def get_user(username):
    return username
