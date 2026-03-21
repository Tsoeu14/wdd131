document.getElementById("currentyear").textContent = new Date().getUTCFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
function handleMenuDisplay() {
    const menu = document.getElementById('menu');
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

window.addEventListener('load', handleMenuDisplay);
window.addEventListener('resize', handleMenuDisplay);