from flask import Blueprint
from api.Controllers.Categories import get_categories_choice

categories_bp = Blueprint('/categories', __name__)


@categories_bp.route('/getChoice', methods=['GET'])
def categories_choice():
    return get_categories_choice()
