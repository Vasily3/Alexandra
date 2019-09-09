var photosWrap = document.querySelector(".weddings__wrapper");
var photosList = photosWrap.querySelector(".weddings__list");
var photos = photosList.querySelectorAll(".weddings__photo");
var elementCenterCoordXArr = [];

// Функция получения координат элемента.
function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

// Функция поиска ближайщего(и идущего после) числа в массиве.
function findClosest(arr, closestTo) {
  var closest = Math.max.apply(null, arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= closestTo && arr[i] < closest) closest = arr[i];
  }
  return closest;
}

// Генерация массива центральных координат фотографий.
[].forEach.call(photos, function (el) {
  var elementCoords = getCoords(el);
  var elementCenterCoordX = elementCoords.left + el.width / 2;
  elementCenterCoordXArr.push(Math.round(elementCenterCoordX));
  console.log(elementCoords);
  console.log(elementCenterCoordX);
});

// Функция центрующая фотографии.
function onSliderClick() {
  // Место центровки фотографии.
  var headerWidth = 0.15; // .page-header {width: 15vw} .weddings__list {padding: 15vw;}
  var navWidth = screen.width * headerWidth;
  var screenCenter = Math.round((screen.width + navWidth) / 2); // Место центровки фотографии

  var position = Math.round(photosWrap.scrollLeft + screenCenter); // Расчет текущей позиции скролла в месте центровки фотографии
  var elementNext = findClosest(elementCenterCoordXArr, position); // Следующий элемента массива

// Анимация
  function delta(progress) {
    return Math.pow(progress, 2);
  }

  var element = photosWrap;
  var from = element.scrollLeft; // Начальная координата X
  var to = Math.round(elementNext - screenCenter); // Конечная координата X
  var duration = 700; // Длительность - 1 секунда
  var start = new Date().getTime(); // Время старта

  setTimeout(function () {
    var now = (new Date().getTime()) - start; // Текущее время
    var progress = now / duration; // Прогресс анимации
    var result = (to - from) * delta(progress) + from;
    element.scrollLeft = result;
    if (progress < 1) // Если анимация не закончилась, продолжаем
      setTimeout(arguments.callee, 3);
  }, 3);


  if (position !== elementNext) {
    function delta(progress) {
      return progress;
    }
  } else {
    var pushToNext = photosWrap.scrollLeft + screenCenter + 1;
    to = findClosest(elementCenterCoordXArr, pushToNext) - screenCenter;

    function delta(progress) {
      return progress;
    }
  }
}

photosWrap.addEventListener("click", onSliderClick);


// if (position !== elementNext) {
//   photosWrap.scrollLeft = elementNext - screenCenter;
//   console.log(photosWrap.scrollLeft);
// } else {
//   var pushToNext = photosWrap.scrollLeft + screenCenter + 1;
//   photosWrap.scrollLeft = findClosest(elementCenterCoordXArr, pushToNext) - screenCenter;
//   console.log(photosWrap.scrollLeft);
// }
