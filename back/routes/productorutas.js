/*
const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController.js');

// Rutas CRUD

router.get('/', productoController.obtenerProductos);
router.post('/', productoController.crearProducto);

router.get('/:id', productoController.getById);
router.post('/', productoController.create);
router.put('/:id', productoController.update);
router.delete('/:id', productoController.delete);

module.exports = router;*/
import express from 'express';
import { crearProducto, obtenerProductos,editarProducto } from '../controller/productoController.js'; 

const router = express.Router();

router.get('/', obtenerProductos);
router.post('/', crearProducto);
router.get('/:id', editarProducto);

export default router;