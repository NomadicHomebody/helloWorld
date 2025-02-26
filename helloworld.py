from flask import Flask, jsonify, make_response

app = Flask(__name__)



@app.route('/test123', methods=['GET'])
def test_endpoint():
    response = make_response(jsonify({"message": "Hello from the /test123 endpoint!"}))
    response.headers['Content-Type'] = 'application/json'
    response.headers['Correlation-Id'] = '1234567890'
    return response, 200

if __name__ == '__main__':
    app.run(host='localhost', port=8099, debug=True)