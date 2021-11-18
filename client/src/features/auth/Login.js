import React, { useEffect, useState } from 'react'
import './Auth.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {Login as LoginService} from './authService';
import { selectError, clearError } from "./authSlice";
import TimedError from './TimedError';


function Login({buttonClicked}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const error = useSelector(selectError);

    useEffect(() => {
        buttonClicked(false);
        dispatch(clearError());
    },[])


    const handleSubmit = () => {
        const data = {'email':email, 'password':password};
        dispatch(LoginService(data));
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
        <button  onClick={e => handleSubmit(e)}>Login <i class="fas fa-arrow-circle-right"></i></button>
        </div>
        </div>
    )
}

export default Login
