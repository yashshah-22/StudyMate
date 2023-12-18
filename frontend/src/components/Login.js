import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext.js';
import { School } from '@mui/icons-material';

const Login = () => {
  let navigate = useNavigate();
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
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
      navigate('/studymate');
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
          <h2 className='text-black'>Login to your account</h2>
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
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <Link to="/signup" className="btn btn-danger ms-2">
              I'm a new User
            </Link>
            <button type="submit" onClick={()=>navigate("/loginsignup")} className="btn ms-2 text-white" style={{backgroundColor:"darkblue"}}>
              Mentor-Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
