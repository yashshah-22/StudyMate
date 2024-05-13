// DomainCards.js
import React from 'react';
import './DomainCard.css';  // Add your CSS styling
import webdev from '../images/webdev.jpg';
import androiddev from '../images/androiddev.avif';
import mldev from '../images/mldev.jpeg';
import bclk from '../images/blockchaindev.png';
import cybersec from '../images/cybersec.jpeg';
import { Link } from 'react-router-dom';
import resume from "../images/resume.png";
const domains = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Learn the essentials of web development, including HTML, CSS, and JavaScript. Explore front-end and back-end technologies to build dynamic and interactive websites.',
    image: webdev,  // Replace with your actual image URL
  },
  {
    id: 'android-development',
    name: 'Android Development',
    description: 'Dive into Android app development and build mobile applications for smartphones and tablets. Learn about UI/UX design, Java/Kotlin programming, and more.',
    image: androiddev,  // Replace with your actual image URL
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'Discover the field of machine learning and artificial intelligence. Explore algorithms, statistical models, and data analysis techniques to make predictions and automate tasks.',
    image: mldev,  // Replace with your actual image URL
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    description: 'Explore the fundamentals of blockchain technology, the underlying technology of cryptocurrencies. Learn about decentralized systems, smart contracts, and distributed ledgers.',
    image: bclk,  // Replace with your actual image URL
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Dive into the world of cybersecurity and learn to protect systems, networks, and programs from digital attacks. Explore encryption, ethical hacking, and security measures.',
    image: cybersec,  // Replace with your actual image URL
  },
  // Add more domains...
  {
    id: 'resume-building',
    name: 'Resume Building for Placements',
    description: 'Enhance your resume-building skills for successful placements. Craft compelling resumes, showcase key achievements, and stand out to potential employers.',
    image: resume,  // Replace with your actual image URL
  },
];

const DomainCards = () => {
  return (
    <div className="domain-cards-container">
      {domains.map((domain) => (
        <div className="domain-card" key={domain.id}>
          <img src={domain.image} alt={domain.name} />
          <h3>{domain.name}</h3>
          <p className="domain-description">{domain.description}</p>
          <Link to={`/domains/${domain.id}`}>
            <button className="explore-button">Explore</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DomainCards;
