// app.js — Conecta el frontend con el backend

async function loadData() {
  const resultBox = document.getElementById('result');
  resultBox.textContent = 'Cargando...';

  try {
    // Cuando tu backend Flask/Spring esté corriendo en local:
    const response = await fetch('https://global-id.railway.internal/api/data');
    const data = await response.json();
    resultBox.textContent = JSON.stringify(data, null, 2);
    const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:5000'
  : 'https://tu-backend.railway.app';

const response = await fetch(`${API_URL}/api/data`);
    } catch (error) {
    // Si no hay backend aún, muestra datos de ejemplo
    resultBox.textContent = '✅ Respuesta de ejemplo: { "mensaje": "¡Hola desde el servidor!", "status": "ok" }';
  }
}
