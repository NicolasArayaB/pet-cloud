from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# starting tables with users (organization, veterinary and user)

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    vet_user_fk = Column(Integer, ForeignKey('vet_user.id'))

class Veterinary_organization(db.Model):
    __tablename__ = 'veterinary_organization'
    id = db.Column(Integer, primary_key=True)
    name = db.Column(db.String(100)
    alias_name = db.Column(db.String(100)
    city = db.Column(db.String(100)
    address = db.Column(db.String(100)
    city = db.Column(db.String(100)
    phone = db.Column(db.Integer)
    email = db.Column(db.String(80), unique=True)
    vet_user_fk = Column(Integer, ForeignKey('vet_user.id'))

class Vet_user(db.Model):
    __tablename__ = 'vet_user'
    id = Column(Integer, primary_key=True)
    RUN = db.Column(db.String(12)
    first_name = db.Column(db.String(50)
    last_name = db.Column(db.String(50)
    gender = db.Column(db.String(50)
    birth_date = db.Column(db.String(50)
    is_exotic = db.Column(db.Boolean)
    user_id = Column(Integer, ForeignKey('user.id'))


    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }