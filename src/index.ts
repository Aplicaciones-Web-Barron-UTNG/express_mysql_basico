import express, { Application, Request, Response } from 'express';
import userRoutes from './routes/user';

const app: Application = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

// Ruta básica
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, TypeScript con Express!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
