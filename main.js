// Bienvenidos al código detrás de Neologic.MDQ! //

const menu = document.getElementById("menu")
const navbar = document.getElementById("navbar")
const closeButton = document.getElementById("close")

menu.addEventListener("click", () => {
    navbar.style.transform = "translateX(0%)"
})

closeButton.addEventListener("click", () => {
    navbar.style.transform = "translateX(-100%)"
})