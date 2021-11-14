import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Login from './Login'
import Register from './Register'
import { Routes, Route, Link } from "react-router-dom";
import {isAuth} from './authService';

function Auth() {

    const [button, buttonClicked] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isAuth());
    },[])

    return (
        <div className='auth-container'>
            <h1 > <strong>MERN</strong> Sessions Auth App </h1>
            <p>Modern, Fully Featured Sessions based Authentication app <span role="img" aria-label="lock">🔒</span> and MERN starter template. </p>
            <p>Featuring account confirmation through e-mail, password reset workflow, user avatar upload and more! </p>
            <br></br>
            <p>Built with Functional Component and Hooks based React, Redux Toolkit, NodeJS, Express and MongoDB</p>
          <br/>

          <Routes>
             <Route path="/login" element={<Login buttonClicked={buttonClicked} />} />
             <Route path="/register" element={<Register buttonClicked={buttonClicked} />} />
           </Routes>

            <div style={{display:'flex', margin:'auto', justifyContent:'space-between'}}>
                { button && <Link className='main-button' to="/login">
                     Sign In
                </Link>}

                {button && <Link className='main-button' to="/register">
                    Register
                </Link>}
             </div>
            
        </div>
    )
}

export default Auth
