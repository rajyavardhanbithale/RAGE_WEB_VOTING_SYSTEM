from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer
from fastapi import FastAPI, HTTPException
from pymongo.mongo_client import MongoClient
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId
import time
import random
import string


class Item(BaseModel):
    username: str
    password: str


class UserCreate(BaseModel):
    firstname: str
    lastname: str
    pnumber: int
    password: str
    aadhar: int
    username: str | None = None
    email: str
    isPremium: str
    ifPremiumPlan: str
    votes: list | None = None


class electionData(BaseModel):
    roomid: str | None = None
    title: str
    description: str
    candis: list
    candivote: list | None = None
    totalvotes: list | None = None
    ids: str | None = None


class pricing(BaseModel):
    usid: str
    isPremium: str
    ifPremiumPlan: str


uri = "mongodb+srv://snowden:rageevs@udata.ri801ys.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)
db = client["user_data"]


app = FastAPI()
# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def sendMail(rmail,vpage,vdashboard):
    import smtplib


    # Email configuration
    sender_email = "ragevote@hotmail.com"
    sender_password = "Siddhant@25"
    recipient_email = rmail
    subject = "Your Voter Page and Dashboard"

    # Create a MIME message
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = recipient_email
    message["Subject"] = subject

    # Create rich text content
    email_body = f"""
    <html>
    <body>
        <p><strong>Here is your voter page:</strong></p>
        <p><a href="{vpage}">Voter Page Link</a></p>
        <p><strong>And here is your dashboard:</strong></p>
        <p><a href="{vdashboard}">Dashboard Link</a></p>
    </body>
    </html>
    """

    message.attach(MIMEText(email_body, "html"))

    # Connect to the SMTP server (Outlook/Hotmail)
    try:
        smtp_server = smtplib.SMTP("smtp.office365.com", 587)
        smtp_server.starttls()
        smtp_server.login(sender_email, sender_password)

        # Send the email
        smtp_server.sendmail(sender_email, recipient_email, message.as_string())
        smtp_server.set_debuglevel(1)  # Enable debugging output

        print("Email sent successfully!")

    except Exception as e:
        print(f"Error sending email: {e}")

    finally:
        smtp_server.quit()


@app.post("/login/")
async def create_item(item: Item):
    print(item.username, item.password)
    try:
        for value in db.true.find({"username": item.username}):

            if value['username'] == item.username and value['password'] == item.password:
                return {"content": str(value['_id'])}

        raise HTTPException(status_code=403, detail="Invalid credentials")

    # if len(str(item.pnumber)) !=10:
    #   raise HTTPException(status_code=406, detail="Invalid Mobile Number")
    # return item
    except:
        raise HTTPException(status_code=404, detail="No Credentials Found")


@app.post("/signup/")
async def createUser(user: UserCreate):
    try:
        db.true.insert_one({
            "firstname": user.firstname,
            "lastname": user.lastname,
            "pnumber": user.pnumber,
            "password": user.password,
            "aadhar": user.aadhar,
            "username": (str(user.firstname[:4]).lower() + str(user.pnumber)[5:10]),
            "email": user.email,
            "isPremium": user.isPremium,
            "ifPremiumPlan": "None",
            "voted": [0]
        })

        for value in db.true.find({"username": (str(user.firstname[:4]).lower() + str(user.pnumber)[5:10])}):
            return {"content": str(value['_id'])}

    except Exception as e:
        print(e)
        raise HTTPException(status_code=501, detail=e)


def generateRoom(length):
    # choose from all lowercase letter
    letters = string.digits
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str


@app.post("/electionbuild/")
async def electionHall(elecData: electionData):
    # print(elecData.title)
    # print(elecData.description)
    # print(elecData.host)
    # print(elecData.candis)
    #
    print(elecData)
    rid = generateRoom(8)
    try:
        db.electiondata.insert_one({
            "roomid": rid,
            "title": elecData.title,
            "description": elecData.description,
            "candis": elecData.candis,
            "totalvotes": [0]*len(elecData.candis)

        })
        query = {"_id": ObjectId(elecData.ids)}

        filter = {"_id": 0}

        data = db.true.find_one(query, filter)
        print(data["email"])
        sendMail(rmail=data["email"],
                 vpage=f"http://127.0.0.1:5173/voting?id={rid}",
                 vdashboard= f"http://127.0.0.1:5173/dashboard?id={rid}",
                 )
            
            
    

    except:

        raise HTTPException(status_code=500, detail="Internal erver Error")


@app.get("/getuser/{user_id}")
async def read_item(user_id: str):
    query = {"_id": ObjectId(user_id)}

    filter = {"_id": 0}

    data = db.true.find_one(query, filter)

    return {
        "firstname": data["firstname"],
        "lastname":  data["lastname"],
        "pnumber":   data["pnumber"],
        "username":  data["username"],
        "isPremium": data["isPremium"],
        "voted": data["voted"]
    }


@app.post("/setpricing/")
async def electionHall(usrid: pricing):
    print(usrid)
    print("ok")
    result = db.true.update_one(
        {"_id": ObjectId(usrid.usid)},
        {
            "$set": {
                "isPremium": "TRUE",
                "ifPremiumPlan": usrid.ifPremiumPlan
            }
        })
    
    print(result)


@app.get("/getelecions/{user_id}")
async def read_item(user_id: str):

    print(user_id)
    data = db.electiondata.find_one({"roomid": user_id})

    return ({
        "roomid":       data["roomid"],
            "title":        data["title"],
            "description":  data["description"],
            "candis":       data["candis"],
            "totalvotes":   data["totalvotes"]
            })


@app.get("/getvote")
async def read_item(user_id: str, name: str, usrid: str):

    # vote = db.electiondata.update_one(
    #     {
    #         "$set": {
    #             "roomid": user_id,
    #             "totalvotes" candis.index(name)
    #         }
    #     })

    data = db.electiondata.find_one({"roomid": user_id})

    index = data["candis"].index(name)

    data["totalvotes"][index] += 1

    vote = db.electiondata.update_one(
        {"roomid": user_id},
        {
            "$set": {
                "totalvotes": data["totalvotes"]
            }
        })

    print(data["totalvotes"])

    result = db.true.update_one(
        {"_id": ObjectId(usrid)},
        {
            "$push": {
                "voted": user_id,

            }
        })

    print("ok")


