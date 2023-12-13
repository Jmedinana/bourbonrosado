const express = require('express');
const app = express();

app.use(express.json());

let publicaciones = [];

app.post('/agregar-publicacion', (req, res) => {
    const nuevaPublicacion = req.body;
    publicaciones.push(nuevaPublicacion);
    res.status(200).send('Publicación agregada exitosamente');
});

app.get('/publicaciones', (req, res) => {
    res.status(200).json(publicaciones);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
