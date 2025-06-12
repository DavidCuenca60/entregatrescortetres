function mostrarFavoritos() {
    const container = document.getElementById('favoritos-container');
    container.innerHTML = '';

    const logueado = JSON.parse(localStorage.getItem('logueado'));
    const favoritos = logueado?.favoritos || [];

    if (favoritos.length === 0) {
        container.innerHTML = '<p style="color: white;">Aún no tienes personajes favoritos.</p>';
        return;
    }

    favoritos.forEach(personaje => {
        const card = document.createElement('div');
        card.className = 'character-card';

        card.innerHTML = `

            
            <img src="${personaje.image}" alt="${personaje.name}" class="character-image">
            <div class="character-info">
                <h2>${personaje.name}</h2>
                <a href="personaje.html?id=${personaje.id}">Ver detalles</a>
            </div>
            
        `;

        container.appendChild(card);
    });
}



document.addEventListener('DOMContentLoaded', mostrarFavoritos);


const logueado = JSON.parse(localStorage.getItem('logueado'))


if (!logueado) {
    window.location.href = "login.html"
}
else {
    const saludo = document.getElementById('saludo')
    saludo.innerHTML = `${logueado.nombreCompleto}`
}

