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

export const editarProducto  = async (req, res) => {
  const { id } = req.params; // obtenemos el id de la ruta
  try {
    const producto = await Producto.getById(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
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