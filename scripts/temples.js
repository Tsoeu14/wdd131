document.getElementById("currentyear").textContent = new Date().getUTCFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) {
        hamburger.textContent = "✖"; // close icon
    } else {
        hamburger.textContent = "☰"; // hamburger icon
    }
}); 
