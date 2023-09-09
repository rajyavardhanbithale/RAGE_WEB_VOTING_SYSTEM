
from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://snowden:rageevs@udata.ri801ys.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri)


db = client["user_data"]
col = db.true
# Send a ping to confirm a successful connection


def createUser(fname,password,pnumber,aadhrno):
    try:
    db.true.insert_one({
        "name": "Linda",
        "orderdate": "6/10/2021",
        "species": "Dog",
        "ownerAddress": "380 W. Fir Ave",
        "chipped": "true"
        })
    except Exception as e:
        print(e)