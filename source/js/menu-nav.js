var link = document.querySelector(".main-nav__button");
var headerOpen = document.querySelector(".page-header");
var menuOpen = document.querySelector(".main-nav--closed");

// Удаление класса, который открывает меню в случае если JS отключен.
menuOpen.classList.remove("main-nav--nojs");

// Работа меню
link.addEventListener("click", function () {
  if (menuOpen.classList.contains("main-nav--closed")) {
    menuOpen.classList.remove("main-nav--closed");
    menuOpen.classList.add("main-nav--opened");
    headerOpen.classList.toggle("page-header--opened");
  } else {
    menuOpen.classList.remove("main-nav--opened");
    menuOpen.classList.add("main-nav--closed");
    headerOpen.classList.toggle("page-header--opened");
  }
});
