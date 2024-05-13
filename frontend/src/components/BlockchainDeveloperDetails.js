// BlockchainDeveloperDetails.js
import React from 'react';
import './DomainDetails.css'; // Add your CSS styling
import blockchain from '../images/bclk.jpeg';
import gettingstarted from "../images/bclk_gettingstarted.webp";
import roadmap from "../images/blockchain_roadmap.jpeg";
import career from "../images/bclk_careers.webp";
import languages from "../images/bclk_languages.jpg";
import salary from "../images/bclk_salary.png";

const BlockchainDeveloperDetails = () => {
  return (
    <div className="domain-details">
        <div className="content">
          <h2 style={{textAlign:"center",textDecoration:"underline",fontWeight:"bold"}}>Blockchain Development</h2>
          <p>
            Blockchain Development involves creating decentralized and secure applications using blockchain technology. It includes designing, developing, and implementing blockchain solutions for various industries.
          </p>
        </div>
        <img src={blockchain} style={{height:'500px',marginLeft:"150px",width:"75%"}} alt="Blockchain Development" />
      <hr />

      <div className="section">
        <div className="content">
          <h3>Getting Started:</h3>
          <p>
            To start with Blockchain development, gain a strong understanding of blockchain fundamentals, cryptographic concepts, and smart contract development. Familiarize yourself with popular blockchain platforms like Ethereum.
            Getting started with Blockchain involves understanding the basics, cryptography, and exploring platforms like Ethereum. Online resources like ConsenSys Academy and B9lab offer courses to kickstart your Blockchain development journey.
          </p>
        </div>
        <img src={gettingstarted} alt="Getting Started" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Languages Used:</h3>
          <p>
            Blockchain developers primarily use languages like Solidity for smart contract development and languages like JavaScript for building decentralized applications (DApps). Understanding cryptographic principles is crucial.
          </p>
          <br/>
          <p>
            Solidity is a popular language for writing smart contracts on Ethereum. JavaScript is commonly used for building decentralized applications. A solid understanding of cryptographic principles is essential for secure blockchain development.
          </p>
        </div>
        <img src={languages} alt="Languages Used" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Roadmap:</h3>
          <p>
            Follow a roadmap that includes learning blockchain architecture, smart contract development, and working with decentralized technologies. Gain practical experience by contributing to blockchain projects and exploring real-world use cases.
          </p>
          <p>
            Blockchain development roadmap:
            <ul>
              <li>Understand blockchain architecture</li>
              <li>Learn smart contract development with Solidity</li>
              <li>Explore decentralized technologies</li>
              <li>Work on real-world blockchain projects</li>
              <li>Understand use cases for blockchain in different industries</li>
            </ul>
          </p>
        </div>
        <img src={roadmap} alt="Roadmap" className="section-image-small" />
      </div>
      <hr />
      <div className="section-videos">
        <h4 style={{ marginBottom: '30px',textAlign:"center" }}>Roadmap to Start With Blockchain Development</h4>

        {/* Video 1 */}
        <div className="video-item" style={{ marginBottom: '20px',marginLeft:'300px'}}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uULy2rc6YDc"
            title="Roadmap to Blockchain Development"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h3>Jobs and Career:</h3>
          <p>
            Blockchain development offers diverse career opportunities, with roles such as Blockchain Developer, Smart Contract Developer, or Blockchain Solutions Architect. Many companies, including startups and established enterprises, actively seek blockchain expertise.
            Blockchain development provides various career opportunities, including roles like Blockchain Developer, Smart Contract Developer, or Blockchain Solutions Architect. Professionals in this field work on creating secure and decentralized applications. Companies, from startups to enterprises, actively seek blockchain experts for innovative projects.
          </p>
        </div>
        <img src={career} alt="Jobs and Career" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Average CTC:</h3>
          <p>
            The average CTC (Cost to Company) for Blockchain developers varies based on experience, location, and skills. Entry-level professionals may earn salaries ranging from $80,000 to $100,000, while mid-level developers can expect salaries between $100,000 and $120,000. Senior Blockchain developers with extensive experience may command salaries exceeding $120,000.
            For entry-level Blockchain developers, the average salary typically ranges from $80,000 to $100,000 per year. As professionals gain experience, their salaries can increase, with mid-level Blockchain developers earning between $100,000 and $120,000 annually. Senior or highly experienced Blockchain developers, especially those with leadership roles or specialized skills, may command salaries exceeding $120,000.
          </p>
        </div>
        <img src={salary} alt="Average CTC" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>YouTube Resources:</h3>
          <p>
            Explore the following YouTube videos for best playlists to start learning Blockchain development:
          </p>
          <ul>
            <li><a href="https://youtu.be/jcgfQEbptdo?si=-I6avnGRfYckaFIQ" target="_blank" rel="noopener noreferrer">Blockchain Development for Beginners</a></li>
            <li><a href="https://youtu.be/gyMwXuJrbJQ?si=IRn1LJFsG5qOdNnw" target="_blank" rel="noopener noreferrer">Smart Contract Development with Solidity</a></li>
          </ul>

          <br/>
          <p>
            Explore the following YouTube videos for best playlists to prepare for Blockchain development interviews:
          </p>
          <ul>
            <li><a href="https://youtu.be/CFu4V2AFbcw?si=Op5OqDmE_rEA7hum" target="_blank" rel="noopener noreferrer">Blockchain Developer Interview Preparation Guide</a></li>
            <li><a href="https://youtu.be/Vzjc-xffhJs?si=GsKvMnpWt5T0amsm" target="_blank" rel="noopener noreferrer">Common Blockchain Development Interview Questions</a></li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default BlockchainDeveloperDetails;
