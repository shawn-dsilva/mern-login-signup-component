import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import { Routes, Route, Link } from "react-router-dom";

function Auth() {

    const [button, buttonClicked] = useState(true);

    return (
        <div className='auth-container'>
            <h1 > <strong>MERN</strong> Sessions Auth App </h1>
          <br/>
            <h5 >Minimalistic Sessions based Authentication app <span role="img" aria-label="lock">🔒 </span><br></br>Built with React + Redux, NodeJS, Express, MongoDB and Bootstrap</h5>
            <h5 >Uses Cookies <span role="img" aria-label="lock">🍪 </span></h5>
          <br/>

          <Routes>
             <Route path="/login" element={<Login buttonClicked={buttonClicked} />} />
             <Route path="/register" element={<Register buttonClicked={buttonClicked} />} />
           </Routes>

             { button && <Link className='divStyle' to="/login">
                 <button>Sign In</button>
               </Link>}

             {button && <Link className='divStyle' to="/register">
                 <button>Register</button>
             </Link>}
            
        </div>
    )
}

export default Auth
