from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/test123', methods=['GET'])
def test_endpoint():
    return jsonify({"message": "Hello from the /test123 endpoint!"})

if __name__ == '__main__':
    app.run(host='localhost', port=8099, debug=True)