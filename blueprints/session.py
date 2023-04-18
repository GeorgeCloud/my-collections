from flask import Blueprint

session_bp = Blueprint('session_bp', __name__, template_folder='templates')

@session_bp.route('/new')
def login():
    pass

@session_bp.route('/logout')
def logout():
    pass
