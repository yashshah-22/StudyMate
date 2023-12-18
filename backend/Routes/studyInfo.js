// In a file, e.g., routes/studyInfo.js

const express = require('express');
const router = express.Router();
const StudyInfo = require('../models/StudyInfo.js');

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
  
module.exports = router;
