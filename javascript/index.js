const tarjetas = document.querySelectorAll('.itemcarrusel');
const totalTarjetas = tarjetas.length;
let actualIndex = 0;

function showSlide(index) {
    tarjetas.forEach((tarjeta, i) => {
        tarjeta.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    actualIndex = (actualIndex + 1) % totalTarjetas;
    showSlide(actualIndex);
}

function prevSlide() {
    actualIndex = (actualIndex - 1 + totalTarjetas) % totalTarjetas;
    showSlide(actualIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(actualIndex);
    setInterval(nextSlide, 4000);

    
document.querySelectorAll('.flechascarrusel a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.href.includes('left')) {
            prevSlide();
        } else {
            nextSlide();
        }
        });
    });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    const sugerenciasGuardadas = JSON.parse(localStorage.getItem('sugerencias')) || [];

    sugerenciasGuardadas.push({ nombre, email, mensaje });

    localStorage.setItem('sugerencias', JSON.stringify(sugerenciasGuardadas));

    alert('¡Gracias por tu sugerencia! Ha sido guardada.');
    
    this.reset();
});
