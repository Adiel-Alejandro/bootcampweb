document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://rickandmortyapi.com/api/character"; // Endpoint de la API
    const resultsDiv = document.getElementById("results");

    // Fetch a la API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Obtener los primeros 5 personajes
            const characters = data.results.slice(0, 10);
            displayResults(characters);
        })
        .catch(error => {
            resultsDiv.innerHTML = `<p>Error al consultar la API: ${error.message}</p>`;
        });

    // Función para mostrar resultados
    function displayResults(characters) {
        characters.forEach(character => {
            const div = document.createElement("div");
            div.classList.add("result-item");
            div.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <div>
                    <h3>${character.name}</h3>
                    <p>Especie: ${character.species}</p>
                    <p>Estado: ${character.status}</p>
                </div>
            `;
            resultsDiv.appendChild(div);
        });
    }
});
