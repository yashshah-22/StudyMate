import React, { useRef } from 'react';
import { School } from '@mui/icons-material';
import './Certificate.css';
import { useUser } from '../contexts/UserContext';
import { useParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const Certificate = () => {
  const { userName } = useUser();
  const { subject } = useParams();
  const certificateRef = useRef(null);

  const downloadCertificate = () => {
    const content = certificateRef.current;

    html2pdf(content, {
      margin: 10,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  };

  return (
    <>
    <div className="certificate-container" ref={certificateRef}>
      <div className="certificate-header">
        <div className="logo">
          <School
            fontSize="large"
            style={{ marginRight: '10px', marginLeft: '10px', marginTop: '6px', color: 'black' }}
          />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>Study Mate</span>
        </div>
      </div>
      <div className="certificate-content">
        <h1>Certificate of Achievement</h1>
        <p>This is to certify that</p>
        <h2>Yash Shah</h2>
        <p>has successfully passed the final test in</p>
        <h3>{subject}</h3>
        <p>Congratulations!!</p>
        <p>Well done and Keep practicing!</p>
        <p>All the Best</p>
      </div>
  
    </div>
    <button className='newbtn' onClick={downloadCertificate}>Download Certificate</button>
    </>
  );
};

export default Certificate;
