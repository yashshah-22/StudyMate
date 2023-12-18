// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import "./pages/Dashboard/Dashboard.css";
import LoginPage from './pages/LoginSignup/LoginPage';
import Assessment from "./components/Assessments/Assessment";
import axios from "axios";
import Dashboards from "./pages/Dashboard/Dashboard";
import NotesandTests from './components/NotesandTests'
import NotesDisplayPage from './components/NotesDisplayPage';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import Dashboard from './components/Dashboard';
import MentorList from './components/MentorList';
import Login from './components/Login';
import Signup from './components/Signup';
import Signup2 from './pages/LoginSignup/SignupPage.js';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar/Sidebar.js';
import Chat from './components/Chat';
import StudyInformation from './components/StudyInformation';
import SubjectCards from './components/SubjectCards';
import io from "socket.io-client";
import JoinChat from './components/JoinChat';
import { UserProvider } from './contexts/UserContext.js';
import FinalTest from './components/FinalTest.js';
import Certificate from './components/Certificate.js';
const socket=io.connect("http://localhost:3001");

axios.defaults.baseURL="http://localhost:5000";
function App() {
  return (
    <Router>
    <UserProvider>
      <div className="App">
        <Routes>
        <Route path="/studymate" element={<><Navbar/><HomePage/><Sidebar/></>}/>
          <Route path="/notes" element={<><Navbar/><NotesandTests /></>} />
          <Route path="/" element={<><Login /></>} />
          <Route path="/signup" element={<><Signup /></>} />
          <Route path="/community" element={<><Navbar/><JoinChat/></>} />
          <Route path="/studentdashboard" element={<><Navbar/><Dashboard/></>} />
          <Route path="/mentors" element={<><Navbar/><MentorList/></>} />
          <Route path="/test/:subject/:difficulty" element={<><Navbar/><TestPage/></>} />
          <Route path="/notes/:difficulty/:subject" element={<><Navbar/><NotesDisplayPage /></>} />
          <Route path="/studentform/:subject" element={<><Navbar/><StudyInformation/></>} />
          <Route path="/allsubjects" element={<><Navbar/><SubjectCards/></>} />
          <Route path="/notesandtests/:subject/:userCategory" element={<><Navbar/><NotesandTests /></>} />
          <Route path="/loginsignup" element={<LoginPage/>} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/dashboard" element={<Dashboards />} />
          <Route path="/mentorsignup" element={<><Signup2/></>}/>
          <Route path="/test/:subject" element={<><Navbar/><FinalTest/></>} />
          <Route path="/test/:subject/finalcertificate" element={<><Navbar/><Certificate/></>} />
        </Routes>
      </div>
      </UserProvider>
    </Router>
  );
}

export default App;


