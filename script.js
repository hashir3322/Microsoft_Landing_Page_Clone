var menuBtn = document.querySelector(".menu-btn");
var mainMenu = document.querySelector(".main-menu");


menuBtn.addEventListener('click', (e) => {
	mainMenu.classList.toggle('show');
})