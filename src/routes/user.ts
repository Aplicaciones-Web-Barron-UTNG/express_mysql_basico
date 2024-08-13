import { Router, Request, Response } from 'express';
import { pool } from '../db';

const router = Router();

// Obtener todos los usuarios desde la base de datos
router.get('/', async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
});

// Crear un nuevo usuario en la base de datos
router.post('/', async (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Nombre y correo electrónico son requeridos' });
    }

    try {
        const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
        res.status(201).json({ message: 'Usuario creado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario', error });
    }
});

export default router;
