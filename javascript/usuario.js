const logout = document.getElementById('logout')
const logueado = JSON.parse(localStorage.getItem('logueado'))


if (!logueado) {
    window.location.href = "iniciarsesion.html"
}
else {
    const nomUser = document.getElementById('saludo')
    nomUser.innerHTML = `
    
        ${logueado.nombreCompleto}

        <br>
        <br>
        <div class="perfil-info">

            
            <h3 class="nomcom">Correo electrónico &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</h3>
            <h1 id="Ednomuser">${logueado.email}</h1>

            <h3 id="Ednomuser">Nombre de Usuario &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </h3>
            <h1 id="Ednomuser">${logueado.nombreCompleto} &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp&nbsp</h1>
            
        
            <br>
            <br>
        </div>
    `
}



function salir() {
    alert('Hasta la vista')
    localStorage.removeItem('logueado')
    window.location.href = 'index.html'
}

logout.addEventListener('click', salir)