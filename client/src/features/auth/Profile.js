import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {isAuth} from './authService';
import {selectAuth} from './authSlice';


function Profile() {

    const auth = useSelector(selectAuth);

    return (
        <div>
            {
                auth.isLoading ? <div><h1>LOADING</h1></div> :
            <span>Hello {auth.user.name} , You have successfuly logged in!</span>
            } 
        </div>
    )
}

export default Profile
