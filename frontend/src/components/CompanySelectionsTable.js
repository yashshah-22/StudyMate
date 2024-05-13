// CompanySelectionsTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CompanySelectionsTable.css'; // Add your CSS styling

const CompanySelectionsTable = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [filterPackage, setFilterPackage] = useState(''); // State for filtering by package
  const [filterOrder, setFilterOrder] = useState('latest'); // State for filtering order
  const [filterYear, setFilterYear] = useState(''); // State for filtering by year

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

  // Function to filter data based on selected options
  const applyFilters = () => {
    let filteredData = [...studentsData];

    // Filter by package
    if (filterPackage) {
      filteredData = filteredData.filter((student) => student.ctc === filterPackage);
    }

    // Filter by year
    if (filterYear) {
      filteredData = filteredData.filter((student) => student.passoutYear === filterYear);
    }

    // Sort data based on the selected order
    if (filterOrder === 'latest') {
      filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filterOrder === 'oldest') {
      filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setStudentsData(filteredData);
  };

  return (
    <div className="company-selections-container">
      <h2 className="table-title">Students Placements Data</h2>

      {/* Filter options */}
      <div className="filter-options">
        <label>
          Filter by Package:
          <input
            type="text"
            value={filterPackage}
            onChange={(e) => setFilterPackage(e.target.value)}
          />
        </label>

        <label>
          Filter by Year:
          <input
            type="text"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          />
        </label>

        <label>
          Filter Order:
          <select
            value={filterOrder}
            onChange={(e) => setFilterOrder(e.target.value)}
          >
            <option value="latest">Latest to Oldest</option>
            <option value="oldest">Oldest to Latest</option>
          </select>
        </label>

        <button className="apply-button" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>

      {/* Table */}
      <table className="students-table">
        <thead>
          <tr>
            <th>USN</th>
            <th>Student Name</th>
            <th>Company Name</th>
            <th>CTC</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr key={student._id}>
              <td>{student.usn}</td>
              <td>{student.studentName}</td>
              <td>{student.companyName}</td>
              <td>{student.ctc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanySelectionsTable;
