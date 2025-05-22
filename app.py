# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)  # Allow cross-origin requests from React

# # SQLite DB config
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy(app)

# # Contact model
# class Contact(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100))
#     mobile = db.Column(db.String(20))
#     email = db.Column(db.String(100))
#     course = db.Column(db.String(100))
#     mode = db.Column(db.String(20))

# # Create the table
# with app.app_context():
#     db.create_all()

# # POST API endpoint to receive form data
# @app.route('/api/contact', methods=['POST'])
# def contact():
#     data = request.json
#     try:
#         new_contact = Contact(
#             name=data['name'],
#             mobile=data['mobile'],
#             email=data['email'],
#             course=data['course'],
#             mode=data['mode']
#         )
#         db.session.add(new_contact)
#         db.session.commit()
#         return jsonify({'message': 'Contact saved successfully'}), 201
#     except Exception as e:
#         return jsonify({'message': str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os # Import os to handle database path

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from React

# Determine the path to the database
# Use an absolute path for better deployment practices
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.db') # Changed to app.db for clarity
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

API_TOKEN = "mysecrettoken123"  # Your secret token

# Existing Contact model (for your /api/contact endpoint)
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    mobile = db.Column(db.String(20))
    email = db.Column(db.String(100))
    course = db.Column(db.String(100))
    mode = db.Column(db.String(20))

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'mobile': self.mobile,
            'email': self.email,
            'course': self.course,
            'mode': self.mode
        }

# NEW Registration model (for your /api/register endpoint)
class Registration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    course = db.Column(db.String(100), nullable=False)
    whyToChoose = db.Column(db.Text)
    courseGap = db.Column(db.Text)
    skillLearning = db.Column(db.Text)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'phone': self.phone,
            'email': self.email,
            'course': self.course,
            'whyToChoose': self.whyToChoose,
            'courseGap': self.courseGap,
            'skillLearning': self.skillLearning
        }

# Create all tables (Contact and Registration)
with app.app_app_context():
    db.create_all()

# Existing POST API endpoint to receive form data (for /api/contact)
@app.route('/api/contact', methods=['POST'])
def add_contact(): # Renamed for clarity
    data = request.json
    try:
        new_contact = Contact(
            name=data['name'],
            mobile=data['mobile'],
            email=data['email'],
            course=data['course'],
            mode=data['mode']
        )
        db.session.add(new_contact)
        db.session.commit()
        return jsonify({'message': 'Contact saved successfully'}), 201
    except KeyError as e:
        return jsonify({'message': f'Missing data for key: {e}'}), 400
    except Exception as e:
        db.session.rollback() # Rollback on error
        return jsonify({'message': str(e)}), 500

# NEW POST API endpoint to receive registration form data
@app.route('/api/register', methods=['POST'])
def register_student():
    data = request.json
    try:
        new_registration = Registration(
            name=data['name'],
            phone=data['phone'],
            email=data['email'],
            course=data['course'],
            whyToChoose=data.get('whyToChoose'), # Use .get to allow optional fields
            courseGap=data.get('courseGap'),
            skillLearning=data.get('skillLearning')
        )
        db.session.add(new_registration)
        db.session.commit()
        return jsonify({'message': 'Registration successful!'}), 201
    except KeyError as e:
        return jsonify({'message': f'Missing required field: {e}'}), 400
    except Exception as e:
        db.session.rollback() # Rollback on error
        return jsonify({'message': str(e)}), 500

# Existing GET API endpoint to fetch all contacts
@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    # Basic token authentication for demonstration
    if 'Authorization' not in request.headers:
        return jsonify({'message': 'Authorization header missing'}), 401
    
    token = request.headers['Authorization'].split(" ")[1]
    if token != API_TOKEN:
        return jsonify({'message': 'Invalid API Token'}), 403

    try:
        contacts = Contact.query.all()
        # Use the to_dict method for cleaner serialization
        contacts_list = [contact.to_dict() for contact in contacts]
        return jsonify(contacts_list), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500

# NEW GET API endpoint to fetch all registrations
@app.route('/api/registrations', methods=['GET'])
def get_registrations():
    # Basic token authentication for demonstration
    if 'Authorization' not in request.headers:
        return jsonify({'message': 'Authorization header missing'}), 401
    
    token = request.headers['Authorization'].split(" ")[1]
    if token != API_TOKEN:
        return jsonify({'message': 'Invalid API Token'}), 403

    try:
        registrations = Registration.query.all()
        # Use the to_dict method for cleaner serialization
        registrations_list = [reg.to_dict() for reg in registrations]
        return jsonify(registrations_list), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500

if __name__ == '__main__':
    # Ensure the app context is pushed for db operations outside of request context
    with app.app_context():
        db.create_all() # This ensures tables are created/updated on run

    app.run(debug=True) # Run on port 5000