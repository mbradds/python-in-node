# Run Python scripts through Node

_No dependencies!_

The built in Node.js `child_process` module can be used to run python scripts, handle returned data, errors, and standard output. For some Python + JavaSccript projects, this may be the way to go because it eliminates the need for a [conda](https://www.anaconda.com/products/individual) dependency, and helps organize running various scripts exclisively through the npm API. Eg: `npm run python-script && npm run bash-script`
Activate on linux:
source env/bin/activate

Deactivate on linux:
deactivate

Make environment:
python3 -m venv env

Make from requirements.txt
pip install -r requirements.txt

Save requirements.txt
pip3 freeze > requirements.txt
