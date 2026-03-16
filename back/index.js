
const express = require('express');
const app = express();
const productoRoutes = require('./routes/producto.js');

app.use(express.json()); 

app.use("/api/productos", productoRoutes);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
