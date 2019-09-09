// Добавляет класс mosaicflow(плагин сетки фотографий jquery) и показывает список из фотографий на десктопной версии
if (screen.width > 959.9)  {
  $("main").find("ul").addClass("mosaicflow");
}

// Перезагружает страницу при изменении ширины экрана (Для удаления работы плагина mosaicflow при переходе с
// десктопной версии на версию с наименьшей шириной и наоборот)
var startWidth = $(window).width();
$(window).resize(function() {
  var newWidth = $(window).width();
  if (newWidth !== startWidth) {
    location.reload();
    startWidth = newWidth;
  }
});
