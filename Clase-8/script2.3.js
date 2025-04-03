let participantes = ["Elena", "Carlos", "Javier", "Laura", "Miguel", "Patricia"];

console.log("participantes del concurso: " + participantes);

participantes.splice(2, 1, 'Laura');
participantes.splice(3, 1, 'Javier');
console.log("Laura supera a Javier y quedan las posciones de la siguiente manera: " + participantes);

console.log("Participante descalificado: "+ participantes.pop());
console.log("Quedan los participantes: " + participantes);

console.log("se agrregan 2 nuevos participantes tomando los siguientes lugares");
participantes.splice(1, 1, 'Raul');
participantes.splice(2, 1, 'sofia');
participantes.splice(3, 1, 'Carlos');
participantes.splice(4, 1, 'Laura');
participantes.splice(5, 1, 'Javier');
participantes.splice(6, 1, 'Miguel');
console.log("Aso es como queda la Tabla: " + participantes);

console.log("se agrega una nueva participante y toma el primer lugar");
participantes.splice(0, 0, 'Carmen');
console.log("Esta es la Tabla Final: " + participantes);