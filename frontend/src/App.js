// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import "./pages/Dashboard/Dashboard.css";
import LoginPage from './pages/LoginSignup/LoginPage';
import Assessment from "./components/Assessments/Assessment";
import axios from "axios";
import FindStudentOffersPage from './components/FindStudentOffersPage.js';
import Dashboards from "./pages/Dashboard/Dashboard";
import NotesandTests from './components/NotesandTests'
import NotesDisplayPage from './components/NotesDisplayPage';
import HomePage from './components/HomePage';
import StudentsListPage from './components/StudentsListPage.js';
import TestPage from './components/TestPage';
import Dashboard from './components/Dashboard';
import StudentCompanySelections from './components/StudentCompanySelections.js';
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
import DomainCards from './components/DomainCards.js';
import DomainDetailsPage from './components/DomainDetailsPage.js';
import CompanySelectionForm from './components/CompanySelectionForm.js';
import { FindInPage } from '@mui/icons-material';
import FindOutPage from './components/FindOutPage.js';
import CompanySelectionsTable from './components/CompanySelectionsTable.js';
import PlacementStatistics from './components/PlacementStatistics.js';
import MentorSidebar from './components/sidebar/MentorSidebar.js';
const socket=io.connect("http://localhost:3001");

axios.defaults.baseURL="http://localhost:5000";
function App() {
  return (
    <Router>
    <UserProvider>
      <div className="App">
        <Routes>
        <Route path="/studymate" element={<><Navbar/><HomePage/><Sidebar/></>}/>
          <Route path="/notes" element={<><Navbar/><NotesandTests /><Sidebar/></>} />
          <Route path="/" element={<><Login /></>} />
          <Route path="/signup" element={<><Signup /></>} />
          <Route path="/community" element={<><Navbar/><JoinChat/><Sidebar/></>} />
          <Route path="/studentdashboard" element={<><Navbar/><Dashboard/><Sidebar/></>} />
          <Route path="/mentors" element={<><Navbar/><MentorList/><Sidebar/></>} />
          <Route path="/test/:subject/:difficulty" element={<><Navbar/><TestPage/><Sidebar/></>} />
          <Route path="/notes/:difficulty/:subject" element={<><Navbar/><NotesDisplayPage /><Sidebar/></>} />
          <Route path="/studentform/:subject" element={<><Navbar/><StudyInformation/><Sidebar/></>} />
          <Route path="/allsubjects" element={<><Navbar/><SubjectCards/><Sidebar/></>} />
          <Route path="/notesandtests/:subject/:userCategory" element={<><Navbar/><NotesandTests /><Sidebar/></>} />
          <Route path="/loginsignup" element={<LoginPage/>} />
          <Route path="/assessment" element={<><Assessment /><Sidebar/></>} />
          <Route path="/dashboard" element={<><Dashboards /><MentorSidebar/></>} />
          <Route path="/mentorsignup" element={<Signup2/>}/>
          <Route path="/test/:subject" element={<><Navbar/><FinalTest/><Sidebar/></>} />
          <Route path="/test/:subject/finalcertificate" element={<><Navbar/><Certificate/><Sidebar/></>} />
          <Route path="/domains" element={<><Navbar/><DomainCards/><Sidebar/></>} />
          <Route path="/domains/:domainId" element={<><DomainDetailsPage /><Sidebar/></>} />
          <Route path="/selectionform" element={<><Navbar/><CompanySelectionForm/><Sidebar/></>}/>
          <Route path="/findoutpage" element={<><Navbar/><FindOutPage/><Sidebar/></> } />
          <Route path="/students-list/:company/:passoutYear" element={<><Navbar/><StudentsListPage/><Sidebar/></> } />
          <Route path="/allcompanyselections" element={<><Navbar/><CompanySelectionsTable/><MentorSidebar/></> } />
          <Route path="/placementstatistics" element={<><Navbar/><PlacementStatistics/><Sidebar/></> } />
          <Route path="/companyselections/:usn" element={<><Navbar/><StudentCompanySelections/><MentorSidebar/></> } />
          <Route path="/studentoffer" element={<><Navbar/><FindStudentOffersPage/><Sidebar/></> } />
          <Route path="/studentoffers" element={<><FindStudentOffersPage/><MentorSidebar/></>}/>
        </Routes>
        
      </div>
      </UserProvider>
    </Router>
  );
}

export default App;


