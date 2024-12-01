## Работа по ТЗ

1. скачка выдает сайт - https://bestblogos.com/ketodropsloss/low/111/ro/hello/

Вопрос по 2 пункту. 
2. Очистить скачанный шаблон от JS-скриптов, не влияющих на отображение (вырезать счётчики, статистика и т.д., оставить анимации).

я не увидел этих компонентов - вырезать счётчики, статистика и т.д. (или это для примера?)

3. заменил везде где упоминается KetoDiet на Indiva System

4. Заменить href всех ссылок на {offer}.
Я скачивал сайт но я не нашел переменную offer. Как результат не на что заменять. я заменил на #. в  js/script.js

5. Заменить изображения продукта на фото - там 6 фото. но я выбрал где банка изображена.(сначала я думал заменить надо несколько фото из-за того что картинок 6.)

6. Форма добавлена перед комментариями. form in index.html on 196 line. js code in js/script.js . css in assets/css/form.css. added db.json для добавления пользователей с номером телефона и subid. 

Обратите внимание что отправка формы не будет работать если она не на хостинге или вы включили локальный сервер - например Open Server Panel для windows или MAMP для ios. Либо любой другой. 

7. В header само меню. стили в assets/css/header.css (вставлено внутри style.css)


## Некоторые моменты по заданию
поскольку скрипты вначале. я добавил defer в <script>. 

script внизу перенес в js/date.js поскольку ошибка возникает с тем что попытка использовать jquery до его загрузки.

Note: сайт не адаптирован на мобильную версию.

## Ошибки в консоли
сайт https://streamshakes.com/ выдает ошибку 403 Forbidden — стандартный код ответа HTTP, означающий, что доступ к запрошенному ресурсу запрещен. Сервер понял запрос, но не выполнит его

1 тип error Mixed Content: The page at '<URL>' was loaded over HTTPS, but requested an insecure script '<URL>'. This request has been blocked; the content must be served over HTTPS.
как результат error 404

2 тип error - на сайте для скачки error - shakesland.js:1  POST https://bestblogos.com/api/jsLog 502 (Bad Gateway).
из-за ошибки сервера невозможно получить файлы.
как результат error - POST http://localhost/api/jsLog 404 (Not Found)

