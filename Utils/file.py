import json


def read_json(file):
    with open(file, "r") as f:
        return json.load(f)
