// CompanySelectionForm.js
import React, { useState } from 'react';
import './CompanySelectionForm.css'; // Add your CSS styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CompanySelectionForm = () => {
  const navigate=useNavigate();
    const [formData, setFormData] = useState({
        studentName: '',
        usn: '',
        contact:'',
        email:'',
        githubProfile:'',
        linkedinProfile:'',
        passoutYear:'',
        resume:null,
        companyName: '',
        companyJD: null,
        internship: '',
        stipend: '',
        profilePicture: null,
        fullTime: '',
        ctc: '',
        assessmentType: '',
        questionType: '',
        technicalRoundExperience: '',
        technicalRoundQuestions: '',
        hrRoundExperience: '',
        hrRoundQuestions: '',
        overallExperience: '',
        difficulty: 1,
      });
      const handleInputChange = (e) => {
        const { name, value, type } = e.target;
    
        // Check if the input is a file (for handling profile picture and PDF file)
        if (type === 'file') {
          setFormData({ ...formData, [name]: e.target.files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const formDataToSubmit = new FormData();
      
          // Append non-file fields to FormData
          for (const key in formData) {
            if (key !== 'profilePicture' && key !== 'companyJD' && key!=='resume') {
              formDataToSubmit.append(key, formData[key]);
            }
          }
      
          // Append profilePicture and companyJD files to FormData
          formDataToSubmit.append('profilePicture', formData.profilePicture);
          formDataToSubmit.append('companyJD', formData.companyJD);
          formDataToSubmit.append('resume', formData.resume);
      
          // Save form data to MongoDB
          await axios.post('http://localhost:5000/api/companyselection/create', formDataToSubmit);
      
          console.log('Form submitted and saved to MongoDB:', formData);
          setFormData({});
          navigate("/");
        } catch (error) {
          console.error('Error saving to MongoDB:', error);
        }
      };
      

  return (
    <div className="company-selection-form">
      <h2>DSCE Company Selection Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="studentName">Name of the Student:</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleInputChange}
        />

        <label htmlFor="usn">USN:</label>
        <input
          type="text"
          id="usn"
          name="usn"
          value={formData.usn}
          onChange={handleInputChange}
        />
 <label htmlFor="profilePicture">Profile Picture:</label>
      <input
        type="file"
        id="profilePicture"
        name="profilePicture"
        onChange={handleInputChange}
      />
<label htmlFor="contact">Mobile Number:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
        />

<label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

<label htmlFor="githubProfile">Github Profile:</label>
        <input
          type="text"
          id="githubProfile"
          name="githubProfile"
          value={formData.githubProfile}
          onChange={handleInputChange}
        />
        <label htmlFor="linkedinProfile">Linkedin Profile:</label>
        <input
          type="text"
          id="linkedinProfile"
          name="linkedinProfile"
          value={formData.linkedinProfile}
          onChange={handleInputChange}
        />
        <label htmlFor="companyJD">Resume (PDF):</label>
      <input
        type="file"
        id="resume"
        name="resume"
        accept=".pdf"
        onChange={handleInputChange}
      />
<label htmlFor="passoutYear">Year of Passout:</label>
        <input
          type="text"
          id="passoutYear"
          name="passoutYear"
          value={formData.passoutYear}
          onChange={handleInputChange}
        />
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
        />
        <label htmlFor="companyJD">Company Job Description (PDF):</label>
      <input
        type="file"
        id="companyJD"
        name="companyJD"
        accept=".pdf"
        onChange={handleInputChange}
      />


        <label htmlFor="internship">Internship:</label>
        <select
          id="internship"
          name="internship"
          value={formData.internship}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="No Internship">No Internship</option>
          <option value="Stipend">Select your stipend</option>
          <option value="Full Time Salary">Full Time Salary</option>
        </select>

        {formData.internship === 'Stipend' && (
          <label htmlFor="stipend">Stipend:</label>
        )}
        {formData.internship === 'Stipend' && (
          <input
            type="text"
            id="stipend"
            name="stipend"
            value={formData.stipend}
            onChange={handleInputChange}
          />
        )}

        {formData.internship === 'Full Time Salary' && (
          <label htmlFor="fullTime">Full Time:</label>
        )}
        {formData.internship === 'Full Time Salary' && (
          <select
            id="fullTime"
            name="fullTime"
            value={formData.fullTime}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Performance Based">Performance Based Full Time Conversion</option>
            <option value="No Full Time">No Full Time</option>
          </select>
        )}

        <label htmlFor="ctc">CTC:</label>
        <input
          type="text"
          id="ctc"
          name="ctc"
          value={formData.ctc}
          onChange={handleInputChange}
        />

        <label htmlFor="assessmentType">Online Assessment:</label>
        <select
          id="assessmentType"
          name="assessmentType"
          value={formData.assessmentType}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>

        <label htmlFor="questionType">Question Type:</label>
        <select
          id="questionType"
          name="questionType"
          value={formData.questionType}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="Coding Only">Coding Only</option>
          <option value="Technical MCQs Only">Technical MCQs Only</option>
          <option value="Aptitude Only">Aptitude Only</option>
          <option value="Coding and Technical MCQs">Coding and Technical MCQs</option>
          <option value="Coding and Aptitude">Coding and Aptitude</option>
          <option value="Aptitude and Technical">Aptitude and Technical</option>
          <option value="All of These">All of These</option>
        </select>

       
        <label htmlFor="technicalRoundQuestions">Technical Round Questions:</label>
        <textarea
          id="technicalRoundQuestions"
          name="technicalRoundQuestions"
          value={formData.technicalRoundQuestions}
          onChange={handleInputChange}
        ></textarea>
 <label htmlFor="technicalRoundExperience">Technical Round Experience:</label>
        <textarea
          id="technicalRoundExperience"
          name="technicalRoundExperience"
          value={formData.technicalRoundExperience}
          onChange={handleInputChange}
        ></textarea>

     

        

        <label htmlFor="hrRoundQuestions">HR Round Questions:</label>
        <textarea
          id="hrRoundQuestions"
          name="hrRoundQuestions"
          value={formData.hrRoundQuestions}
          onChange={handleInputChange}
        ></textarea>
<label htmlFor="hrRoundExperience">HR Round Experience:</label>
        <textarea
          id="hrRoundExperience"
          name="hrRoundExperience"
          value={formData.hrRoundExperience}
          onChange={handleInputChange}
        ></textarea>
        

        <label htmlFor="overallExperience">Overall Experience:</label>
        <textarea
          id="overallExperience"
          name="overallExperience"
          value={formData.overallExperience}
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="difficulty">Difficulty (1 to 10):</label>
        <input
          type="number"
          id="difficulty"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleInputChange}
          min="1"
          max="10"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompanySelectionForm;
