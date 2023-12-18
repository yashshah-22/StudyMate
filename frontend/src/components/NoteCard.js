import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NoteCard.css';
import axios from "axios";
import { useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
const NoteCard = ({ note, isDisabled }) => {
  const {userEmail}=useUser();
  const [showNotes, setShowNotes] = useState(true);
  const navigate = useNavigate();
  const [unsCategory, setUnsCategory] = useState('');
  const navigateToNotes = () => {
    navigate(`/notes/${getDifficulty(note.title)}/${getSubject(note.title)}`);
  };
  const getUnsCategory = async () => {
    try {
      let response = await axios.post('http://localhost:8000/getUnsCategory', {
        userEmail: userEmail,  
        subject: getSubject(note.title)
      })
        let r=response.data.uns_category;
        alert(r);
    
    } catch (error) {
      console.error("Error fetching uns category:", error.message);
      // Optionally, you can log the entire error object for more details
      console.error(error);
    }
  };
    // useEffect(() => {
    //   console.log(unsCategory);
    // }, [unsCategory]);
  
   
  const getSubject = (title) => {
    if (title.toLowerCase().includes('dbms')) {
      return 'dbms';
    } else if (title.toLowerCase().includes('os')) {
      return 'os';
    } else if (title.toLowerCase().includes('networking')) {
      return 'networking';
    } else if (title.toLowerCase().includes('oop')) {
      return 'oop';
    } else if (title.toLowerCase().includes('aptitude')) {
      return 'aptitude';
    } else {
      return 'unknown';
    }
  };

  const getDifficulty = (title) => {
    if (title.toLowerCase().includes('beginner')) {
      return 'beginner';
    } else if (title.toLowerCase().includes('moderate')) {
      return 'moderate';
    } else if (title.toLowerCase().includes('advanced')) {
      return 'advanced';
    } else {
      return 'unknown';
    }
  };

  const loadNotes = () => {
    setShowNotes(true);
  };

  return (
    <div className={`note-card ${isDisabled ? 'disabled' : ''}`}>
    
      <div className="note-image-container">
        <img src={note.image} alt={note.title} className="note-image" />
      </div>
      <h3>{note.title}</h3> 
      <p>{note.content}</p>
      
      <div className='d-flex'>
        <button className="read-notes-button"  onClick={getUnsCategory}>
          {showNotes ? 'Notes' : 'Hide Notes'}
        </button>
      
        <Link to={`/test/${getSubject(note.title)}/${getDifficulty(note.title)}`}>
          <button className={`read-notes-button ${isDisabled ? 'disabled' : ''}`}>
            Take Test
          </button>

          

        </Link>
        
      </div>
    </div>
  );
};

export default NoteCard;
