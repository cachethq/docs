# Docker

[[toc]]

## Overview

Docker support is maintained by Cachet users from within the community.

## Getting Started With Docker Compose

Quickly launch Cachet, NGINX and PostgreSQL docker images with [docker-compose](https://docs.docker.com/compose/).

1. Clone the repository:
   ```shell
   git clone https://github.com/cachethq/Docker.git cachet-docker
   cd cachet-docker
    ```
2. Edit the docker-compose.yml file to specify your [ENV variables](https://github.com/cachethq/docker/blob/master/conf/.env.docker).
3. To build an image containing a specific [Cachet release](https://github.com/cachethq/cachet/releases), change the [`cachet_ver` ARG in the docker-compose.yml](https://github.com/CachetHQ/Docker/blob/master/docker-compose.yml) file:
   ```yaml
    cachet:
       build:
         context: .
         args:
           - cachet_ver=v2.3.10
   ```
4. Build and run the image:
   ```shell
   docker-compose build
   docker-compose up
    ```
5. Continue to configure Cachet in your web browser by navigating to your Docker host's IP address.

## Running Cachet Docker Container Manually

Run a DB container:
```shell
docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -d postgres:9.5
```

Run Cachet:

```shell
docker run -d --name cachet --link postgres -e DB_DRIVER=pgsql -e DB_HOST=postgres -e DB_DATABASE=postgres -e DB_USERNAME=postgres -e DB_PASSWORD=postgres -d cachethq/docker:latest
```

Now go to `http://<ipdockerisboundto>:8000/setup` and have fun!

## Enabling SSL

This is commonly achieved by running Nginx with your certificates on your Docker host, service or load balancers in-front of the running container, or by adding your custom SSL certificates and configuration to the supplied Nginx configuration.

## Notes

- **cachethq/docker** runs on port 8000 by default. This is exposed on host port 80 when using docker-compose.
- The `master` branch and `cachethq/docker:latest` Docker automated build are a work in progress / development version of the upstream https://github.com/CachetHQ/Cachet project. As such, `master` or `latest` should not be used in a production environment as it may change at anytime. We strongly recommend specifying a stable [Cachet Release](https://github.com/cachethq/cachet/releases) at build time as mentioned in step 3 above.
