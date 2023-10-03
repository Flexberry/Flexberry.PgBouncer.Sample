docker build --no-cache -f Dockerfile.Liquibase -t pgbouncersample/liquibase ../..

docker build --no-cache -f SQL/Dockerfile.Common.PostgreSql -t pgbouncersample/postgre-sql ../SQL

docker build --no-cache -f Dockerfile.PgBouncer  -t pgbouncersample/pgbouncer ../..

docker build --no-cache -f Dockerfile -t pgbouncersample/app ../..

