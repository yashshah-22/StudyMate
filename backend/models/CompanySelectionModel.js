// CompanySelectionModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySelectionSchema = new Schema({
  studentName: String,
  usn: String,
  profilePicture: Buffer,
  contact:String,
   
   email:String,
githubProfile:String,
linkedinProfile:String,
  passoutYear:String,
  companyName: String,
  resume:Buffer,
  companyJD: Buffer, // Store company JD (PDF) as binary data
  internship: String,
  stipend: String,
  fullTime: String,
  ctc: String,
  assessmentType: String,
  questionType: String,
  technicalRoundExperience: String,
  technicalRoundQuestions: String,
  hrRoundExperience: String,
  hrRoundQuestions: String,
  overallExperience: String,
  difficulty: Number,
});

const CompanySelection = mongoose.model('CompanySelection', companySelectionSchema);

module.exports = CompanySelection;
