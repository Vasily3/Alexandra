var mainPhoto = document.querySelector(".page-main__main-photo");
var desktopWebP = document.querySelector(".page-main__desktop-webp");
var tabletWebP = document.querySelector(".page-main__tablet-webp");
var mobileWebP = document.querySelector(".page-main__mobile-webp");
var desktopJpg = document.querySelector(".page-main__desktop-jpg");
var tabletJpg = document.querySelector(".page-main__tablet-jpg");

// Выбор случайного числа в промежутке min/max значения
function getRandom(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

// Задает путь случайному изображению для главной страницы
var photoNumber = getRandom(1, 9);
desktopWebP.srcset="img/main/main-" + photoNumber + "-desktop.webp, img/main/main-" + photoNumber + "-desktop@2x.webp 2x";
tabletWebP.srcset="img/main/main-" + photoNumber + "-tablet.webp, img/main/main-" + photoNumber + "-tablet@2x.webp 2x";
mobileWebP.srcset="img/main/main-" + photoNumber + "-mobile.webp, img/main/main-" + photoNumber + "-mobile@2x.webp 2x";
desktopJpg.srcset="img/main/main-" + photoNumber + "-desktop.jpg, img/main/main-" + photoNumber + "-desktop@2x.jpg 2x";
tabletJpg.srcset="img/main/main-" + photoNumber + "-tablet.jpg, img/main/main-" + photoNumber + "-tablet@2x.jpg 2x";
mainPhoto.src = "img/main/main-" + photoNumber + "-mobile.jpg";
mainPhoto.srcset= "img/main/main-" + photoNumber + "-mobile@2x.jpg";
