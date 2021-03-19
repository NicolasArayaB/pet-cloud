"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import uuid
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

#@app.route("/user", methods=["POST"])
#def create_user():
#    data = request.get_json()
#    hashed_password = generate_password_hash(data["password"], method="sha256")
#    new_user = User(id=data["id"], name=data["name"], password=hashed_password)
#    db.session.add(new_user) 
#    db.session.commit() 
#    return jsonify({"Message": "New user has created"})
#
#@app.route("/user", methods=["GET"])
#def get_all_users():
#    users = User.query.all()
#    output = []
#    for user in users:
#        user_data = { }
#        user_data["id"] = user.id
#        user_data["name"] = user.name
#        user_data["password"] = user.password
#        output.append(user_data)
#    return jsonify({"Users": output})
#
#@app.route("/user/<id>", methods=["GET"])
#def get_one_user(id):
#    user = User.query.filter_by(id=id).first()
#    if not user:
#        return jsonify({"message": "Not user found"})
#    user_data = {}
#    user_data["id"] = user.id
#    user_data["name"] = user.name
#    user_data["password"] = user.password
#
#    return jsonify({"message": user_data})
#
#
#@app.route("/user/<id>", methods=["DELETE"])
#def delete_one_user(id):
#    user = User.query.filter_by(id=id).first()
#    if not user:
#        return jsonify({"message": "Not user found"})
#    db.session.delete(user)
#    db.session.commit()
#
#    return jsonify({"Message": "User has deleted"})
#
## db.create_all()