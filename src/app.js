// Importación de dependencias
import express from 'express';
import routerToys from './routes/toys.routes.js';
// Creación del servidor
const app = express();
// Setting
app.set("port", 3000 || process.env.PORT);
// Middlewares
app.use(express.json());
app.use("/api/toyStore", routerToys);
export default app;

