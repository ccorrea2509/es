import pool from "./database/connectionPostgreSQL.js"; // si usas export default

const getProducts = async () => {
    try {
        const result = await pool.query("SELECT * FROM productos"); 
        console.log(result.rows);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
};

getProducts();