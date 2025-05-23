from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_mail import Mail, Message
import os
import json

# Initialize app
app = Flask(__name__, static_folder='dist', template_folder='dist')
CORS(app)

# Zoho Mail Configuration
app.config.update(
    MAIL_SERVER='smtp.zoho.in',
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USERNAME='preethi.jb@kodivian.com',
    MAIL_PASSWORD='ea99CHS6JNm7',
    MAIL_DEFAULT_SENDER='jayashree.k@abits.co.in'
)
mail = Mail(app)

# SQLite DB config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

API_TOKEN = "mysecrettoken123"  # secret token for authorization

# Contact model
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    mobile = db.Column(db.String(20))
    email = db.Column(db.String(100))
    course = db.Column(db.String(100))
    mode = db.Column(db.String(20))

# Registration model
class Registration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    email = db.Column(db.String(100))
    course = db.Column(db.String(100))
    whyToChoose = db.Column(db.Text)
    courseGap = db.Column(db.Text)
    skillLearning = db.Column(db.Text)

# Create tables
with app.app_context():
    db.create_all()

# Static frontend routes
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/<path:path>")
def serve_static(path):
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

@app.route('/assets/<path:filename>')
def serve_assets(filename):
    return send_from_directory(os.path.join(app.static_folder, 'assets'), filename)

# Contact form API
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

        # Send email
        msg = Message(
            subject="📩 New Contact Form Submission",
            recipients=['jayashree.k@abits.co.in'],
            body=f"""
Name: {data['name']}
Mobile: {data['mobile']}
Email: {data['email']}
Course: {data['course']}
Mode: {data['mode']}
            """
        )
        mail.send(msg)

        return jsonify({'message': 'Contact saved and email sent successfully'}), 201
    except Exception as e:
        return jsonify({'message': str(e)}), 500

# Registration form API
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    try:
        new_registration = Registration(
            name=data['name'],
            phone=data['phone'],
            email=data['email'],
            course=data['course'],
            whyToChoose=data.get('whyToChoose', ''),
            courseGap=data.get('courseGap', ''),
            skillLearning=data.get('skillLearning', '')
        )
        db.session.add(new_registration)
        db.session.commit()

        # Send registration email
        msg = Message(
            subject="📋 New Registration Submission",
            recipients=['preethi.jb@kodivian.com'],
            body=f"""
Name: {data['name']}
Phone: {data['phone']}
Email: {data['email']}
Course: {data['course']}
Why Choose: {data.get('whyToChoose', '')}
Course Gap: {data.get('courseGap', '')}
Skills to Learn: {data.get('skillLearning', '')}
            """
        )
        mail.send(msg)

        return jsonify({'message': 'Registration saved and email sent successfully'}), 201
    except Exception as e:
        return jsonify({'message': str(e)}), 500

# Get contacts
@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    auth_header = request.headers.get('Authorization')
    if not auth_header or f'Bearer {API_TOKEN}' not in auth_header:
        return jsonify({'message': 'Unauthorized'}), 401
    try:
        contacts = Contact.query.all()
        return jsonify([{
            'id': c.id,
            'name': c.name,
            'mobile': c.mobile,
            'email': c.email,
            'course': c.course,
            'mode': c.mode
        } for c in contacts]), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500

# Get registrations
@app.route('/api/registrations', methods=['GET'])
def get_registrations():
    auth_header = request.headers.get('Authorization')
    if not auth_header or f'Bearer {API_TOKEN}' not in auth_header:
        return jsonify({'message': 'Unauthorized'}), 401
    try:
        registrations = Registration.query.all()
        return jsonify([{
            'id': r.id,
            'name': r.name,
            'phone': r.phone,
            'email': r.email,
            'course': r.course,
            'whyToChoose': r.whyToChoose,
            'courseGap': r.courseGap,
            'skillLearning': r.skillLearning
        } for r in registrations]), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500

# Run the server
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
