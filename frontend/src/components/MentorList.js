import React, { useState } from 'react';
import './MentorList.css'; // Create a CSS file for mentor list styles
import image from "../assets/person.png"
const mentorsData = [
  {
    id: 1,
    name: 'Yash Shah',
    domain: 'Web Development',
    image: 'web-dev.jpg', // Put image file in public folder
    contact: '8310130944',
    email: 'yashshah2280@gmail.com',
    college: 'Dayananda Sagar College of Engineering',
  },
  {
    id: 2,
    name: 'Keshab Kataruka',
    domain: 'Machine Learning',
    image: 'ml.jpg',
    contact: '9876543210',
    email: 'keshabkataruka@gmail.com',
    college: 'Dayananda Sagar College of Engineering,Bangalore',
  },
  
  {
    id: 3,
    name: 'Vidhan Jain',
    domain: 'Android Development',
    image: 'blockchain.jpg',
    contact: '555-555-5555',
    email: 'bob.johnson@example.com',
    college: 'Dayananda Sagar College of Engineering',
  },
  {
    id: 4,
    name: 'Palak Khandelwal',
    domain: 'Blockchain',
    image: 'blockckchain.jpg',
    contact: '9182817281',
    email: 'palakkhandelwal@gmail.com',
    college: 'Dayananda Sagar College of Engineering,Bangalore',
  },

  {
    id: 5,
    name: 'Yash Nagda',
    domain: 'Deep Learning',
    image: 'blockchain.jpg',
    contact: '9182717317',
    email: 'yashnagda@gmail.com',
    college: 'Dayananda Sagar College of Engineering,Bangalore',
  },
  {
    id: 6,
    name: 'Anukalp Jain',
    domain: 'Web Development',
    image: 'asa.jpg',
    contact: '9189289129',
    email: 'anukalpjain@gmail.com',
    college: 'Dayananda Sagar College of Engineering,Bangalore',
  },
  {
    id: 7,
    name: 'Harsh Gupta',
    domain: 'Android Development',
    image: 'blockchain.jpg',
    contact: '9182712681',
    email: 'harshgupta@gmail.com',
    college: 'Dayananda Sagar College of Engineering,Bangalore',
  },
  // Add more mentors with different domains
];

const MentorList = () => {
  const [selectedDomain, setSelectedDomain] = useState('All');

  const mentors = selectedDomain === 'All'
    ? mentorsData
    : mentorsData.filter(mentor => mentor.domain === selectedDomain);

  return (
    <div className="mentor-list">
      <div className="filter">
        <label>Filter by Domain:</label>
        <select onChange={(e) => setSelectedDomain(e.target.value)}>
          <option value="All">All</option>
          <option value="Web Development">Web Development</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Android Development">Android Development</option>
          <option value="Deep Learning">Deep Learning</option>
          {/* Add more domain options */}
        </select>
      </div>
      <div className="mentors">
        {mentors.map(mentor => (
          <div key={mentor.id} className="mentor-card">
            <img src={image}  alt={mentor.name} />
            <div className="mentor-info">
              <h3 style={{fontSize:"20px",fontWeight:"bold",paddingTop:"10px"}}>{mentor.name}</h3>
              <p>Domain: {mentor.domain}</p>
              <p>Contact: {mentor.contact}</p>
              <p>Email: {mentor.email}</p>
              <p>College: {mentor.college}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorList;
