import React, { useState } from 'react';
import logo from '../assets/logo.png'
import styles from './sign_in.module.css'
const SignInPage = () => {
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
        <>

            <div className={styles.container}>
                <img src={logo} alt="Centered Image" />
            </div>
            <h1 className={styles.name}>GymShark</h1>

            <h2>Sign In</h2>

            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
            </div>

        </>
    );
};

export default SignInPage;
