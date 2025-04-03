// Referencia al campo de texto donde se muestran los resultados
let resultField = document.getElementById("calculadora-resultado");

// Función para agregar un valor al campo de resultados
function appendValue(value) {
  resultField.value += value; // Agrega el valor seleccionado al final del texto actual
}

// Función para limpiar el campo de resultados
function clearResult() {
  resultField.value = ""; // Vacía el contenido del campo de texto
}

// Función para calcular el resultado de la expresión en el campo de texto
function calculateResult() {
  try {
    const expression = resultField.value;
    const tokens = expression.split(/([+\-*/])/); // Divide números y operadores
    let result = parseFloat(tokens[0]); // Primer número

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i]; // Operador
      const nextNumber = parseFloat(tokens[i + 1]); // Siguiente número

      switch (operator) {
        case '+':
          result += nextNumber;
          break;
        case '-':
          result -= nextNumber;
          break;
        case '*':
          result *= nextNumber;
          break;
        case '/':
          result /= nextNumber;
          break;
        default:
          throw new Error("Operador no válido");
      }
    }

    resultField.value = result; // Mostrar el resultado
  } catch {
    alert("¡Expresión inválida!");
    clearResult();
  }
}