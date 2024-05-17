import React, { useState } from 'react';

export default function Registration({ toggleForm }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        reEnterEmail: '',
        password: '',
        reEnterPassword: '',
        phoneNumber: '',
        nationality: '',
        countryOfResidence: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            reEnterEmail: '',
            password: '',
            reEnterPassword: '',
            phoneNumber: '',
            nationality: '',
            countryOfResidence: ''
        });
    };

    return (
        <>
            <div className="login-inner-wrapper">
                <h1 className='sign-up-heading'>Sign up</h1>
                <form onSubmit={handleSubmit} style={{padding:'30px'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" style={{ maxWidth: '48%' }} />
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" style={{ maxWidth: '48%' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" style={{ maxWidth: '48%' }} />
                        <input type="email" name="reEnterEmail" value={formData.reEnterEmail} onChange={handleChange} placeholder="Re-Enter Email Address" style={{ maxWidth: '48%' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" style={{ maxWidth: '48%' }} />
                        <input type="password" name="reEnterPassword" value={formData.reEnterPassword} onChange={handleChange} placeholder="Re-enter Password" style={{ maxWidth: '48%' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number (with country code)" style={{ maxWidth: '48%' }} />
                        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Nationality" style={{ maxWidth: '48%' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input type="text" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleChange} placeholder="Country of residence" style={{ maxWidth: '100%', width:'100%' }} />
                    </div>
                    <div style={{display:'flex', gap:'20px'}}>
                        <button type="reset" onClick={handleReset}>Reset All</button>
                        <button type="submit">Submit Form</button>
                    </div>
                    <p style={{display:'flex',width:'100%s'}}><span>Already have an account?</span> <button onClick={toggleForm}>Login here</button></p>
                </form>
               
            </div>
        </>
    );
}
