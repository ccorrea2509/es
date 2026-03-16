const Producto = require('../model/producto.js');

//const productoController = {};
// Listar todos los productos
exports.crearProducto = (req, res) => {
    // Lógica para crear un producto
    console.log(req.body); // Asegúrate de que el cuerpo de la solicitud se esté recibiendo correctamente
};

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.getAll();
    res.json(productos);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
/*
productoController.getAll = async (req, res) => {
  
  try {
    const productos = await Producto.getAll();
    res.json(productos);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un producto por ID
productoController.getById = async (req, res) => {
  try {
    const producto = await Producto.getById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un nuevo producto
productoController.create = async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar un producto
productoController.update = async (req, res) => {
  try {
    const productoActualizado = await Producto.update(req.params.id, req.body);
    if (!productoActualizado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(productoActualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un producto
productoController.delete = async (req, res) => {
  try {
    const productoEliminado = await Producto.delete(req.params.id);
    if (!productoEliminado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(productoEliminado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
*/
//module.exports = productoController;