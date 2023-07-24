import React, { useState } from 'react';
import './Login.css'

// import { auth } from '../../firebase.config';

import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase.config';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

const Login = () => {
    const navigate = useNavigate()
    const [toggol, setToggol] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')



    const handelClickReg = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    navigate('/')
                }).catch((error) => {
                    alert(error)
                });

            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    // loging
    const handelLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }

    const handelGoogle = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/')
            }).catch((error) => {
                alert(error.message);
            });
    }






    return (
        <div className='form_sec'>
            {
                toggol ? <form style={{ backgroundColor: 'black' }}>
                    <h3>Sign up Here</h3>

                    <label for="username">Username</label>
                    <input type="text" placeholder="Name" id="username" onChange={(e) => setName(e.target.value)} />

                    <label for="password">Email</label>
                    <input type="email" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} />

                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password" onChange={(e) => setPass(e.target.value)} />

                    <button className='loginbutton' onClick={handelClickReg}>Log In</button>
                    <div class="social">
                        <div class="go" onClick={handelGoogle}><i class="fab fa-google"></i>  Google</div>
                        <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
                    </div>
                    <p className='s-p'>{toggol ? <div>I Have An Account <span onClick={() => setToggol(!toggol)}>Login</span></div> : <div>I Have No Account <span onClick={() => setToggol(!toggol)}>Sign Up</span></div>}</p>
                </form> : <form style={{ backgroundColor: 'black' }}>
                    <h3>Login Here</h3>

                    <label for="username">Email</label>
                    <input type="email" placeholder="Email or Phone" id="username" onChange={(e) => setEmail(e.target.value)} />

                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password" onChange={(e) => setPass(e.target.value)} />

                    <button className='loginbutton' onClick={handelLogin}>Log In</button>
                    <div class="social">
                        <div class="go" onClick={handelGoogle}><i class="fab fa-google"></i>Google</div>
                        <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
                    </div>
                    <p className='s-p'>{toggol ? <div>I Have An Account <span onClick={() => setToggol(!toggol)}>Login</span></div> : <div>I Have No Account <span onClick={() => setToggol(!toggol)}>Sign Up</span></div>}</p>
                </form>
            }




        </div>
    );
};

export default Login;