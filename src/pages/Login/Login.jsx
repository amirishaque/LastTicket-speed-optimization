import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../../styles/login/style.css';
import Registration from '../../components/registration/Registration';
import ForgotPassword from '../../components/forgotpassword/ForgotPassword'

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
                    <div className='left-fragment'></div>
                    <div className="login-wrapper">
                        <div className="login-inner-wrapper">
                            {/* Conditional rendering based on login or registration form */}
                            {isForgotPassword ? (
                                <ForgotPassword />
                            ) : (
                                <>
                                    <h1>{isLogin ? 'Login' : 'Sign up'}</h1> {/* Conditional title based on form type */}
                                    <form>
                                        <input type="text" placeholder="User Name or Email" style={{ maxWidth: '385px' }} />
                                        <input type="password" placeholder="Password" style={{ maxWidth: '385px' }} />
                                        {/* Show forgot password only in login form */}
                                        {isLogin && <p><button onClick={toggleForgotPassword}>Forgot Password?</button></p>}
                                        <button type="submit">{isLogin ? 'Login' : 'Sign up'}</button> {/* Conditional button text */}
                                    </form>
                                    <p>
                                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                                        <button onClick={toggleForm}>{isLogin ? 'Sign up here' : 'Login here'}</button> {/* Toggle button text */}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
