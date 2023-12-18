import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './StudyInformation.css';
import { useUser } from '../contexts/UserContext.js';

const StudyInformation = () => {
  const { userEmail } = useUser();
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
    result: '', // State variable for the result
  }); // Initialize UNS as null
  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const [isLoading, setIsLoading] = useState(false);
  
  // Define a function to scale values from 1-100 to 0-1
  const scaleValue = (value) => (value - 1) / 99;
  const { subject } = useParams();

  // Define a function to handle input changes
  const handleInputChange = (e, setter) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 100) {
      setter(scaleValue(inputValue));
    }
  };
  if (!userEmail) {
    // Handle the case where userEmail is not available
    console.error('User email not available');
    return null;
  }

  async function calculateResult() {
    const { input1, input2, input3, input4, input5 } = inputValues;
  
    try {
      const response = await axios.post(
        'http://localhost:8000/calculate',
        {
          STG: input1,
          SCG: input2,
          STR: input3,
          LPR: input4,
          PEG: input5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      const result1 = response.data[0];
      setInputValues({
        ...inputValues,
        result: result1,
      });
  
      // Send study information to the server
      await axios.post('http://localhost:8000/saveStudyInfo', {
        userEmail,
        subject,
        UNSCategory: result1,
      });
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>
      <div id="study-information" className="study-information">
        <br />
        <h1 className="study-info-head">
          <b>Study Information for {subject} Subject</b>
        </h1>
        <div className="study-info-container">
          <div className="input-container">
            <label>STG (The degree of study time for goal object materials)</label>
            <input
              type="number"
              name="input1"
              value={inputValues.input1}
              step="0.1"
              onChange={handleInputsChange}
            />
            <p className="scaled-value">Scaled Value: {inputValues.input1}</p>
          </div>

          {/* ... (similar blocks for input2 to input5) */}
          <div className="input-container">
        <label>SCG (The degree of repetition number of user for goal object materials)</label>
        <input
          type="number" name="input2" step='0.1'
          value={inputValues.input2} onChange={handleInputsChange} 
        />
        <p className="scaled-value">Scaled Value: {inputValues.input2}</p>
      </div>

      <div className="input-container">
        <label>STR (The degree of study time of user for related objects with goal object)</label>
        <input
          type="number" name="input3" step='0.1'
          value={inputValues.input3} onChange={handleInputsChange} 
        />
        <p className="scaled-value">Scaled Value: {inputValues.input3}</p>
      </div>

      <div className="input-container">
        <label>LPR (The exam performance of user for related objects with goal object)</label>
        <input
          type="number" name="input4" step='0.1'
          value={inputValues.input4} onChange={handleInputsChange} 
        />
        <p className="scaled-value">Scaled Value: {inputValues.input4}</p>
      </div>

      <div className="input-container">
        <label>PEG (The exam performance of user for goal objects)</label>
        <input
          type="number" name="input5" step='0.1'
          value={inputValues.input5} onChange={handleInputsChange} 
        />
        <p className="scaled-value">Scaled Value: {inputValues.input5}</p>
      </div>
          <button className="submit-button" onClick={calculateResult}>
            Submit
          </button>

          {isLoading && <div className="loading-spinner"></div>}

          <div className="result-message">
            UNS Category: {inputValues.result}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyInformation;
