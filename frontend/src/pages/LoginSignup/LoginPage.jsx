import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext'
import { School } from '@mui/icons-material';
import './LoginPage.css';
const Login = () => {
  let navigate = useNavigate();
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginmentor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter Valid Credentials!!!');
    } else {
      setUser(email);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('authToken', json.authToken);
      console.log(localStorage.getItem('authToken'));
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container" style={{backgroundColor:"cadetblue"}}>
      <div className="centered-content">
        <div className="logo mt-3">
          <School fontSize="large" style={{ marginRight: '10px', marginLeft: '10px', color: 'black' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>Study Mate</span>
        </div>
        <div className="login-form">
          <h2 style={{fontWeight:"bold"}}>Mentor Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='naveen'>
            <button type="submit" className="btn btn-success btnx">
              Submit
            </button>
            <button type="submit" onClick={()=>navigate("/")} className="btn ms-2  mr-2 text-white btny" style={{backgroundColor:"darkblue"}}>
              Student-Login
            </button>
           
            </div>
            <Link to="/mentorsignup" className="btn btn-danger ms-2 btn3 ">
              I'm a new Mentor
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
