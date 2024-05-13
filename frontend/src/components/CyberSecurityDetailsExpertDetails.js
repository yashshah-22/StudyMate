// CybersecurityExpertDetails.js
import React from 'react';
import './DomainDetails.css'; // Add your CSS styling
import cybersecurity from '../images/cs.avif';
import gettingstarted from "../images/cs_gettingstarted.jpg";
import roadmap from "../images/cs_roadmap.webp";
import career from "../images/cs_careers.jpg";
import skills from "../images/cs_languages.png";
import salary from "../images/cs_salary.png";

const CybersecurityExpertDetails = () => {
  return (
    <div className="domain-details">
        <div className="content">
          <h2 style={{textAlign:"center",textDecoration:"underline",fontWeight:"bold"}}>Cybersecurity Expert</h2>
          <p>
            A Cybersecurity Expert is responsible for protecting computer systems, networks, and data from cyber threats. This involves implementing security measures, monitoring for vulnerabilities, and responding to incidents to ensure the confidentiality and integrity of information.
          </p>
        </div>
        <img src={cybersecurity} style={{height:'500px',marginLeft:"150px",width:"75%"}} alt="Cybersecurity Expert" />
      <hr />

      <div className="section">
        <div className="content">
          <h3>Getting Started:</h3>
          <p>
            To start a career in Cybersecurity, gain foundational knowledge in networking, operating systems, and security fundamentals. Learn about common cyber threats, encryption, and security protocols.
            Getting started in Cybersecurity involves understanding networking, operating systems, and security fundamentals. Explore cybersecurity courses on platforms like Coursera and Cybrary to build a strong foundation.
          </p>
        </div>
        <img src={gettingstarted} alt="Getting Started" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Roadmap:</h3>
          <p>
            Follow a roadmap that includes gaining certifications like CompTIA Security+, Certified Ethical Hacker (CEH), and Certified Information Systems Security Professional (CISSP). Develop skills in areas such as penetration testing, incident response, and security analysis.
          </p>
          <p>
            Cybersecurity roadmap:
            <ul>
              <li>Gain foundational knowledge</li>
              <li>Obtain certifications (CompTIA Security+, CEH, CISSP)</li>
              <li>Specialize in areas like penetration testing and incident response</li>
              <li>Stay updated on emerging threats and technologies</li>
            </ul>
          </p>
        </div>
        <img src={roadmap} alt="Roadmap" className="section-image-small" />
      </div>
      <hr />
      <div className="section-videos">
        <h4 style={{ marginBottom: '30px',textAlign:"center" }}>Roadmap to Become a Cybersecurity Expert</h4>

        {/* Video 1 */}
        <div className="video-item" style={{ marginBottom: '20px',marginLeft:'300px'}}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RNwMeijExjg"
            title="Roadmap to Cybersecurity Expert"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h3>Jobs and Career:</h3>
          <p>
            Cybersecurity Experts are in high demand across industries. Roles include Security Analyst, Ethical Hacker, and Security Consultant. Companies, government agencies, and financial institutions actively seek cybersecurity professionals to safeguard sensitive information.
            Cybersecurity offers diverse career opportunities, including roles like Security Analyst, Ethical Hacker, and Security Consultant. Professionals in this field work to protect organizations from cyber threats. Demand exists across industries, with companies, government agencies, and financial institutions actively seeking cybersecurity expertise.
          </p>
        </div>
        <img src={career} alt="Jobs and Career" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Skills Required:</h3>
          <p>
            Essential skills for a Cybersecurity Expert include knowledge of network security, cryptography, security assessment tools, and incident response. Strong analytical and problem-solving skills are crucial for identifying and mitigating security risks.
          </p>
          <br/>
          <p>
            Cybersecurity Experts need skills in network security, cryptography, security assessment tools, and incident response. Analytical and problem-solving skills are essential for identifying and mitigating security risks.
          </p>
        </div>
        <img src={skills} alt="Skills Required" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Average Salary:</h3>
          <p>
            The average salary for Cybersecurity Experts varies based on experience, certifications, and location. Entry-level professionals may earn salaries ranging from $70,000 to $90,000, while mid-level experts can expect salaries between $90,000 and $120,000. Senior Cybersecurity Experts with extensive experience may command salaries exceeding $120,000.
            Entry-level Cybersecurity Experts typically earn salaries ranging from $70,000 to $90,000 annually. Mid-level professionals can expect salaries between $90,000 and $120,000. Senior or highly experienced Cybersecurity Experts, especially those with in-demand certifications, may command salaries exceeding $120,000.
          </p>
        </div>
        <img src={salary} alt="Average Salary" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>YouTube Resources:</h3>
          <p>
            Explore the following YouTube videos for best playlists to start learning Cybersecurity:
          </p>
          <ul>
            <li><a href="https://youtu.be/hXSFdwIOfnE?si=Vy3jmvet29J3ib2Y" target="_blank" rel="noopener noreferrer">Cybersecurity Basics</a></li>
            <li><a href="https://youtu.be/fNzpcB7ODxQ?si=QIRsss0GmunR39jW" target="_blank" rel="noopener noreferrer">Ethical Hacking Full Course</a></li>
          </ul>

          <br/>
          <p>
            Explore the following YouTube videos for best playlists to prepare for Cybersecurity interviews:
          </p>
          <ul>
            <li><a href="https://www.youtube.com/live/Oxbh8pdE2gs?si=BKw6QvOwRlMqTLVC" target="_blank" rel="noopener noreferrer">Cybersecurity Interview Preparation Guide</a></li>
            <li><a href="https://youtu.be/RFuzX1fkSM0?si=qyd5BKxALvfsi8oG" target="_blank" rel="noopener noreferrer">Top 30 Cybersecurity Interview Questions</a></li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default CybersecurityExpertDetails;
