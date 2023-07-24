import React from 'react';
import { auth } from '../../firebase.config';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()
    const handelLogout = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='logout'>
            <button onClick={handelLogout}>Log Out</button>
        </div>
    );
};

export default Logout;