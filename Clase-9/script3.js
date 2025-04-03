$(document).ready(function () {
    // Colores específicos para alternar
    const color1 = "red";
    const color2 = "blue";
    let bordesRedondeados = false; // Estado inicial de los bordes


    // Cambiar color entre dos colores específicos
    $("#cambiarColor").click(function () {
        $(".contenedor-caja").each(function () {
            const currentColor = $(this).css("background-color");
            const newColor = currentColor === "rgb(255, 0, 0)" ? color2 : color1; // Compara con los valores RGB
            $(this).css("background-color", newColor);
        });
    });

    // Alternar bordes redondeados
    $("#alternarBordes").click(function () {
        bordesRedondeados = !bordesRedondeados; // Cambiar estado
        const borderRadiusValue = bordesRedondeados ? "15px" : "0px";
        $(".contenedor-caja").css("border-radius", borderRadiusValue);
    });

    // Agregar una nueva caja
    $("#agregarCaja").click(function () {
        $("#contenedor").append('<div class="contenedor-caja"></div>');
    });
});

    

