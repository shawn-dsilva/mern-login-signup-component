import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { LogoutThunk} from './authService';
import {selectAuth} from './authSlice';


function Profile({buttonClicked}: {buttonClicked:any}) {

    const auth = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(LogoutThunk());
        buttonClicked(true);
        navigate("/");
    }

    return (
        <div className='profile-card'>

            <p>Hello {auth.user.name} , You have successfuly logged in!</p>
            <button className="logout" onClick={()=>{handleLogout()}}>Logout <i className="fas fa-sign-out-alt"></i></button>
        </div>
    )
}

export default Profile
