import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectError,clearError, selectAuth } from "./authSlice";
import TimedError from './TimedError';
import {RegisterThunk} from './authService';
import LoadingSpinner from './LoadingSpinner';

function Register({buttonClicked} : {buttonClicked:any}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useAppDispatch();
    const error = useAppSelector(selectError);
    const auth = useAppSelector(selectAuth);



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
        <button  onClick={(e) => handleSubmit()}>{
            auth.isLoading ? <LoadingSpinner/> : <div style={{padding:'1rem'}}>Register <i className="fas fa-arrow-circle-right"></i></div>
        }
        </button>
        </div>
      </div>
    );
}

export default Register
