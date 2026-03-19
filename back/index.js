import express from 'express';
import cors from 'cors';
import productoRoutes from './routes/productorutas.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json());

app.use("/api/productos", productoRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
