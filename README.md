# ePython
Простой скрипт для исполнения выделенного мышкой кода на Питоне и возврата локальных переменных. Интересно, зачем он может пригодиться?

Установка зависимостей:
```pip install flask```

Для простого использования нужно установить расширение для браузера Tampermonkey, установить в нём скрипт ```script.user.js``` (скопировать и вставить код) и локально запустить сервер (файл ```server.py```). Готово! Теперь на всех сайтах, что попадают под шаблон в скрипте (см. ```@include ...```), выделенный мышкой код будет исполняться.

Если при запуске сервера появляется ошибка ```permission denied```, поменяйте в скриптах порт с 666 на дефолтный, (который будет в консоли после запуска сервера).

Успехов. :)
