import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { School } from '@mui/icons-material';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, phonenumber }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter Valid Credentials!!!');
    } else {
      alert('New User Created Successfully');
      navigate('/');
    }
  };

  return (
    <div className="login-container" style={{backgroundColor:"cadetblue"}}>
      <div className="signup-container" style={{backgroundColor:"aliceblue",width:"600px"}}>
        <div className="logo">
          <School fontSize="large" style={{ marginRight: '10px', marginLeft: '10px',marginTop:'6px', color: 'black' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>Study Mate</span>
        </div>
        <h2>Welcome to StudyMate</h2>
        <form className="p-4 border shadow rounded m-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
          </div>
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
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="phonenumber" className="form-label">
              Mobile Number
            </label>
            <input type="text" className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/" className="btn btn-danger ms-2">
            Already a User
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
