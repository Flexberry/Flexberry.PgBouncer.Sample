docker build --no-cache -f dockerfiles/Dockerfile -t pgbouncersample/app ../..

docker build --no-cache -f dockerfiles/Dockerfile.Liquibase -t pgbouncersample/liquibase ../..

docker build --no-cache -f dockerfiles/Dockerfile.PgBouncer  -t pgbouncersample/pgbouncer ../..

docker build --no-cache -f dockerfiles/Dockerfile.PostgreSql -t pgbouncersample/postgre-sql ../SQL
