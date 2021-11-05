# Run Python scripts through Node

_No dependencies!_

The built in Node.js `child_process` module can be used to run python scripts, handle returned data, errors, and standard output. For some Python + JavaScript projects, this may be the way to go because it eliminates the need for a [conda](https://www.anaconda.com/products/individual) dependency, and helps organize running various scripts exclusively through the npm API. Eg: `npm run python-script && npm run bash-script`.

I'm going to use this pattern to remove the conda dependency in my other projects, and remove the shell script pattern for running python scripts.

## Requirements

- Python3 + PIP
- Node 16.x
- NPM 8.x

## Instructions

1. Create the python virtual environment (venv), activate it, install packages in `requirements.txt`

```bash
npm run create-py-env && source env/bin/activate && pip install -r requirements.txt
```

2. Run a python script `scripts/test.py`

```bash
npm run python-script
```

The output of the python script should confirm the version of pandas used in the environment (1.3.4) and that the "env" environment is being used.

## Python virtual environment commands:

Activate on linux: `source env/bin/activate` or `. env/bin/activate`

Deactivate on linux: `deactivate`

Make environment on linix: `python3 -m venv env`

Intall requirements.txt: `pip install -r requirements.txt`

Save requirements.txt: `pip3 freeze > requirements.txt`
