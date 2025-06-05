from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Дозволити запити з фронтенду (React)

@app.route('/api/hello')
def hello():
    return jsonify(message='Привіт із Flask!')

if __name__ == '__main__':
    app.run(debug=True, port=5000)