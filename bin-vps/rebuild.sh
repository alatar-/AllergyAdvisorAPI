#!/bin/bash

forever stop 0

cd /var/www/api/ &&  git pull origin master && npm install && forever -a start main.js & 
