# A simple proxy
from flask import Flask
from blueprints.session import session_bp
from blueprints.user import user_bp
from blueprints.yelp import yelp_bp

app = Flask(__name__)

app.register_blueprint(session_bp, url_prefix='/api/session')
app.register_blueprint(user_bp, url_prefix='/api/users')
app.register_blueprint(yelp_bp, url_prefix='/api/businesses')


if __name__ == "__main__":
    app.run(debug=True)
