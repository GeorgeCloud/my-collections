from flask import Blueprint, request
from db import users, bcrypt

session_bp = Blueprint('session_bp', __name__, template_folder='templates')

@session_bp.route('/', methods=['POST'])
def get_session():
    # Create timed session
    return 'session created'

@session_bp.route('/logout', methods=['POST'])
def logout():
    # destroy active session
    pass
