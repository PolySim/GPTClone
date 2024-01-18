from flask import Blueprint
from api.Controllers.Categories import get_categories_sorted_date

categories_bp = Blueprint('/categories', __name__)


@categories_bp.route('/getSortedDate', methods=['GET'])
def categories_choice():
    return get_categories_sorted_date()
