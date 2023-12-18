import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
const Main = () => {
  const navigate=useNavigate();
  const [studentName, setStudentName] = useState("");
  const [subject, setSubject] = useState("");
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Mentor,</h1>
            <p>Welcome to your mentor dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p sm2">Number of Students</p>
              <span className="font-bold text-title">20</span>
            </div>
          </div>

          {/* <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Track student progress</p>
              <span className="font-bold text-title">Statistics</span>
            </div>
          </div> */}
          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p sm3">Track student progress</p>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Student Email"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
<select
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
    >
      <option value="">Select Subject</option>
      <option value="DBMS">DBMS</option>
      <option value="Oops">Oops</option>
      <option value="Aptitude">Aptitude</option>
      <option value="OS">OS</option>
      <option value="Networking">Networking</option>
    </select>

              </div>
              <button>Show Progress</button>
            </div>
          </div>

          

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p sm2">Discussion Forum</p>
              <Link to="/community" className="font-bold text-title">Tap here</Link>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Dayananda Sagar College Of Engineering,Bangalore</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Dayananda Sagar College Of Engineering,Bangalore</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Number of Students</h1>
                <p>20</p>
              </div>

              <div className="card2">
                <h1>Average Percentage of marks scored</h1>
                <p>78%</p>
              </div>

              <div className="card3">
                <h1>Number of Tests</h1>
                <p>88</p>
              </div>

              <div className="card4">
                <h1>Top-Scorer</h1>
                <p>Vidhan Jain</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
