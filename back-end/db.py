from flask import Flask
from pymongo import MongoClient
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from os import environ
import redis

app    = Flask(__name__)
bcrypt = Bcrypt(app)

CORS(app)

# ======= DB Setup ==========
uri = environ.get('MONGODB_URI', 'mongodb://localhost:27017/my-collections')
client = MongoClient(uri)
db = client.get_default_database()
# ===========================

redis_s = redis.Redis(host='localhost', port=6379)

# ======= Collections ==========
users = db.users
users.create_index('username', unique=True)
collections = db.collections
favorites = db.favorites
# =========================
