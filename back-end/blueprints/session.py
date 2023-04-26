from flask import Blueprint, request
from flask_bcrypt import check_password_hash
from utils.sessions import create_session
from bson.json_util import dumps
from json import loads
from db import db

session_bp = Blueprint('session_bp', __name__, template_folder='templates')

@session_bp.route('/', methods=['POST'])
def get_session():
    req_data = request.get_json()

    # TODO: Validate session is active then skip
    user = db.users.find_one({'username': req_data['username']})

    if check_password_hash(user['password'], req_data['password']):
        new_session = create_session(user)
        return loads(dumps(new_session)), 200

    return {'message': 'failed login attempt'}, 401

@session_bp.route('/logout', methods=['POST'])
def logout():
    # destroy active session
    pass
