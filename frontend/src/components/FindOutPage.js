import React, { useState } from 'react';
import './FindOutPage.css'; // Add your CSS styling
import dsi from "../images/dsi.jpeg";
import { useNavigate } from 'react-router-dom';
import FindStudentOffersPage from './FindStudentOffersPage';
const FindOutPage = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const history = useNavigate();

  const handleShowResults = () => {
    // Navigate to StudentsListPage with selectedCompany and selectedYear
    history(`/students-list/${selectedCompany}/${selectedYear}`);
  };
  const companyOptions = [
    'Insight Software International Private Ltd',
    'Infosys Finacle',
    'Rattle Software',
    'IG Group India',
    'Europhins Private Ltd',
    'Datacys',
    'Mercedes Benz Private Ltd',
    'Oracle India',
    'Tally Solutions',
    'Societe Generale',
    'British Telecom Networks',
    'Texas Networks',
    'Accenture',
    'Squadcast',
    'Many More Software Companies', // Add more companies as needed
  ];

  const yearOptions = ['2024','2023', '2022', '2021', '2020', '2019','2018','2017'];

 

  return (
    <div className="company-selection-page-new">
     
      <div className="company-selection-form-new">
      <h2>Company Selection</h2>
        <label htmlFor="company">Select Company:</label>
        <select
          id="company"
          name="company"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="">Select</option>
          {companyOptions.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>

        <label htmlFor="year">Select Year of Passout:</label>
        <select
          id="year"
          name="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select</option>
          {yearOptions.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button className='btn0new' onClick={handleShowResults}>Show Results</button>

        
      </div>
    </div>
  );
};

export default FindOutPage;
