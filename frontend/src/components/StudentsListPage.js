// StudentsListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StudentsListPage.css';

const StudentsListPage = () => {
  const { company, passoutYear } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`/api/students-list/${company}/${passoutYear}`);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, [company, passoutYear]);

  return (
    <div className="students-list-page">
      <h2>Students List for {company} - Passout Year {passoutYear}</h2>
      <div className="students-container">
        {students.map((student) => (
          <div key={student._id} className="student-card">
           
            <div className="student-details">
              <div><strong>Name:</strong> {student.studentName}</div>
              <div><strong>USN:</strong> {student.usn}</div>
              <div><strong>Mobile Number:</strong> {student.contact}</div>
              <div><strong>Email:</strong> {student.email}</div>
              <div><strong>Github Profile:</strong> <a href={student.githubProfile}>{student.studentName}_githublink</a></div>
              <div><strong>Linkedin Profile:</strong><a href={student.linkedinProfile}> {student.studentName}_linkedinlink</a></div>
              {student.resume && (
                <div>
                  <strong>Resume:</strong>
                  <a
                    className="download-link"
                    href={`data:application/pdf;base64,${student.resume.toString('base64')}`}
                    download={`${student.studentName}_resume.pdf`}
                  >
                    Download Resume
                  </a>
                </div>
              )}
              
              {student.companyJD && (
                <div>
                  <strong>Job Description:</strong>
                  <a
                    className="download-link"
                    href={`data:application/pdf;base64,${student.companyJD.toString('base64')}`}
                    download={`JD_${student.studentName}_${student.companyName}.pdf`}
                  >
                    Download JD
                  </a>
                </div>
              )}
              <div><strong>Assessment Type:</strong> {student.assessmentType}</div>
              <div><strong>Questions:</strong> {student.questionType}</div>
              <div><strong>Technical Round Questions:</strong> {student.technicalRoundQuestions}</div>
              <div><strong>Technical Round Experience:</strong> {student.technicalRoundExperience}</div>
              <div><strong>HR Round Questions:</strong> {student.hrRoundQuestions}</div>
              <div><strong>HR Round Experience:</strong> {student.hrRoundExperience}</div>
              <div><strong>Overall Experience:</strong> {student.overallExperience}</div>
              <div><strong>Difficulty:</strong> {student.difficulty}</div>
            </div>
            {student.profilePicture && (
              <img
                src={`data:image/png;base64,${student.profilePicture}`}
                alt="Profile"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsListPage;
