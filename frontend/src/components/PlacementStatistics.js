// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlacementStatistics.css'; // Add your CSS styling

const PlacementStatistics = () => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/companyselections'); // Replace with your API endpoint
        setStudentsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate statistics
  const totalStudents = studentsData.length;
  const studentsBelow7LPA = studentsData.filter(student => parseFloat(student.ctc) < 700000).length;
  const studentsBetween7And20LPA = studentsData.filter(student => parseFloat(student.ctc) >= 700000 && parseFloat(student.ctc) <= 2000000).length;
  const studentsAbove20LPA = studentsData.filter(student => parseFloat(student.ctc) > 2000000).length;

  const ctcValues = studentsData.map(student => parseFloat(student.ctc));
  const highestPackage = Math.max(...ctcValues);
  const lowestPackage = Math.min(...ctcValues);
  const averagePackage = ctcValues.length > 0 ? ctcValues.reduce((sum, value) => sum + value, 0) / ctcValues.length : 0;

  return (
    <div className="placement-statistics">
      <h2>Placement Statistics</h2>
      <div className="stat-container">
        <div className="stat-box" style={{ backgroundColor: '#ff5722' }}>
          <p>Total Students Placed</p>
          <p>{totalStudents}</p>
        </div>
        <div className="stat-box" style={{ backgroundColor: '#4caf50' }}>
          <p>Students Below 7 LPA</p>
          <p>{studentsBelow7LPA}</p>
        </div>
        <div className="stat-box" style={{ backgroundColor: '#2196f3' }}>
          <p>Students Between 7 and 20 LPA</p>
          <p>{studentsBetween7And20LPA}</p>
        </div>
        <div className="stat-box" style={{ backgroundColor: '#e91e63' }}>
          <p>Students Above 20 LPA</p>
          <p>{studentsAbove20LPA}</p>
        </div>
        <div className="stat-box" style={{ backgroundColor: '#ffeb3b' }}>
          <p>Highest Package (LPA)</p>
          <p>{highestPackage.toFixed(2)}</p>
        </div>
        <div className="stat-box" style={{ backgroundColor: '#9c27b0' }}>
          <p>Lowest Package (LPA)</p>
          <p>{lowestPackage.toFixed(2)}</p>
        </div>
        <div className="stat-box" style={{ backgroundColor: '#ffc107' }}>
          <p>Average Package (LPA)</p>
          <p>{averagePackage.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default PlacementStatistics;
