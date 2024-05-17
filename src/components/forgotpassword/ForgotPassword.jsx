import React from 'react';

export default function ForgotPassword({ toggleForm }) {
    return (
        <>
            <div className="login-inner-wrapper">
                <h1>Forgot Password</h1>
                <form style={{maxWidth:'358px', margin:'0 auto 0 0', padding:'30px'}}>
                    <input type="text" placeholder="User Name or Email" style={{ maxWidth: '385px' }} />
                    <button type="submit" style={{width:'384px'}}>Proceed with password reset</button>
                    <p><span>Remember your password?</span> <button onClick={toggleForm}>Login here</button></p>
                </form>
                {/* <p>Remember your password? <button onClick={toggleForm}>Login here</button></p> */}
            </div>
        </>
    );
}
