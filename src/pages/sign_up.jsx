import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import styles from './sign_up.module.css'
const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        // Perform sign-in logic here, such as calling an API or validating credentials
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset the form
        setEmail('');
        setPassword('');
    };

    return (
        <div className={styles.body}>

            <div className={styles.container}>
                <img src={logo} alt="Centered Image" />
            </div>
            <h1 className={styles.name}>GymShark</h1>


            <div class={styles.container2}>
                <h2>Sign Up</h2>
                <label for="uname"><b>Username</b></label> <br />
                <input type="text" placeholder="Enter your Full Name" name="uname" required /><br />
                <label for="uname"><b>Email Address</b></label> <br />
                <input type="email" placeholder="Enter your email" name="uname" required /><br />
                <label for="uname"><b>Password</b></label> <br />
                <input type="password" placeholder="Enter your password" name="uname" required />
                <br />

                <button className={styles.button}>SIGN UP</button>
                {/* <button class={styles.Signup}>Sign-in!</button> */}
                <Link class={styles.Signin} to="/">Sign-in!</Link>


            </div>
        </div>

    );
};

export default SignUpPage;
