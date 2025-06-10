const loginForm = document.getElementById('loginForm');

function ingresarUsuario(e) {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    
    const existeUsuario = usuarios.find((usuario) => usuario.email === email)
    
    if (!existeUsuario) {
        window.location.href = "error.html";
        loginForm.reset()
        return
    }

    if (existeUsuario.password !== password) {
        alert("La contraseña es incorrecta")
        loginForm.reset()
        return
    }
    const usuarioLogueado = {
        nombreCompleto: existeUsuario.apellido,
        email: existeUsuario.email,
        descripción: "",
        apellido: existeUsuario.nombre,
        password: existeUsuario.password,
        favoritos: existeUsuario.favoritos || []

    }
    localStorage.setItem('logueado',JSON.stringify(usuarioLogueado))
    window.location.href = "inicio.html"
}

loginForm.addEventListener('submit', ingresarUsuario);