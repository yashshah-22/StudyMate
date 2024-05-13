import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentCompanySelections.css';
import { useParams } from 'react-router-dom';

const StudentCompanySelections = () => {
  const [studentData, setStudentData] = useState(null);
  const { usn } = useParams();

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`/api/companyselections/${usn}`);
        console.log("Response from API:", response.data);
        setStudentData(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, [usn]);

  if (!studentData) {
    return <div>Loading...</div>;
  }

  // Sort studentData in decreasing order by CTC
  const sortedData = Object.keys(studentData).sort(
    (a, b) => studentData[b].ctc - studentData[a].ctc
  );

  return (
    <div className="student-company-selections">
      {studentData[0] && studentData[0].studentName && (
        <h2>{studentData[0].studentName}'s Company Selections</h2>
      )}
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>CTC</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((key, index) => (
            <tr key={key}>
              <td>{studentData[key].companyName}</td>
              <td>{studentData[key].ctc}</td>
              <td>
                <button
                  style={{
                    color: "white",
                    backgroundColor:
                      index === 0 ? 'green' : 'red',
                  }}
                >
                  {index === 0 ? 'Accepted' : 'Rejected'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentCompanySelections;
