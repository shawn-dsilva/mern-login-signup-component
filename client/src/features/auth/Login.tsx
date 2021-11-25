import React, { useEffect, useState } from 'react'
import './Auth.css';
import {Link} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {LoginThunk} from './authService';
import { selectError, clearError, selectAuth } from "./authSlice";
import TimedError from './TimedError';
import LoadingSpinner from './LoadingSpinner';


function Login({buttonClicked}: {buttonClicked:any}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const error = useAppSelector(selectError);
    const auth = useAppSelector(selectAuth);

    useEffect(() => {
        buttonClicked(false);
        // Clears error status and data when new component is loaded, so that old error data
        // does not appear
        dispatch(clearError());
    },[])


    const handleSubmit = () => {
        const data = {'email':email, 'password':password};
        dispatch(LoginThunk(data));
    }

    return (
        <div className="auth-card">
            <div className="auth-card-container">
            <h1>Login</h1>
            <span>
                Don't have an account? <Link className='divStyle' to="/register"> Register. </Link>
            </span>
            <label>Email </label>
        <input
         type="email"
         value={email}
         name="email"
         onChange={e => setEmail(e.target.value)}
         >
        </input>

        <label>Password</label>
        <input
         type="password"
         value={password}
         name="password"
         onChange={e => setPassword(e.target.value)}
         >
        </input>
        {error.errMsg && <TimedError errorMessage={error.errMsg}/>}
        <button  onClick={e => handleSubmit()}> {
            auth.isLoading ? <LoadingSpinner/> : <div style={{padding:'1rem'}}>Login <i className="fas fa-arrow-circle-right"></i></div>
        }
            </button>
        </div>
        </div>
    )
}

export default Login
