import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    database: 'Restaurante',
    user: 'root',
    password: '12345678'
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Endpoint para obtener platos
app.get('/platos', (req, res) => {
    db.query('SELECT * FROM Platos', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

// Endpoint para agregar un plato
app.post('/agregar', (req, res) => {
    const { nombre, descripcion, nivel_dificultad, foto, precio, id_categoria } = req.body;
    db.query(
        'INSERT INTO Platos (nombre, descripcion, nivel_dificultad, foto, precio, id_categoria) VALUES (?, ?, ?, ?, ?, ?)',
        [nombre, descripcion, nivel_dificultad, foto, precio, id_categoria],
        (err, result) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json({ message: 'Plato agregado', id: result.insertId });
        }
    );
});

// Endpoint para eliminar un plato
app.delete('/eliminar/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Platos WHERE id_plato = ?', [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json({ message: 'Plato eliminado' });
    });
});

// Servidor corriendo en el puerto 5000
app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});

