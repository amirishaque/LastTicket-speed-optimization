import React from 'react';

export default function Registration() {
    return (
        <>
            <div className="login-inner-wrapper">
                <h1>Sign up</h1>
                <form>
                    <input type="text" placeholder="User Name or Email" style={{ maxWidth: '385px' }} />
                    <input type="password" placeholder="Password" style={{ maxWidth: '385px' }} />
                    <button type="submit">Sign up</button>
                </form>
                <p>Already have an account? <button onClick={toggleForm}>Login here</button></p>
            </div>
        </>
    );
}
