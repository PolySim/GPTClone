import os
import flask

from Utils.file import read_json

CATEGORIES_PATH = f"{os.getenv('DATA_PATH')}/categories.json"


def get_categories_choice():
    try:
        categories = []
        categories_json = read_json(CATEGORIES_PATH)
        for category in categories_json:
            categories.append({
                'index': category["index"],
                'name': category["name"],
                'date': category["date"],
            })
        return flask.jsonify(categories), 200
    except Exception as e:
        print(f"error in get_categories - {e}")
        return flask.jsonify({"error": str(e)}), 500
