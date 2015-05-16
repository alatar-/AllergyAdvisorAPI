#!/bin/bash

jshint src && jshint test
mocha test/end2end/