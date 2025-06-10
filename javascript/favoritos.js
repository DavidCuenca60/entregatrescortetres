const nombre = localStorage.getItem("nombreUsuario") || "Nombre de Usuario";
const descripcion = localStorage.getItem("descripcionUsuario") || "Sin descripción.";

document.getElementById("nombrePerfilFavoritos").textContent = nombre;
document.getElementById("descripcionPerfilFavoritos").innerHTML = descripcion.replace(/\n/g, "<br>");



document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.className = "favoritos-container";
    document.querySelector(".botfav").appendChild(container);

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
        container.innerHTML = "<p>No tienes personajes favoritos aún.</p>";
        return;
    }

    favoritos.forEach(character => {
        





        const card = document.createElement("div");
        card.className = "character-card";
        card.innerHTML = `

            
            <img src="${character.image}" alt="${character.name}" class="character-image">

            <div class="Ordername">

            <div class="charname">
            <h2>${character.name}</h2>
            </div>
            <div class="chardetail">
            <a href="GOKU.html?id=${character.id}" class="detail-link">Ver Detalles</a>
            </div>
            </div>
        `;
        container.appendChild(card);
    });
});