from flask import Flask, request, redirect, render_template
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from utils.database import Database
from conf import Conf

db = Database()

app = Flask(__name__)
limiter = Limiter(
    get_remote_address,
    app=app,
    storage_uri="memory://"
)

# render index.html
@app.route("/")
def index():
    return render_template("index.html")

# add the url to DB and return the refer if not given
@app.route("/add", methods=["POST"])
@limiter.limit("5/30second")
def add():
    addToDb = db.addUrl(request.get_json()["url"], request.get_json()["refer"])

    if addToDb == 0:
        return {"status": 0x0}

    elif addToDb == 2:
        return {"status": 0x2}

    else:
        return {"status": addToDb}

# redirect
@app.route('/<refer>', methods=["GET"])
@limiter.limit("10/30second")
def get(refer):
    getToPage = db.getUrl(refer)

    if getToPage == 0:
        return {"status":  0x0}

    elif getToPage == 3:
        return {"status": 0x3}

    else:
        return redirect(getToPage)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=Conf.PORT)