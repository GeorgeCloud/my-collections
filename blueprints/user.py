from flask import Blueprint

user_bp = Blueprint('user_bp', __name__, template_folder='templates')

@user_bp.route('/<username>', methods=['POST'])
def get_user():
    pass