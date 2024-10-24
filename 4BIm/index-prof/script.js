
//Capturar os elementos de interação

const menuIcon = document.querySelector("#menuIcon")
const closeIcon = document.querySelector("#closeIcon")
const sidebar = document.querySelector("#sidebar")

//Definir a interação(evento) o elemento tera

menuIcon.addEventListener("click", showSidebar)
closeIcon.addEventListener("click", hideSidebar)

//Definir o que sera feito quando a interação ocorrer

function showSidebar(){
    //sidebar.style.display = "flex"
    sidebar.style.right = "0"
}

function hideSidebar(){
    //sidebar.style.display = "none"
    sidebar.style.right = "-100%"
}