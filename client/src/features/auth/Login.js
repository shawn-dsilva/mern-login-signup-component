import React, { useEffect, useState } from 'react'
import './Auth.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {Login as LoginService} from './authService';


function Login({buttonClicked}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        buttonClicked(false);
    },[])


    const handleSubmit = () => {
        const data = {'email':email, 'password':password};
        dispatch(LoginService(data));
    }

    return (
        <div className="auth-card">
            <div className="auth-card-container">
            <h1>LOGIN</h1>
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
        <button  onClick={e => handleSubmit(e)}>Login</button>
        </div>
        </div>
    )
}

export default Login
