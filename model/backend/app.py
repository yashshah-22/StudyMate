from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import uvicorn
import pymongo
from datetime import datetime 
from fastapi.responses import JSONResponse
app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

label_encoder = None
svc = None

with open('label_encoder.obj', 'rb') as file:
    label_encoder = pickle.load(file)

with open('svc.obj', 'rb') as file:
    svc = pickle.load(file)

# Connect to MongoDB
client = pymongo.MongoClient("mongodb+srv://yashshah2280:pwmVMHchxZLIjniM@cluster0.0t7bdve.mongodb.net/Studymate?retryWrites=true&w=majority")
db = client["Studymate"]
collection = db["StudyInfo"]
class UserSubject(BaseModel):
    userEmail: str
    subject: str
@app.post("/getUnsCategory")
async def get_uns_category(user_subject: UserSubject):
    try:
        print(user_subject)
        collection = db.get_collection("StudyInfo")
        result = collection.find_one({"userEmail": user_subject.userEmail, "subject": user_subject.subject.upper()})
        if result:
            return {"uns_category": result["UNSCategory"]}
        else:
            raise HTTPException(status_code=404, detail="User information not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


class User(BaseModel):
    STG: float
    SCG: float
    STR: float
    LPR: float
    PEG: float
    

@app.post("/calculate")
async def create_item(user: User):
    try:
        STG = user.STG
        SCG = user.SCG
        STR = user.STR
        LPR = user.LPR
        PEG = user.PEG
        array = [STG, SCG, STR, LPR, PEG]
        res = svc.predict([array])
        res = label_encoder.inverse_transform(res)
        print(res)
        return res[0], 200
    except Exception as e:
        return "Error", 500
class StudyInfo(BaseModel):
    userEmail: str
    subject: str
    UNSCategory: str    

@app.post("/saveStudyInfo")
async def save_study_info(request_data: dict):
    try:
        userEmail = request_data.get('userEmail')
        subject = request_data.get('subject')
        UNSCategory = request_data.get('UNSCategory')

        # Create a dictionary with the study information
        study_data = {
            "userEmail": userEmail,
            "subject": subject,
            "UNSCategory": UNSCategory
        }

        # Insert the study information into the MongoDB collection
        collection = db.get_collection("StudyInfo")
        result = collection.insert_one(study_data)

        return {"success": True, "message": "Study information saved successfully"}
    except Exception as e:
        return {"success": False, "message": f"Error: {str(e)}"}
class TestResult(BaseModel):
    user_email: str
    subject: str
    difficulty: str
    score: int


collection = db.get_collection("Scorecard")
@app.post("/saveTestResult")
async def save_test_result(request_data: dict):
    try:
        userEmail = request_data.get('userEmail')
        subject = request_data.get('subject')
        difficulty=request_data.get('difficulty')
        score=request_data.get('score')
        # Create a dictionary with the study information
        score_data = {
            "userEmail": userEmail,
            "subject": subject,
            "difficulty":difficulty,
            "score":score

        }

        # Insert the study information into the MongoDB collection
        result = collection.insert_one(score_data)

        return {"success": True, "message": "Test information saved successfully"}
    except Exception as e:
        return {"success": False, "message": f"Error: {str(e)}"}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
