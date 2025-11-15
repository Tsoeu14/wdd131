const button = document.getElementById('hamburger');
const menu = document.getElementById('menu');

button.addEventListener('click', () => {
    menu.classList.toggle(open);
    button.textContent = menu.classList.contains('open') ? 'x' : '&#9776';
} )