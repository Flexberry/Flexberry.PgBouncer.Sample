# Flexberry.PgBouncer.Sample
## Назначение
Репозиторий предназначен для демонстрации работы PgBouncer в приложении Flexberry. PgBouncer - это сервис для организации `connection pooling` к экземпляру PostgreSQL.

## Структура
Приложение состоит из:
- PgBouncer - сервис, обеспечивающий `connection pooling`
- Liquibase - утилита для автоматической инициализации и обновления БД
- PostgreSQL:
  - appdb - БД приложения
  - auditdb - БД аудита
  - securitydb - БД полномочий
- Frontend (ember-flexberry)
- Backend (Flexberry ODataBackend)

![Структурная схема](./img/структурная%20схема.png)

## Запуск
Компоненты приложения упакованы в Docker:
1. Запустите сборку образов: `create-image.cmd` в папке `/src/Docker`.
2. Запустите контейнеры: `start.cmd` в папке `/src/Docker`.

Исходные файлы образов находятся в папке `/src/Docker/dockerfiles`.

## Описание PgBouncer
PgBouncer - это инструмент, который работает как посредник между приложением и базой данных, осуществляя при этом `connection pooling`. PgBouncer принимает подключения, и "транслирует" их в нужные базы данных, при этом используя соединения из своего пула. Прикладное приложение подключается к `PgBouncer` (порт `6432` по умолчанию).

### Подключение к PgBouncer
Для подключения к PgBouncer используется пользователь `pgbounceruser`, пароль `12345` (`SERVER=pgbouncer;User ID=pgbounceruser;Password=12345;Port=6432;Database=appdb`). Данный пользователь задаётся в файле `userlist.txt` и используется только для подключения к PgBouncer.

> Путь к файлу `userlist.txt` можно изменить через параметр `pgbouncer.auth_file`.

PgBouncer выполняет "трансляцию" запросов в нужную БД, используя её строку подключения. Строки подключения можно задать в файле `pgbouncer.ini` (см. [документацию](https://www.pgbouncer.org/config.html)). Данный подход позволяет PgBouncer _использовать отдельных пользователей для подключения к базам данных_.

## Описание Liquibase
[Liquibase](https://flexberry.github.io/ru/gbt_liquibase.html) - это инструмент для отслеживания, управления и применения изменений схемы базы данных. Является аналогом Git для баз данных.

Liquibase используется в данном проекте для автоматической инициализации и обновления структуры БД. Инициализация и обновление БД происходит при запуске контейнера `pgbouncersample/liquibase` (см. [docker-liquibase-entrypoint.sh](src/Docker/liquibase-startup/docker-liquibase-entrypoint.sh)). Перед запуском `liquibase` ожидается запуск контейнера с PostgreSQL через скрипт [readycheck](src/Docker/liquibase-startup/readycheck).

### Описание структуры SQL скриптов
Чтобы применить скрипты на нескольких БД, каждой папке присвоен одноимённый контекст: `appdb`, `auditdb`, `securitydb`. Название контекста соответствует базе данных, на которой применяются скрипты (подробнее см. в этом [разделе](https://flexberry.github.io/ru/gbt_liquibase.html#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2-%D0%B2-%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85-%D0%B1%D0%B4)).

Файл `SQL/liquibase.properties` задаёт базовые настройки для запуска Liquibase. В этом файле задаётся путь к корневому changelog.
