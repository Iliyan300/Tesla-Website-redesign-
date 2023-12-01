const crossBtn = document.getElementById("mark");
const menuBtn = document.getElementById("menu");
const sideMenu = document.getElementById("side-menu");
const blurEffect = document.getElementById("blurring");



function showMenu() {
    
    sideMenu.style.transform = "translateX(0px)";
    blurEffect.style.display = "block";

    }

function hideMenu() {

    sideMenu.style.transform = "translateX(310px)";
    blurEffect.style.display = "none";
}


crossBtn.addEventListener("click", hideMenu);
menuBtn.addEventListener("click", showMenu);
