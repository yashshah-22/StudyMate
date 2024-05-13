const express=require("express");
const router=express.Router();
const User=require("../models/User");
const Mentor=require("../models/Mentor");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const multer = require('multer');
const StudyInfo = require('../models/StudyInfo.js');
const {body,validationResult}=require("express-validator");
const jwtSecret="MynameisEndtoEndYouTubeChannel1$#";
const CompanySelection = require('../models/CompanySelectionModel');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.post('/companyselection/create', upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'companyJD', maxCount: 1 },
    { name: 'resume', maxCount: 1 },
  ]), async (req, res) => {
    try {
      // Extract form data, profile picture, and PDF file from req.body and req.files
      const { studentName, usn, companyName,contact, email,githubProfile,linkedinProfile,passoutYear, internship, stipend, fullTime, ctc, assessmentType, questionType, /* ... other form fields ... */technicalRoundExperience,technicalRoundQuestions,hrRoundExperience,hrRoundQuestions,overallExperience,difficulty } = req.body;
      const profilePicture = req.files['profilePicture'][0].buffer;
      const companyJD = req.files['companyJD'][0].buffer;
      const resume = req.files['resume'][0].buffer;
  
      // Create a new instance of the CompanySelection model
      const newCompanySelection = new CompanySelection({
        studentName,
        usn,
        
        profilePicture,
        passoutYear,
        companyName,
        internship,
        stipend,
        fullTime,
        ctc,
        assessmentType,
        questionType,
        technicalRoundExperience,technicalRoundQuestions,hrRoundExperience,hrRoundQuestions,overallExperience,difficulty,
        contact,
   
   email,
githubProfile,
linkedinProfile,
        /* ... other form fields ... */
        companyJD,resume // Add the company JD (PDF file) to the model
      });
  
      // Save the form data to the database
      await newCompanySelection.save();
  
      res.status(201).json({ success: true, message: 'Form data saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });
  
//   router.get('/students-list/:company/:passoutYear', async (req, res) => {
//     try {
//       const { company, passoutYear } = req.params;
  
//       // Fetch students based on the selected company and year of passout
//       const students = await CompanySelection.find({
//         companyName: company,
//         passoutYear: passoutYear,
//       });
  
//       res.json(students);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
//   });

// Assuming you have a route like this in your backend

router.get('/companyselections', async (req, res) => {
  try {
    const studentsData = await CompanySelection.find();
    res.json(studentsData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/companyselections/:usn', async (req, res) => {
  const usn = req.params.usn;
  

  try {
    const studentData = await CompanySelection.find({ usn });

    
    if (!studentData) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(studentData);
  } catch (error) {
    console.error('Error fetching student data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
router.get('/students-list/:company/:passoutYear', async (req, res) => {
    try {
      const { company, passoutYear } = req.params;
    
      // Fetch students based on the selected company and year of passout
      const students = await CompanySelection.find({
        companyName: company,
        passoutYear: passoutYear,
      });
  
      // Convert the profile picture to Base64
      const studentsWithBase64 = students.map(student => ({
        ...student.toObject(),
        profilePicture: student.profilePicture.toString('base64')
      }));
  
      res.json(studentsWithBase64);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });
  
router.post("/createuser",

body('email',"Invalid Email").isEmail(),
body('password',"Incorrect Password").isLength({min:5}),
body('name').isLength({min:3}),
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password,salt);
try{
    const newUser = new User({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        phonenumber: req.body.phonenumber
    });

    await newUser.save(); 
res.json({success:true});

}catch(error){
console.log(error);
res.json({success:false});

}
});
router.post("/loginuser",
body('email',"Invalid Email").isEmail(),
body('password',"Incorrect Password").isLength({min:5}),

async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    let email=req.body.email;
    let password=req.body.password;
try{
    let useremail=await User.findOne({email});
if(!useremail){
return res.status(400).json({errors:"Invalid Credentials"});
}
else{
    const pwdCompare=await bcrypt.compare(req.body.password,useremail.password);
if(!pwdCompare)
return res.status(400).json({errors:"Incorrect Password"});
const data={
    user:{
        id:useremail._id
    }
}
const authToken=jwt.sign(data,jwtSecret)
return res.status(200).json({success:true,authToken:authToken});
}

}catch(error){
console.log(error);
res.json({success:false});

}
});
router.post('/saveStudyInfo', async (req, res) => {
    try {
      const { userEmail, subject, UNSCategory } = req.body;
      console.log('Received request:', { userEmail, subject, UNSCategory });
      // Create a new instance of the StudyInfo model
      const studyInfo = new StudyInfo({ userEmail, subject, UNSCategory });
  
      // Save the study information to the database
      await studyInfo.save();
  
      res.status(201).json({ success: true, message: 'Study information saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });
module.exports=router;




router.post("/creatementor",

body('email',"Invalid Email").isEmail(),
body('password',"Incorrect Password").isLength({min:5}),
body('name').isLength({min:3}),
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password,salt);
try{
    const newMentor = new Mentor({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        phonenumber: req.body.phonenumber
    });

    await newMentor.save(); 
res.json({success:true});

}catch(error){
console.log(error);
res.json({success:false});

}
});



router.post("/loginmentor",
body('email',"Invalid Email").isEmail(),
body('password',"Incorrect Password").isLength({min:5}),

async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    let email=req.body.email;
    let password=req.body.password;
try{
    let mentoremail=await Mentor.findOne({email});
if(!mentoremail){
return res.status(400).json({errors:"Invalid Credentials"});
}
else{
    const pwdCompare=await bcrypt.compare(req.body.password,mentoremail.password);
if(!pwdCompare)
return res.status(400).json({errors:"Incorrect Password"});
const data={
    mentor:{
        id:mentoremail._id
    }
}
const authToken=jwt.sign(data,jwtSecret)
return res.status(200).json({success:true,authToken:authToken});
}

}catch(error){
console.log(error);
res.json({success:false});

}
});
