var openMenu = document.getElementById('icon-menu');
var menuOpen = document.getElementById('cardMenu');
var closeMenu = document.getElementById('closeMenu');
var containerMenu = document.getElementById('containerMenu');
var fechandoMenu = document.getElementsByClassName('fecha-menu');

openMenu.onclick = function(){
    menuOpen.style.display = "block";
}

closeMenu.onclick = function(){
    menuOpen.style.display = "none";
}

window.onclick = function(event){
    if (event.target == menuOpen){
        menuOpen.style.display = "none"
    }
}