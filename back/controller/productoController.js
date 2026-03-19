// productoController.js
import { Producto } from '../model/productomodelo.js'; // import nombrado

export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.getAll();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};