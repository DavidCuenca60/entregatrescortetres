const personajeContainer = document.querySelector('#personaje-container');

function obtenerPersonajeFavorito() {
    const favoritos = localStorage.getItem("personajesFavoritos");
    return favoritos ? JSON.parse(favoritos) : [];
}

function guardarPersonajeFavorito(favoritos) {
  localStorage.setItem("personajesFavoritos", JSON.stringify(favoritos));
}


async function fetchAndDisplayCharacters() {
    const personajeId = new URLSearchParams(window.location.search).get('id');
    const response = await fetch(`https://dragonball-api.com/api/characters/${personajeId}`);
    const personaje = await response.json();
    displayCharacter(personaje);
    
}

function displayCharacter(personaje) {
    personajeContainer.innerHTML = `

      <div class="NAME">

        <div class="regreso">
          <div class="reg">
            <a href="inicio.html"><img src="imagenes/arrowleftcircle.png" alt="User Image" class="left-im"></a>
          </div>
        </div>



        <div class="gok">
          <h1>${personaje.name}</h2>  
        </div>  
      </div>


      <div class="general">
        
            <div class="inf">

        <div class="recuadro">
          <div class="nom">
            <div class="nombre">
              <h2>INFORMACIÓN</h2>
            </div>
        </div>
        <div class="cuadro">
          
          
          
    
          <div class="tex">
            <div class="texto">
              <h3>
                <p>Ki: ${personaje.ki}</p>
                <p>Max Ki: ${personaje.maxKi}</p>
                <p>Raza: ${personaje.race}</p>
                <p>Género: ${personaje.gender}</p>
                <p>Afiliación: ${personaje.affiliation || "Desconocida"}</p>
              </h3>
            </div>
            </div>
        </div>
        <br>
        <div class="bot">
          <div class="botoned">
            <h1>FAVORITO</h1>
          </div>
        </div>
        
        <input type="checkbox" id="favCheckbox" class="fav-checkbox">
        <label for="favCheckbox" class="fav-label">
            <i class="fa fa-heart"></i>
        </label>

        
        </div>
  
  
        
        <div class="card-list-DOS">
                
          <div class="card-item-BULMA">

              <img src="${personaje.image}" />
              <div class="navegation-BULMA">
                  
              </div>
          </div>

          <div class="recuadro-dos">
            <div class="nom-dos">
              <div class="nombre-dos">
                <h2>DESCRIPCIÓN</h2>
              </div>
          </div>
          <div class="cuadro-dos">
            
            
            
      
            <div class="tex-dos">
              <div class="texto-dos">
                <p>
                  

                  <p class="product-description">${personaje.description}</p>
                </p>
              </div>
              </div>
          </div>
          <br>
        
  
        </div>
       
        <br>
  
        </div>
      </div>

        
            
                
        
        
      </div>  
        
    `;

    const checkbox = document.getElementById("favCheckbox");

    // Verificamos si el personaje ya está en favoritos
    const favoritos = obtenerPersonajeFavorito();
    const yaEsFavorito = favoritos.some(fav => fav.id === personaje.id);

    checkbox.checked = yaEsFavorito;

    checkbox.addEventListener("change", () => {
        let nuevosFavoritos = obtenerPersonajeFavorito();

        if (checkbox.checked) {
            // Agregar personaje
            nuevosFavoritos.push({
                id: personaje.id,
                name: personaje.name,
                image: personaje.image
            });
        } else {
            // Quitar personaje
            nuevosFavoritos = nuevosFavoritos.filter(fav => fav.id !== personaje.id);
        }

        guardarPersonajeFavorito(nuevosFavoritos);
    });
}

fetchAndDisplayCharacters();
