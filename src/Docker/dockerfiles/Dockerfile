﻿FROM node:10 as ember_app

COPY /src/ember-app /ember-app

WORKDIR /ember-app

RUN \
  set -x; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  ember build --environment=docker

FROM mcr.microsoft.com/dotnet/sdk:3.1 as backend

COPY /src/PgBouncerSample /PgBouncerSample

WORKDIR /PgBouncerSample

RUN \
 dotnet restore PgBouncerSample.sln;\
 dotnet build PgBouncerSample.sln -c Debug;\
 dotnet publish ODataBackend/PgBouncerSample.ODataBackend.csproj -c Debug -o out -f netcoreapp3.1

FROM mcr.microsoft.com/dotnet/aspnet:3.1

WORKDIR /app

COPY --from=backend /PgBouncerSample/out ./
COPY --from=ember_app /ember-app/dist ./wwwroot/
COPY /src/Docker/startup-scripts/readycheck /usr/bin/

# Check webapi responses
HEALTHCHECK --interval=60s --timeout=15s --start-period=20s \
  CMD curl -f "http://0.0.0.0/health" || exit

ENTRYPOINT readycheck && dotnet PgBouncerSample.ODataBackend.dll
