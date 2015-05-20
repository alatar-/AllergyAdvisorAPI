#!/bin/bash

forever stop main.js

cd /var/www/api/ &&  git pull origin master && npm install && forever -a start main.js & 
