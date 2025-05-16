import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración de dotenv
dotenv.config();

// Para obtener la ruta correcta en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Servir imágenes estáticas desde la carpeta 'images'
app.use('/images', express.static(path.join(__dirname, 'images')));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "RestauranteDB"
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a MySQL');
});

// Obtener todos los platos
app.get('/platos', (req, res) => {
    db.query('SELECT * FROM platos', (err, results) => {
        if (err) {
            console.error('Error al obtener los platos:', err);
            return res.status(500).json({ message: 'Hubo un error al obtener los platos.' });
        }
        res.json(results);
    });
});

// Obtener receta con nombres de ingredientes, cantidad y unidad
app.get('/recetas/:id', (req, res) => {
    const { id } = req.params;

    // Consulta con JOIN para obtener nombres, cantidad y unidad
    const query = `
        SELECT i.nombre AS ingredientes, r.cantidad_requerida, r.unidad
        FROM recetas r
        JOIN ingredientes i ON r.id_ingrediente = i.id_ingrediente
        WHERE r.id_plato = ?;
    `;

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al obtener la receta:', err);
            return res.status(500).json({ message: 'Hubo un error al obtener la receta.' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'No se encontraron ingredientes para este platillo.' });
        }
        res.json(results);  // Devuelve los ingredientes con nombre, cantidad y unidad
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
