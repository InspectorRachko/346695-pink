
 var link = document.querySelector(".main-nav__toggle"); 
 var menu = document.querySelector(".main-nav")

link.addEventListener("click", function(event) {
 event.preventDefault();
 menu.classList.toggle("main-nav--closed");
 }); 
