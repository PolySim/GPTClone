from flask import Blueprint
from api.Controllers.helloWorld import hello_world

hello_world_bp = Blueprint('/helloWorld', __name__)


@hello_world_bp.route('/', methods=['GET'])
def users():
    return hello_world()
