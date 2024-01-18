import os
import flask

from Utils.file import read_json
from Utils.format_date import format_date

CATEGORIES_PATH = f"{os.getenv('DATA_PATH')}/categories.json"
DATE = format_date()


def get_categories_sorted_date():
    try:
        categories = [
            {"title": "Aujourd'hui", "categories": []},
            {"title": "Hier", "categories": []},
            {"title": "7 derniers jours", "categories": []},
            {"title": "30 derniers jours", "categories": []},
        ]
        categories_json = read_json(CATEGORIES_PATH)
        for category in categories_json:
            if category["date"] == DATE:
                categories[0]["categories"].append({
                    'index': category["index"],
                    'name': category["name"],
                    'date': category["date"],
                })
            elif category["date"] == DATE - 1:
                categories[1]["categories"].append({
                    'index': category["index"],
                    'name': category["name"],
                    'date': category["date"],
                })
            elif category["date"] > DATE - 8:
                categories[2]["categories"].append({
                    'index': category["index"],
                    'name': category["name"],
                    'date': category["date"],
                })
            elif category["date"] > DATE - 31:
                categories[3]["categories"].append({
                    'index': category["index"],
                    'name': category["name"],
                    'date': category["date"],
                })
        return flask.jsonify(categories), 200
    except Exception as e:
        print(f"error in get_categories - {e}")
        return flask.jsonify({"error": str(e)}), 500
