import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { LogoutThunk} from './authService';
import {selectAuth} from './authSlice';


function Profile({buttonClicked}) {

    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(LogoutThunk());
        buttonClicked(true);
        navigate("/");
    }

    return (
        <div className='profile-card'>

            <p>Hello {auth.user.name} , You have successfuly logged in!</p>
            <button className="logout" onClick={()=>{handleLogout()}}>Logout</button>
        </div>
    )
}

export default Profile
