const pool = require('../database/connectionPostgreSQL.js');

const Producto = {};

// Obtener todos los productos
Producto.getAll = async () => {
  const result = await pool.query("SELECT * FROM productos"); 
  console.log(result.rows);

};

// Obtener un producto por id
Producto.getById = async (id) => {
  const result = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
  return result.rows[0];
};

// Crear un producto
Producto.create = async (data) => {
  const { sku, nombre, categoria, precio, stock_actual, stock_minimo } = data;
  const query = `
    INSERT INTO productos (sku, nombre, categoria, precio, stock_actual, stock_minimo)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `;
  const result = await pool.query(query, [sku, nombre, categoria, precio, stock_actual, stock_minimo]);
  return result.rows[0];
};

// Actualizar un producto
Producto.update = async (id, data) => {
  const { sku, nombre, categoria, precio, stock_actual, stock_minimo } = data;
  const query = `
    UPDATE productos
    SET sku=$1, nombre=$2, categoria=$3, precio=$4, stock_actual=$5, stock_minimo=$6
    WHERE id=$7
    RETURNING *
  `;
  const result = await pool.query(query, [sku, nombre, categoria, precio, stock_actual, stock_minimo, id]);
  return result.rows[0];
};

// Eliminar un producto
Producto.delete = async (id) => {
  const result = await pool.query('DELETE FROM productos WHERE id=$1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = Producto;