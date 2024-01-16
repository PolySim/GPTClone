# GPTClone

You would like have ChatGPT 3.5 on local ? It's possible with GPTClone.

## Clone project

```bash
git clone https://github.com/PolySim/GPTClone.git
```

## Install dependencies

```bash
pip install -r requirements.txt && cd frontend && npm install
```

## Install mistral

We use ollama to generate the mistral model. You can install ollama from [here](https://ollama.ai/)

To install mistral use command `ollama run mistral`.
&rarr; mistral is downloading and starting. You can stop with `/bye`

## Add dotenv file

In your .env file write the following:

```dotenv
AI_URL=http://127.0.0.1:11434/api/generate
```

## Run project

On the root of the project run the following commands:

#### Backend

```bash
python3 app.py
```

#### Frontend

```bash
cd frontend && npm run dev
```
