import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SubjectList from './SubjectList';
import NoteList from './NoteList';
import TakeTest from './TakeTest';
import NotePage from './NotePage';
import { useUser } from '../contexts/UserContext';
import axios from 'axios';
import FinalTest from './FinalTest';

function NotesandTests() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userCategory = searchParams.get('category');
  const { userEmail } = useUser();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [unsCategory, setUnsCategory] = useState(null);

 

  return (
    <div className="App">
      <div className="header">
        <h1>Notes and Tests</h1>
      </div>
      <div className="content-container">
        <div className="sidebar">
          <SubjectList setSelectedSubject={setSelectedSubject} />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/notes/:subject/:difficulty" element={<NotePage />} />
          </Routes>
          {selectedSubject && (
            <>
              <NoteList
                subject={selectedSubject}
                userEmail={userEmail}
                userCategory={userCategory}
                unsCategory={unsCategory}
              />
              <TakeTest
                subject={selectedSubject}
                userEmail={userEmail}
                userCategory={userCategory}
                unsCategory={unsCategory}
              />
              {/* <FinalTest
                subject={selectedSubject}
                userEmail={userEmail}
                userCategory={userCategory}
                unsCategory={unsCategory}
              /> */}
            </>
          )}
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2023 Notes and Tests</p>
      </div>
    </div>
  );
}

export default NotesandTests;
