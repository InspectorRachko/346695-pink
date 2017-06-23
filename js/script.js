var link = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");
var html = document.documentElement;


var form = document.querySelector(".contest-form__submit");
var success = document.querySelector(".modal-success");
var error = document.querySelector(".modal-error");
var name = document.querySelector("[name=name]");
var surname = document.querySelector("[name=surname]");


html.className = html.className.replace("no-js", "js");

link.addEventListener("click", function (event) {
    event.preventDefault();
    menu.classList.toggle("main-nav--opened");
});
