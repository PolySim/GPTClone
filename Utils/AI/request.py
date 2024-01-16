import json
import os

import requests

model = "mistral"

AI_URL = os.getenv("AI_URL")


def generate(user_input, context):
    r = requests.post(AI_URL,
                      json={
                          "prompt": user_input,
                          "context": context,
                          "model": model
                      },
                      stream=False)
    r.raise_for_status()

    for chunk in r.iter_content(chunk_size=None):
        body = json.loads(chunk)
        response_part = body.get("response", '')
        print(response_part, end='', flush=True)

        if "error" in body:
            raise Exception(body["error"])

        if body.get("done", False):
            return body["context"]
