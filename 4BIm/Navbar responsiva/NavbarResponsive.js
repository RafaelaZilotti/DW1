
const menu = document.querySelector("#menu")
const fecha = document.querySelector("#fecha")
const sidebar = document.querySelector("#sidebar")

menu.addEventListener("click",mostraSidebar)
fecha.addEventListener("click",fechaSidebar)

function mostraSidebar(){
    sidebar.style.right = "0"
}

function fechaSidebar(){
    sidebar.style.right = "-100%"
}