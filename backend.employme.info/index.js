const express = require('express');
const app = express();
const port = 3000; // Elige el puerto que prefieras

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola desde Express Espress!');
});

app.listen(port, () => {
  console.log(`El servidor está corriendo en http://localhost:${port}`);
});
