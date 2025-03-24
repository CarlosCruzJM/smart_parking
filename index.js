const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Cajon = require('./models/Cajon');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Para leer JSON desde POST

// Conexión a MongoDB
mongoose.connect('mongodb+srv://sp:<db_password>@iotsp.nva9p.mongodb.net/iotsp?retryWrites=true&w=majority&appName=iotsp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch(err => console.error('Error de conexión:', err));

// Ruta para recibir datos del ESP32
app.post('/api/cajones', async (req, res) => {
  try {
    const nuevoCajon = new Cajon(req.body);
    await nuevoCajon.save();
    res.status(201).json({ message: 'Datos guardados exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
