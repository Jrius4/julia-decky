import sys
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
DEBUG = True
app.config.from_object(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


@app.route("/")
def hello():
    return "Hello World from Flask!"


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000)
