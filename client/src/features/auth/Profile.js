import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {isAuth, LogoutThunk} from './authService';
import {selectAuth} from './authSlice';


function Profile() {

    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(LogoutThunk());
        navigate("/");
    }

    return (
        <div>

            <span>Hello {auth.user.name} , You have successfuly logged in!</span>
            <div className="logout" onClick={()=>{handleLogout()}}>Logout</div>
        </div>
    )
}

export default Profile
