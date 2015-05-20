#!/usr/bin/env python
import json
import subprocess

from flask import Flask, request

app = Flask(__name__)


@app.route('/', methods=['POST'])
def handle_new_commit():
    data = json.loads(request.data)
    print "New commit by: {}".format(data['commits'][0]['author']['name'])

    subprocess.call("./rebuild.sh", shell=True)
    return "OK"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3999)
