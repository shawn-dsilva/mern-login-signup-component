import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectError,clearError, selectAuth } from "./authSlice";
import TimedError from './TimedError';
import {RegisterThunk} from './authService';
import LoadingSpinner from './LoadingSpinner';

function Register({buttonClicked}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const auth = useSelector(selectAuth);



    useEffect(() => {
      buttonClicked(false);
      dispatch(clearError());
    },[])


    const handleSubmit = () => {
      const data = {'name':username, 'email':email, 'password':password};
      dispatch(RegisterThunk(data));
    }

    return (
      <div className="auth-card">
        <div className="auth-card-container">
        <h1>Register</h1>
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
        {error.errMsg && <TimedError errorMessage={error.errMsg}/>}
        <button  onClick={(e) => handleSubmit(e)}>{
            auth.isLoading ? <LoadingSpinner/> : <div style={{padding:'1rem'}}>Register <i class="fas fa-arrow-circle-right"></i></div>
        }
        </button>
        </div>
      </div>
    );
}

export default Register
