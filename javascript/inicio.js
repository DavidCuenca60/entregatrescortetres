function Character(id, name, ki, maxKi, race, gender, image, affiliation, description) {
    
    this.id = id;
    this.name = name;
    this.ki = ki;
    this.maxKi = maxKi;
    this.race = race;
    this.gender = gender;
    this.image = image;
    this.affiliation = affiliation;
    this.description = description;

}

function renderCharacter(character) {
    const card = document.createElement('div');
    card.className = 'character-card';

    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <div class="character-info">
            <h2>${character.name}</h2>
            <a href="personaje.html?id=${character.id}">Ver detalles</a>
        </div>
        `;

            return card;
        }


let personajesCargados = [];
let todosLosPersonajes = [];


function fetchAndDisplayCharacters() {
    const container = document.getElementById('characters-container');

    const personajeIDs = [1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

    personajeIDs.forEach(id => {
        fetch(`https://dragonball-api.com/api/characters/${id}`)
            .then(response => response.json())
            .then(data => {
                const character = new Character(
                    data.id, data.name, data.ki,
                    data.maxKi, data.race, data.gender,
                    data.image, data.affiliation, data.description
                );

                

                const cardCharacter = renderCharacter(character);
                container.appendChild(cardCharacter);
            })
    });
}

function buscarPersonaje() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm.trim()) {
        renderCharacter();
        return;
    }
    
    const resultados = todosLosPersonajes.filter(personaje => 
        personaje.image.toLowerCase().includes(searchTerm) || 
        personaje.name.toLowerCase().includes(searchTerm) ||
        personaje.id.toLowerCase().includes(searchTerm)
    );
    
    personajesCargados = resultados;
    renderCharacter();
}


document.addEventListener('DOMContentLoaded', fetchAndDisplayCharacters);


const logueado = JSON.parse(localStorage.getItem('logueado'))

if (!logueado) {
    window.location.href = "login.html"
}
else {
    const saludo = document.getElementById('saludo')
    saludo.innerHTML = `Bienvenid@, ${logueado.nombreCompleto}`
}
