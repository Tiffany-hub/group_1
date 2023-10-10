from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return "Welcome to the Payment Processor!"

@app.route('/process_payment', methods=['POST'])
def process_payment():
    try:
        data = request.get_json()
        name = data.get('name')
        phone_number = data.get('phoneNumber')
        email = data.get('email')
        receive_via = data.get('receiveVia')
        mpesa_pin = data.get('mpesaPin')
        
   
        
        response_message = "Payment processed successfully. You will receive your ticket in the next 24 hours."
        return jsonify({'message': response_message}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
