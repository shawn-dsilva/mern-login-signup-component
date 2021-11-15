import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {RegisterThunk} from './authService';

function Register({buttonClicked}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();


    useEffect(() => {
      buttonClicked(false);
    },[])


    const handleSubmit = () => {
      const data = {'name':username, 'email':email, 'password':password};
      dispatch(RegisterThunk(data));
    }

    return (
      <div className="auth-card">
        <div className="auth-card-container">
        <h1>REGISTER</h1>
        <span>
        Already have an account? <Link className='divStyle' to="/login"> Login. </Link>
        </span>

        <label>Username </label>
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <label>Email </label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button  onClick={(e) => handleSubmit(e)}>
          Register
        </button>
        </div>
      </div>
    );
}

export default Register
