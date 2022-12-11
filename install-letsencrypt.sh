#!/bin/bash

# Phase 1
docker-compose -f ./docker-compose-initiate.yaml up -d nginx
docker-compose -f ./docker-compose-initiate.yaml up certbot
docker-compose -f ./docker-compose-initiate.yaml down

# some configurations for let's encrypt
curl -L --create-dirs -o certbot/conf/options-ssl-nginx.conf https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf
openssl dhparam -out certbot/conf/ssl-dhparams.pem 2048

# Phase 2
crontab ./crontab
docker compose -f ./compose.prod.yml up -d
