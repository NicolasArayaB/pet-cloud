"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash     # its allowed to manage tokens for user authentication        
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity   #from models import User
import datetime

api = Blueprint('api', __name__)

@api.route('/start', methods=['POST', 'GET'])
def handle_start():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/hello', methods=['POST', 'GET'])
def user_handle_hello():
    users = User.query.all()
    users = list(map(lambda x: x.serialize(), users))
    response_body = {
        "users": users
    }

    return jsonify(response_body), 200

#path to generate user hash-token
@api.route('/hash', methods=['POST', 'GET'])
def handle_hash():
    
    expiration = datetime.timedelta(days=2)
    access_token = create_access_token(identity=user.email, expires_delta=expiration)
    response_token = {
        "users": user.email,
        "token": access_token
    }

    return jsonify(response_token), 200

# #path to generate login for user
@api.route('/login', methods=['POST'])
def login():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email:
        return jsonify({"msg":"Email is required"}), 400

    if not password:
        return jsonify({"msg":"Password is required"}), 400
    
    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"msg": "The email is not correct",
        "status": 401
        
        }), 401

    expiration = datetime.timedelta(days=2)
    access_token = create_access_token(identity=user.email, expires_delta=expiration)

    data = {
        "user": user.serialize(),
        "token": access_token,
        "expires": expiration.total_seconds()*1000,
        "userId": user.id,
        "first_name": user.first_name
    }

    return jsonify(data), 200

# #generate register for user
@api.route('/register', methods=['POST, GET'])
def register():

    first_name = request.json.get("firstName", None)
    father_family_name = request.json.get("fatherFamilyName", None)
    mother_family_name = request.json.get("motherFamilyName", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email:
        return "Email required", 401

    password = request.json.get("password", None)
    if not password:
        return "Password required", 401
    
    first_name = request.json.get("firstName", None)
    if not first_name:
        return "First Name required", 401

    father_family_name = request.json.get("fatherFamilyName", None)
    if not father_family_name:
        return "Father Family Name required", 401
    
    mother_family_name = request.json.get("motherFamilyName", None)
    if not mother_family_name:
        return "Mother Family Name required", 401

    email_query = User.query.filter_by(email=email).first()
    if email_query:
        return "This email has been already taken", 401

    user = User()
    user.first_name = first_name
    user.father_family_name = father_family_name
    user.mother_family_name = mother_family_name
    user.email = email
    hashed_password = generate_password_hash(password)
    user.password = hashed_password
  
    # print(user)
    db.session.add(user)
    db.session.commit()

    response_token = {
        "msg": "User added successfully"   
    }

    return jsonify(response_token), 200