//const pool = require('../database/connectionPostgreSQL.js');
import pool from '../database/connectionPostgreSQL.js';

export const Producto = {
  getById: async (id) => {
    try {
      const result = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
      return result.rows[0]; // devuelve un solo producto
    } catch (err) {
      console.error('Error al obtener producto por id:', err);
      throw err;
    }
  },
  getAll: async () => {
    try {
      const result = await pool.query('SELECT * FROM productos');
      return result.rows;
    } catch (err) {
      console.error('Error al obtener productos:', err);
      throw err;
    }
  },

  create: async (data) => {
    const { sku, nombre, categoria, precio, stock_actual, stock_minimo } = data;
    try {
      const result = await pool.query(
        'INSERT INTO productos(sku, nombre, categoria, precio, stock_actual, stock_minimo) VALUES($1,$2,$3,$4,$5,$6) RETURNING *',
        [sku, nombre, categoria, precio, stock_actual, stock_minimo]
      );
      return result.rows[0];
    } catch (err) {
      console.error('Error al crear producto:', err);
      throw err;
    }
  }
};