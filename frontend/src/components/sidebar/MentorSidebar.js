import "./Sidebar.css";
import logo from "../../assets/logo.png";
import logo2 from "../../images/logo.png"
import { Link } from "react-router-dom";
const MentorSidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo2} alt="logo" />
          <h1>Study Mate</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <Link to="/community">Open Community</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <Link to="/placementstatistics">Placement Statistics</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <Link to="/allcompanyselections">Company Selections</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <Link to="/studentoffers">Student Offers</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <Link to="/">Student Login</Link>
        </div>
       
       
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <Link to="/loginsignup">Log out</Link>
        </div>
      </div>
    </div>
  );
};

export default MentorSidebar;
