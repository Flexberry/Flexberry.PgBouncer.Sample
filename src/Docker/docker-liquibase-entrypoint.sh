#!/bin/sh

cd /liquibase/appsql
PROPFILE=liquibase.properties
if [ ! -f  $PROPFILE ]
then
  echo "Файл свойств /liquibase/appsql/$PROPFILE отутствует"
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

DB_URL="jdbc:postgresql://$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB"

echo "url: $DB_URL
username: $POSTGRES_USER
password: $POSTGRES_PASSWORD
liquibase.liquibaseSchemaName: $SCHEMANAME
" >> $PROPFILE

# cat $PROPFILE

if ! /usr/bin/readycheck
then
  exit 1
fi

export PGPASSWORD=$POSTGRES_PASSWORD
echo "SELECT 'CREATE DATABASE $POSTGRES_DB'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$POSTGRES_DB')\gexec" |
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
  -d $POSTGRES_DB

# запустить команду под юзером "liquibase"
su -c "liquibase update" liquibase
