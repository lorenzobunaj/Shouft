import os
import sys
from dotenv import load_dotenv
from pymongo import MongoClient
from certifi import where
import secrets
from urllib.parse import urlparse
from database.errors import Error
from utils.secure import *

envPath = sys.path[0]+'/.env'
load_dotenv(envPath)
DB_URI = os.environ.get("DB_URI")

class Database:
    # config DB connection
    host = MongoClient(DB_URI, tlsCAFile=where())
    db = host.shouft
    collection = db.urls

    # add url to DB
    def addUrl(self, url, userRefer):
        try:
            if validUrl(url):
                refer = secrets.token_hex(7) if userRefer == "" else userRefer
                print(refer)

                self.collection.insert_one({
                    "url": url,
                    "refer": refer
                })
                
                return refer
            else:
                return Error.INVALID_URL
            
        except:
            return Error.GENERAL_ERROR
        
    # get url from DB
    def getUrl(self, refer):
        # fast validation
        # if len(refer) != 14: 
        #    return Error.INVALID_REFER
        
        # if the refer is in the collection --> return the associated url, else return error
        try:
            urlObject = self.collection.find_one({"refer": refer})
            return urlObject["url"]
        
        except:
            return Error.GENERAL_ERROR
        
# url validation function
def validUrl(url):
    try:
        parse = urlparse(url)
        return all([parse.scheme, parse.netloc])
    
    except:
        return False