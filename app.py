# app.py — Backend Python con Flask
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permite conexión desde el frontend

@app.route('/api/data')
def get_data():
    return jsonify({
        "mensaje": "¡Hola desde global-id!",
        "status": "ok",
        "tecnologia": "Python + Flask"
    })

@app.route('/api/saludo/<nombre>')
def saludo(nombre):
    return jsonify({"mensaje": f"Hola, {nombre}!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)