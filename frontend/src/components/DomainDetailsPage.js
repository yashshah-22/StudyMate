// DomainDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import WebDevelopmentDetails from './WebDevelopmentDetails';
import './DomainDetailsPage.css'; // Add your CSS styling
import { Navbar } from 'react-bootstrap';
import AndroidDevelopmentDetails from './AndroidDevelopmentDetails';
import MachineLearningDevelopmentDetails from './MachineLearningDevelopmentDetails';
import BlockchainDeveloperDetails from './BlockchainDeveloperDetails';
import CybersecurityExpertDetails from './CyberSecurityDetailsExpertDetails';
import ResumeBuildingDetails from './ResumeBuildingDetails';

const DomainDetailsPage = () => {
  const { domainId } = useParams();

  return (
    <div className="domain-details-page">
      {domainId === 'web-development' && <><WebDevelopmentDetails /></>}
      {/* Add similar conditions for other domains */}
      {domainId === 'android-development' && <><AndroidDevelopmentDetails/></>}
      {domainId === 'machine-learning' && <><MachineLearningDevelopmentDetails/></>}
      {domainId === 'blockchain' && <><BlockchainDeveloperDetails/></>}
      {domainId === 'cybersecurity' && <><CybersecurityExpertDetails/></>}
      {domainId === 'resume-building' && <><ResumeBuildingDetails/></>}
    </div>
  );
};

export default DomainDetailsPage;
