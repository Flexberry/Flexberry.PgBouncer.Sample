#!/bin/sh

cd /liquibase/sql
PROPFILE=liquibase.properties
if [ ! -f  $PROPFILE ]
then
  echo "Файл свойств /liquibase/sql/$PROPFILE отутствует"
  exit 1
fi
if [ -z "$POSTGRES_PORT" ]
then
    POSTGRES_PORT=5432
fi
if [ -z "$SCHEMANAME" ]
then
    SCHEMANAME=liquibase
fi
if [ -z "$POSTGRES_DB" ]
then
    POSTGRES_DB=appdb
fi

echo "username: $POSTGRES_USER
password: $POSTGRES_PASSWORD
liquibase.liquibaseSchemaName: $SCHEMANAME
" >> $PROPFILE

if ! /usr/bin/readycheck
then
  exit 1
fi

export PGPASSWORD=$POSTGRES_PASSWORD
for DB in $POSTGRES_DB
do
  echo "Запускаем скрипты для базы $DB..."
  DB_URL="jdbc:postgresql://$POSTGRES_HOST:$POSTGRES_PORT/$DB"
  echo "SELECT 'CREATE DATABASE $DB'
  WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$DB')\gexec" |
  psql \
    -h $POSTGRES_HOST \
    -p $POSTGRES_PORT \
    -U $POSTGRES_USER \
    -d template1

  echo "CREATE SCHEMA IF NOT EXISTS liquibase;" |
  psql \
    -h $POSTGRES_HOST \
    -p $POSTGRES_PORT \
    -U $POSTGRES_USER \
    -d $DB

  su -c "liquibase update --url=$DB_URL --contexts=$DB" liquibase # запустить команду под юзером "liquibase"
done
