const express=require("express");
const router=express.Router();
const User=require("../models/User");
const Mentor=require("../models/Mentor");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const StudyInfo = require('../models/StudyInfo.js');
const {body,validationResult}=require("express-validator");
const jwtSecret="MynameisEndtoEndYouTubeChannel1$#";
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
