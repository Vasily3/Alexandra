**Папка с вашими исходными файлами — `source/`.**
**Папка с вашими файлами после сборки — `build/`.**


**Установка зависимостей**

```
npm install
```


**Старт проекта**

```
npm start
```


**Запуск сборки в папку `build/`**

```
npm run build
```

Проект собирается с помощью 
[gulp](https://www.npmjs.com/package/gulp)

В проекте использован препроцессор SASS
[gulp-sass](https://www.npmjs.com/package/gulp-sass)

В проекте использован
[autoprefixer](https://www.npmjs.com/package/autoprefixer)

Файлы и изображения проекта минифицированы
* [post-html](https://www.npmjs.com/package/gulp-posthtml)
* [post-css](https://www.npmjs.com/package/gulp-postcss)
* [gulp-csso](https://www.npmjs.com/package/gulp-csso)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
