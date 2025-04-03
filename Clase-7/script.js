// Definición de la clase 'Rectángulo'
class Rectangulo {
    constructor(ancho, altura) {
    this.ancho = ancho; // Propiedad para el ancho del rectángulo
    this.altura = altura; // Propiedad para la altura del rectángulo
  }


calcularArea() {
    return this.ancho * this.altura; // Fórmula: ancho * altura
  }

calcularPerimetro() {
    return 2 * (this.ancho + this.altura); // Fórmula: 2 * (ancho + altura)
  }
}

// Solicitar ancho y altura al usuario
const ancho = parseFloat(prompt("Ingresa el ancho del rectángulo:"));
const altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));

// Crear una instancia (objeto) de la clase 'Rectángulo'
const miRectangulo = new Rectangulo(ancho, altura);

// Calcular el área y el perímetro utilizando los métodos de la clase

const area = miRectangulo.calcularArea();
const perimetro = miRectangulo.calcularPerimetro();

// Mostrar los resultados al usuario
console.log(`Área del rectángulo: ${area}`);
console.log(`Perímetro del rectángulo: ${perimetro}`);
