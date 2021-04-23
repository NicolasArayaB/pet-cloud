"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pet
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

@api.route('/users', methods=['POST', 'GET'])
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

# path to generate login for user
@api.route('/login', methods=['POST'])
def login():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email:
        return jsonify({"msg":"Debes ingresar tu email"}), 400

    if not password:
        return jsonify({"msg":"Debes ingresar tu contraseña"}), 400
    
    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({"msg": "Email no registrado",
        "status": 401
        }), 401
    
    elif not check_password_hash(user.password, password):
        return jsonify({"msg": "Contraseña no es válida",
        "status": 401
        }), 401

    expiration = datetime.timedelta(days=2)
    access_token = create_access_token(identity=user.email, expires_delta=expiration)

    data = {
        "token": access_token,
        "user": user.serialize(),
        "expires": expiration.total_seconds()*1000,
        "first_name": user.first_name,
        "is_vet": user.is_vet,
        "status": 200
    }

    return jsonify(data), 200

# get user Id
@api.route('/user_pets')
def handle_user_pets():
    pets = Pet.query.all()
    pets = list(map(lambda x: x.serialize(), pets))
    
    response_body = {
        "pets": pets
    }
    return jsonify(response_body), 200

# #generate register for user
@api.route('/register', methods=['POST'])
def register():

    first_name = request.json.get("firstName", None)
    father_family_name = request.json.get("fatherFamilyName", None)
    mother_family_name = request.json.get("motherFamilyName", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    is_vet = request.json.get("isVet", None)

    if not first_name:
        return "First Name required", 401
    
    if not father_family_name:
        return "Father Family Name required", 401

    if not mother_family_name:
        return "Mother Family Name required", 401
    
    if not email:
        return "Email required", 401
    
    email_query = User.query.filter_by(email=email).first()
    if email_query:
        return "This email has been already taken", 401

    if not password:
        return "Password required", 401

    user = User()
    user.first_name = first_name
    user.father_family_name = father_family_name
    user.mother_family_name = mother_family_name
    user.email = email
    # hashed_password = create_access_token(password)
    hashed_password = generate_password_hash(password)
    user.password = hashed_password
    user.is_vet = is_vet
  
    # print(user)
    db.session.add(user)
    db.session.commit()

    response_token = {
        "msg": "User added successfully"   
    }

    return jsonify(response_token), 200

# create new pet
@api.route('/pet', methods=['POST'])
def new_pet():
    name = request.json.get("name", None)
    chip_identifier = request.json.get("chip", None)
    img_url = request.json.get("url", None)
    userEmail = request.json.get("email", None)

    pet = Pet()
    pet.name = name
    pet.chip_identifier = chip_identifier
    pet.img_url = img_url
    pet.user_email = userEmail

    db.session.add(pet)
    db.session.commit()

    response_token = {
        "msg": "Pet added successfully"   
    }

    return jsonify(response_token), 201

@api.route('/pet/<int:id>', methods=['GET', 'PUT'])
def img_upload(id):
    pet = Pet.query.get(id)

    if request.method == 'PUT':    
        pet.img_url = request.json.get("url", None)
        db.session.commit()

        response_token = {
            "msg": "Image uploaded succesfully"
        }
    else:
        response_token = {
            "pet": pet.serialize()
        }

    return jsonify(response_token), 200

@api.route("/validate/<string:email>", methods=["GET"])
def validate_mail(email):
    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"msg": "Usuario no registrado",
        "status": 401
        }), 401
    
    else:
        response_body = {
            "msg": "Solicitúd para recuperar contraseña ingresado con éxito",
            "user": user.serialize(),
            "status": 200  
        }

    return jsonify(response_body), 200

@api.route("/recover_password", methods=["PUT"])    
def recover_password(email):

    user = User.query.get(email)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
   
    if not password:
        return "Error por favor intentatelo nuevamente"

    if request.method == 'PUT':    
        user.password = request.json.get("password", None)
        db.session.commit()

        response_token = {
            "msg": "Contraseña recuperada exitosamente"
        }

    return jsonify(response), 200
    
    

    
 
    
    
