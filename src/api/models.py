from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey


db = SQLAlchemy()

# Data Model: 
# user, user_contact, vet_user, veterinary_organization, pet, pet_controls

class User(db.Model):
    id = Column(Integer, primary_key=True)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(80), unique=False, nullable=False)
    username = Column(String(50), unique=True)
    is_active = Column(Boolean(), unique=False, nullable=False)
    first_name = Column(String(50))
    last_name = Column(String(50))
    gender = Column(String(50))
    vet_user_fk = Column(Integer, ForeignKey('vet_user.id'))
    vet_users = relationship("Vet_user", foreign_keys=[vet_user_fk])
    
    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password
        }


class User_contact(db.Model): 
    id = Column(Integer, primary_key=True)
    address = Column(String(100))
    city = Column(String(100))
    phone = Column(Integer)
    user_contact_fk = Column(Integer, ForeignKey('user.id'))
    users_contact = relationship("User", foreign_keys=[user_contact_fk])
    
    def __repr__(self):
        return '<User_contact %r>' % self.address

    def serialize(self):
        return {
            "id": self.id,
            "address": self.address,
            # do not serialize the password, its a security breach
        }

class Vet_user(db.Model):
    __tablename__ = 'vet_user'
    id = Column(Integer, primary_key=True)
    email = Column(String(120), unique=True, nullable=False)
    RUN = Column(String(12))
    first_name = Column(String(50))
    last_name = Column(String(50))
    gender = Column(String(50))
    birth_date = Column(String(50))
    is_exotic = Column(Boolean)
    user_fk = Column(Integer, ForeignKey('user.id'))
    users = relationship('User', foreign_keys=[user_fk])

    def __repr__(self):
        return '<Vet_user %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Veterinary_organization(db.Model):
    __tablename__ = 'veterinary_organization'
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    alias_name = Column(String(100))
    address = Column(String(100))
    city = Column(String(100))
    phone = Column(Integer)
    email = Column(String(80), unique=True)
    vet_user_fk = Column(Integer, ForeignKey('vet_user.id'))
    vet_users = relationship("Vet_user", foreign_keys=[vet_user_fk])

    def __repr__(self):
        return '<Veterinary_organization %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Pet(db.Model):
    __tablename__ = 'pet'
    id = Column(Integer, primary_key=True)
    chip_identifier = Column(String(50))
    nickname = Column(String(100))
    species = Column(String(100))
    breed = Column(String(100))
    gender = Column(String(100))
    pet_user_fk = Column(Integer, ForeignKey('user.id'))
    pet_users = relationship("User", foreign_keys=[pet_user_fk])

    def __repr__(self):
        return '<Pet %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "nickname": self.nickname,
            # do not serialize the password, its a security breach
        }

class Pet_controls(db.Model):
    __tablename__ = 'pet_controls'
    id = db.Column(Integer, primary_key=True)
    pet_medication = Column(String(50))
    pet_exams = Column(String(100))
    pet_vaccines = Column(String(100))
    pet_controls_fk = Column(Integer, ForeignKey('pet.id'))
    pets = relationship("Pet", foreign_keys=[pet_controls_fk])

    def __repr__(self):
        return '<Pet_controls %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "vaccines": self.vaccines,
            # do not serialize the password, its a security breach
        }

# db.create_all()