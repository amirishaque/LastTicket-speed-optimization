import React from 'react';

export default function ForgotPassword({ toggleForm }) {
    return (
        <>
            <div className="login-inner-wrapper">
                <h1>Forgot Password</h1>
                <form>
                    <input type="text" placeholder="User Name or Email" style={{ maxWidth: '385px' }} />
                    <button type="submit">Reset Password</button>
                </form>
                <p>Remember your password? <button onClick={toggleForm}>Login here</button></p>
            </div>
        </>
    );
}
