// Слайдер

var main = document.querySelector("main");
var elementPhotos = main.querySelectorAll("img");
var slider = document.querySelector(".slider");
var sliderWrapper = slider.querySelector(".slider__wrapper");
var sliderImage = slider.querySelector(".slider__image");
var buttonPrev = slider.querySelector(".slider__button--prev");
var buttonNext = slider.querySelector(".slider__button--next");
var buttonClose = slider.querySelector(".slider__close");

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var ARROW_LEFT_KEYCODE = 37;
var ARROW_RIGHT_KEYCODE = 39;

if (screen.width > 959.9) {
  [].forEach.call(elementPhotos, function (el, index) {
    var onImgEnterPress = function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        openSlider(evt);
      }
    };
    el.addEventListener("keydown", onImgEnterPress);
    el.addEventListener("click", openSlider);

        // Открытие слайдера
      function openSlider (evt) {
        slider.classList.remove("slider__hidden");
        sliderImage.src = event.target.src.replace("mobile", "desktop");
        sliderImage.srcset = event.target.srcset.replace("mobile", "desktop");
        buttonPrev.focus();

        // Перелистывание фото назад
      buttonPrev.addEventListener("click", getPrevPhoto);
      function getPrevPhoto() {
        if (index > 0) {
          index -= 1;
          sliderImage.src = elementPhotos[index].src.replace("mobile", "desktop");
          sliderImage.srcset = elementPhotos[index].srcset.replace("mobile", "desktop");
        }
      }
      var onSliderArrowLeftPress = function (evt) {
        if (evt.keyCode === ARROW_LEFT_KEYCODE) {
          getPrevPhoto();
          buttonPrev.focus();
        }
      };
      slider.addEventListener("keydown", onSliderArrowLeftPress);

        // Перелистывание фото вперед
      buttonNext.addEventListener("click", getNextPhoto);
      function getNextPhoto() {
        if (index < elementPhotos.length - 1) {
          index += 1;
          sliderImage.src = elementPhotos[index].src.replace("mobile", "desktop");
          sliderImage.srcset = elementPhotos[index].srcset.replace("mobile", "desktop");
        }
      }
      var onSliderArrowRightPress = function (evt) {
        if (evt.keyCode === ARROW_RIGHT_KEYCODE) {
          getNextPhoto();
          buttonNext.focus();
        }
      };
      slider.addEventListener("keydown", onSliderArrowRightPress);

        // Закрытие слайдера и удаление обработчика
      function closeSlider() {
        slider.classList.add("slider__hidden");
        sliderImage.src = "";
        sliderImage.srcset = "";
        slider.removeEventListener("keydown", onSliderEscPress);
      }
      buttonClose.addEventListener("click", closeSlider);
      sliderWrapper.addEventListener("click", closeSlider);
      var onSliderEscPress = function (evt) {
        if (evt.keyCode === ESC_KEYCODE) {
          closeSlider();
        }
      };
      slider.addEventListener("keydown", onSliderEscPress);
    }
  });
}
