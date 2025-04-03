document.addEventListener("DOMContentLoaded", function() {
    const color1 = "red";
    const color2 = "blue";
    let bordesRedondeados = false; // Estado inicial de los bordes

    // Obtener los elementos del DOM
    const cuadros = document.querySelectorAll(".contenedor-caja");
    const btnCambiarColor = document.getElementById("cambiarColor");
    const btnAgregarCaja = document.getElementById("agregarCaja");
    const btnAlternarBordes = document.getElementById("alternarBordes");
    const contenedor = document.getElementById("contenedor");

    // Cambiar color entre dos colores específicos
    btnCambiarColor.addEventListener("click", function() {
        cuadros.forEach(function(cuadro) {
            const currentColor = getComputedStyle(cuadro).backgroundColor;
            const newColor = currentColor === "rgb(255, 0, 0)" ? color2 : color1; // Compara con los valores RGB
            cuadro.style.backgroundColor = newColor;
        });
    });

    // Alternar bordes redondeados
    btnAlternarBordes.addEventListener("click", function() {
        bordesRedondeados = !bordesRedondeados; // Cambiar estado
        const borderRadiusValue = bordesRedondeados ? "15px" : "0px";
        cuadros.forEach(function(cuadro) {
            cuadro.style.borderRadius = borderRadiusValue;
        });
    });

    // Agregar una nueva caja
    btnAgregarCaja.addEventListener("click", function() {
        const nuevaCaja = document.createElement("div");
        nuevaCaja.classList.add("contenedor-caja");
        nuevaCaja.style.backgroundColor = "blue"; // Color inicial azul
        contenedor.appendChild(nuevaCaja);
    });
});    
