import React from 'react';
import { Outlet, Link } from "react-router-dom";


function Auth({button}) {

    return (
        <div className='auth-container'>
            <div className='main-text'>
                <h1 > <strong>MERN</strong> Sessions Auth App </h1>
                <p>Modern, Fully Featured Sessions based Authentication app <span role="img" aria-label="lock">🔒</span> and MERN starter template. </p>
                <p>Featuring account confirmation through e-mail, password reset workflow, user avatar upload and more! </p>
                <br></br>
                <p>Built with Functional Component and Hooks based React, Redux Toolkit, NodeJS, Express and MongoDB</p>
            <br/>

                <div style={{margin:'2rem auto'}}>
                    { button && <Link className='main-button' to="/login">
                        Sign In
                    </Link>}

                    {button && <Link className='main-button' to="/register">
                        Register
                    </Link>}
                </div>
             </div>
            <Outlet/>

        </div>
    )
}

export default Auth
