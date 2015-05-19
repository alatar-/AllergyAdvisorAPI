#!/bin/bash

npm install .
apidoc -i . -e node_modules -e doc -o doc
