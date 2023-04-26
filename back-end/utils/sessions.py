from datetime import datetime, timedelta
from db import db
import uuid

def create_session(user):
    # Check for active sessions
    session = db.sessions.find_one({'user_username': user['username']})

    if session:
        del session['_id']
        return session

    session_id = uuid.uuid1().hex
    session_doc = {
        'session_id'   : session_id,
        'user_username': user['username'],
        'expires_at'   : datetime.now() + timedelta(days=7)
    }

    db.sessions.insert_one(session_doc)

    return session_doc
