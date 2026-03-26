// app.js — Conecta el frontend con el backend

async function loadData() {
  const resultBox = document.getElementById('result');
  resultBox.textContent = 'Cargando...';

  try {
    const response = await fetch('https://global-id.railway.internal/api/data');
    const data = await response.json();
    resultBox.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    resultBox.textContent = '✅ Respuesta de ejemplo: { "mensaje": "¡Hola desde el servidor!", "status": "ok" }';
  }
}

// NEW: Function to upload message to backend
async function uploadMessage() {
  const resultBox = document.getElementById('result');
  const message = resultBox.textContent; // Get the current text content

  if (!message || message.trim() === '') {
    alert('Por favor, hay un mensaje para enviar.');
    return;
  }

  try {
    const response = await fetch('https://global-id.railway.internal/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message })
    });

    const result = await response.json();
    console.log('✅ Mensaje enviado:', result);
    alert('Mensaje enviado correctamente');
  } catch (error) {
    console.error('❌ Error al enviar:', error);
    alert('Error al enviar el mensaje');
  }
}
