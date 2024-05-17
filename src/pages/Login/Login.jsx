import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../../styles/login/style.css';
// import Registration from '../../components/registration/Registration';
import ForgotPassword from '../../components/forgotpassword/ForgotPassword'
import Registration from '../../components/registration/Registration';
import LoginImage from '../../assets/images/LoginGirl.webp'

export default function Login() {
    const [isLogin, setIsLogin] = useState(true); // State to manage login or registration form
    const [isForgotPassword, setIsForgotPassword] = useState(false); // State to manage whether forgot password form is displayed

    const toggleForm = () => {
        setIsLogin(!isLogin); // Toggle between login and registration forms
    };

    const toggleForgotPassword = () => {
        setIsForgotPassword(!isForgotPassword); // Toggle whether forgot password form is displayed
    };

    return (
        <>
            <section className='login-wrapper-outer'>
                <div className='login-wrapper-inner'>
                    <div className='left-fragment'>
                        <figure>
                            <img src={LoginImage} alt='Login Image' />
                        </figure>
                    </div>
                    <div className="login-wrapper">
                        <div className="login-inner-wrapper">
                            {/* Conditional rendering based on login or registration form */}
                            {isForgotPassword ? (
                                <ForgotPassword />
                            ) : (
                                <>
                                    {isLogin ? (
                                        <>
                                            <h1>Last Chance Ticket</h1>
                                            <p>Sign into your account</p>
                                            <form style={{maxWidth:'358px', margin:'0 auto 0 0', padding:'30px'}}>
                                                <input type="text" placeholder="User Name or Email" style={{ maxWidth: '385px' }} />
                                                <input type="password" placeholder="Password" style={{ maxWidth: '385px' }} />
                                                {/* Show forgot password only in login form */}
                                                <button type="submit" style={{width:'66px'}}>Login</button>
                                                <p className='fotgot-btn' onClick={toggleForgotPassword}>Forgot Password?</p>
                                               
                                                <p className='register-wrapper'><span>Don't have an account?</span> <button onClick={toggleForm} style={{fontWeight: '600'}}>Registere here</button></p>
                                          
                                          
                                                <div className='login-methods'>
                                                    <Link to='https://www.google.com/'>
                                                <figure>
                                                    <img src='https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png' alt='login'  height={36}/>
                                                </figure>
                                                </Link>
                                                <Link to='https://www.google.com/'>
                                                <figure>
                                                    <img src='https://i.stack.imgur.com/oL5c2.png' alt='login' />
                                                </figure>
                                                </Link>
                                               
                                            </div> 
                                             </form>
                                            
                                           
                                        </>
                                    ) : (
                                        <Registration />
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
