// In a file, e.g., models/StudyInfo.js

const mongoose = require('mongoose');

const studyInfoSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  subject: { type: String, required: true },
  UNSCategory: { type: String, required: true },
});

const StudyInfo = mongoose.model('StudyInfo', studyInfoSchema);

module.exports = StudyInfo;
