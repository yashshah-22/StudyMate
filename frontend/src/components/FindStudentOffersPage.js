// FindStudentOffersPage.js

import React, { useState } from 'react';
import './FindStudentOffersPage.css'; // Add your CSS styling
import { useNavigate } from 'react-router-dom';

const FindStudentOffersPage = () => {
  const [usn, setUsn] = useState('');
  const history = useNavigate();

  const handleShowResults = () => {
    // Navigate to StudentCompanySelections with the entered USN
    history(`/companyselections/${usn}`);
  };

  return (
    <div className="student-offers-page">
      <div className="usn-input">
        <h2>Find Student Offers</h2>
        <label htmlFor="usn">Enter USN:</label>
        <input
          type="text"
          id="usn"
          value={usn}
          onChange={(e) => setUsn(e.target.value)}
        />
        <button className='btn0new' onClick={handleShowResults}>Show Results</button>
      </div>
    </div>
  );
};

export default FindStudentOffersPage;
