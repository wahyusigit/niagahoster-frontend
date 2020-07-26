#!/bin/bash

cd .. && cd laradock && docker-compose up -d caddy mariadb phpmyadmin redis workspace && docker-compose exec --user="laradock" workspace bash -c  'cd /var/www/niagahoster-frontend/; exec "${SHELL:-sh}"'
