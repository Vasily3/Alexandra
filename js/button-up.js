// Кнопка якорь вверх

if (screen.width < 959.9) {
  var buttonUp = document.querySelector(".button-up");
  var pageHeader = document.querySelector(".page-header");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 80) {
      buttonUp.style = "display: block";
    }
    if (window.pageYOffset < 80) {
      buttonUp.style = "display: none";
    }
  });

  buttonUp.addEventListener("click", function () {
    buttonUp.style = "display: none";
    pageHeader.scrollIntoView(true);
  });
}
