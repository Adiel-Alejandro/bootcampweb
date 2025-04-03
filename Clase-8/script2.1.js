// Lista de libros
const Bibliotecas = [
    { titulo: "The Road Ahead", autor: "Bill Gates", leido: true },
    { titulo: "Walter Isaacson", autor: "Steve Jobs", leido: true },
    { titulo: "Mockingjay: The Final Book of The Hun ger Games", autor: "Suzanne Collins", leido: false }
];

// Mostrar estado de lectura de cada libro
libros.forEach((libro) => {
    const estado = libro.leido ? "leído" : "no leído";
    console.log(`Libro: "${libro.titulo}", Autor: ${libro.autor}, Estado: ${estado}`);
});