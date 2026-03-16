/*const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController.js');

router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);


module.exports = router;*/
const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController.js');

// Rutas CRUD

router.get('/', productoController.obtenerProductos);
router.post('/', productoController.crearProducto);
//router.get('/', productoController.getAll);
/*router.get('/:id', productoController.getById);
router.post('/', productoController.create);
router.put('/:id', productoController.update);
router.delete('/:id', productoController.delete);*/

module.exports = router;