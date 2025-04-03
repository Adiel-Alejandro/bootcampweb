document.addEventListener("DOMContentLoaded", () => {

    //Ejecicio con Axios
const apiURL = 'https://jsonplaceholder.typicode.com/users';
const userList = document.getElementById('user-list');

// Solicitud GET con Axios API
axios.get(apiURL)
    .then(response => {
        const users = response.data;
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.username;
            userList.appendChild(li);
        });
    })
    .catch(error => console.error('Error al obtener los usuarios:', error));

    //Ejercicio con Fetch

    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    const userList = document.getElementById('user-list');

    // Solicitud GET con Fetch API
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.username;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error al obtener los usuarios:', error));

    // //Ejercicio con JQuery
    const apiURL = 'https://jsonplaceholder.typicode.com/users'; // URL de la API

    // Solicitud GET con jQuery
    $.get(apiURL, function(users) {
        users.forEach(user => {
            const li = $('<li></li>').text(user.username); // Crear un elemento de lista
            $('#user-list').append(li); // Añadir el elemento a la lista
        });
    }).fail(function() {
        console.error('Error al obtener los usuarios'); // Manejo de errores
    });

});