const main = document.querySelector(".main");

const crossBtn = document.getElementById("mark");
const menuBtn = document.getElementById("menu");
const sideMenu = document.getElementById("side-menu");
const blurEffect = document.getElementById("blurring");



function showMenu() {
    
    sideMenu.classList.add("active");
    blurEffect.classList.add("active");

    }

function hideMenu() {

    sideMenu.classList.remove("active");
    blurEffect.classList.remove("active");
}


crossBtn.addEventListener("click", hideMenu);
menuBtn.addEventListener("click", showMenu);
