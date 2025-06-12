const personajeContainer = document.querySelector('#personaje-container');

function obtenerUsuarioLogueado() {
    return JSON.parse(localStorage.getItem('logueado'));
}

function obtenerUsuariosRegistrados() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

function guardarUsuarioLogueado(usuario) {
    localStorage.setItem('logueado', JSON.stringify(usuario));
}

function guardarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}


function guardarFavoritosParaUsuario(favoritos) {
    let logueado = obtenerUsuarioLogueado();
    let usuarios = obtenerUsuariosRegistrados();

    
    logueado.favoritos = favoritos;
    guardarUsuarioLogueado(logueado);

    
    const index = usuarios.findIndex(user => user.email === logueado.email);
    if (index !== -1) {
        usuarios[index].favoritos = favoritos;
        guardarUsuarios(usuarios);
    }
}

function obtenerFavoritosDelUsuario() {
    const logueado = obtenerUsuarioLogueado();
    return logueado?.favoritos || [];
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

    
    const favoritos = obtenerFavoritosDelUsuario();
    const yaEsFavorito = favoritos.some(fav => fav.id === personaje.id);

    checkbox.checked = yaEsFavorito;

    checkbox.addEventListener("change", () => {
        let nuevosFavoritos = obtenerFavoritosDelUsuario();

        if (checkbox.checked) {
            
            nuevosFavoritos.push({
                id: personaje.id,
                name: personaje.name,
                image: personaje.image
            });
        } else {
            
            nuevosFavoritos = nuevosFavoritos.filter(fav => fav.id !== personaje.id);
        }

        guardarFavoritosParaUsuario(nuevosFavoritos);
    });
}

fetchAndDisplayCharacters();
