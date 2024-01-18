from datetime import datetime


def format_date():
    today = datetime.today()
    formatted_date = today.strftime("%Y%m%d")
    return int(formatted_date)
