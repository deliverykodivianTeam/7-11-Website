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

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from React

# SQLite DB config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

API_TOKEN = "mysecrettoken123"  # Your secret token

# Contact model
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    mobile = db.Column(db.String(20))
    email = db.Column(db.String(100))
    course = db.Column(db.String(100))
    mode = db.Column(db.String(20))

# Create the table
with app.app_context():
    db.create_all()

# Existing POST API endpoint (your code)
@app.route('/api/contact', methods=['POST'])
def contact():
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
    except Exception as e:
        return jsonify({'message': str(e)}), 500

# NEW GET API endpoint to fetch all contacts
@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    try:
        contacts = Contact.query.all()
        contacts_list = []
        for contact in contacts:
            contacts_list.append({
                'id': contact.id,
                'name': contact.name,
                'mobile': contact.mobile,
                'email': contact.email,
                'course': contact.course,
                'mode': contact.mode
            })
        return jsonify(contacts_list), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
