class APIHandler {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    // Método para obtener datos de la API
    async fetchData(endpoint) {
        try {
            const response = await fetch(`${this.apiUrl}${endpoint}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log("Datos recibidos de la API:", data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    }
}

// Clase para manejar mensajes temporizados
class TimerHandler {
    constructor(message, delay) {
        this.message = message;
        this.delay = delay;
    }

    // Método para mostrar el mensaje después del tiempo especificado
    displayMessage() {
        setTimeout(() => {
            console.log(this.message);
        }, this.delay);
    }
}

// Crear instancia de APIHandler
const api = new APIHandler("https://jsonplaceholder.typicode.com");

// Llamar a la REST API
api.fetchData("/posts/1"); // Obtiene el post con ID 1

// Crear instancia de TimerHandler
const timer = new TimerHandler("¡Mensaje mostrado después de 3 segundos!", 3000);

// Mostrar el mensaje después de 3 segundos
timer.displayMessage();