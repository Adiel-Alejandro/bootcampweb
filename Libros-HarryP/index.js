const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const biblioteca = [
    {id: 1, name: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling', editorial: 'Salamandra', comentario: 'Es el primer libro de la serie literaria Harry Potter, escrito por la autora británica J. K. Rowling entre 1990 y 1995. Publicado en el año 1997.', existence: 'true'},
    {id: 2, name: 'Harry Potter y la cámara de los secretos', autor: 'J. K. Rowling', editorial: 'Salamandra', comentario: 'Es el segundo libro de la serie literaria Harry Potter, escrito por la autora británica J. K. Rowling en 1998.', existence: 'true'},
    {id: 3, name: 'Harry Potter y el prisionero de Azkaban', autor: 'J. K. Rowling', editorial: 'Bloomsbury', comentario: 'Es el tercer libro de la serie literaria Harry Potter, escrita por la autora británica J. K. Rowling en 1999.', existence: 'true'},
    {id: 4, name: 'Harry Potter y el cáliz de fuego', autor: 'J. K. Rowling', editorial: 'Salamandra', comentario: 'Es el cuarto libro de la serie literaria Harry Potter, escrita por la autora británica J. K. Rowling en 2000.', existence: 'true'},
    {id: 5, name: 'Harry Potter y la orden del Fénix', autor: 'J. K. Rowling', editorial: 'Salamandra', comentario: 'Es el quinto libro de la serie Harry Potter, escrita por la autora británica J. K. Rowling en 2003.', existence: 'true'},
    {id: 6, name: 'Harry Potter y el misterio del príncipe', autor: 'J. K. Rowling', editorial: 'Salamandra', comentario: 'Es el sexto libro de la serie literaria Harry Potter, publicado en 2005.', existence: 'true'},
    {id: 7, name: 'Harry Potter y las reliquias de la muerte', autor: 'J. K. Rowling', editorial: 'Salamandra', comentario: 'Es el séptimo libro de la serie literaria Harry Potter, publicado el 21 de julio de 2007.', existence: 'true'}
];

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get("/api/biblioteca", (req, res) => {
    res.send(biblioteca);
});

app.get("/api/biblioteca/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const libro = biblioteca.find((libro) => libro.id === id);

    if (!libro) return res.status(404).send('Libro no encontrado');
    res.json(libro);
});

app.post("/api/biblioteca", (req, res) => {
    const libro = {
        id: biblioteca.length + 1,
        name: req.body.name,
        autor: req.body.autor,
        editorial: req.body.editorial,
        comentario: req.body.comentario,
        existence: req.body.existence === 'true'
    };
    biblioteca.push(libro);
    res.send(libro);
});

app.delete("/api/biblioteca/:id", (req, res) => {
    const libro = biblioteca.find(c => c.id === parseInt(req.params.id));
    if (!libro) return res.status(404).send('Libro no encontrado');

    const index = biblioteca.indexOf(libro);
    biblioteca.splice(index, 1);
    res.send(libro);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
