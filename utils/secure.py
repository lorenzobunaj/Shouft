import os
import sys
from dotenv import load_dotenv
from cryptography.fernet import Fernet

envPath = sys.path[0]+'/../.env'
load_dotenv(envPath)
SECURE_KEY = os.environ.get("SECURE_KEY")

# encrypt function
def encrypt(url):
    return Fernet(SECURE_KEY).encrypt(url.encode()).decode()

# decrypt function
def decrypt(url):
    return Fernet(SECURE_KEY).decrypt(url.encode()).decode()