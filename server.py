import os
import sys
from dotenv import load_dotenv
from app import app

envPath = sys.path[0]+'/.env'
load_dotenv(envPath)
PORT = os.environ.get("PORT")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT)