import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    print(request.get_json())
    text = request.get_json().get("message")
    response = text
    message = {"answer": response}
    time.sleep(2)
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)