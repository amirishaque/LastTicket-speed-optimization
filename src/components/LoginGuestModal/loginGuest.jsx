import React, { useState } from 'react';
import '../../styles/LoginGuestModal/style.css';
import { Link } from 'react-router-dom';

function LoginGuestModal({ isOpen, onClose }) {
    const [countryCode, setCountryCode] = useState('+1'); // Default country code
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountryCodeChange = (e) => {
        setCountryCode(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close lg-close" onClick={onClose}>&times;</span>
                <div className='lg-content-modal'>
                    <h2>Select Login Option</h2>
                    <div className='option-one-wrapper'>
                        <h3>Option 1:</h3>
                        <div className='form-wrapper'>
                            <div className='input-wrapper'>
                                <input placeholder='Email Address' type='email' />
                            </div>
                            {/* Country Code Dropdown */}
                            {/* Phone Number Input */}
                            <div className='input-wrapper'>
                                <select value={countryCode} onChange={handleCountryCodeChange}>
                                    <option value="+1">+1 (US)</option>
                                    <option value="+44">+44 (UK)</option>
                                    {/* Add more country codes as needed */}
                                </select>

                                <input
                                    placeholder='Phone Number'
                                    type='tel' // Use type 'tel' for phone number input
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}

                                />
                            </div>
                            <Link className='lg-link' to='/checkout'>Continue as a guest</Link>
                        </div>
                    </div>
                    <div className='or-lg'>
                        <hr />
                      <span>  OR
                      </span>

                      </div>
                    <div className='option-two-wrapper'>
                    <h3>Option 2:</h3>
                        <Link className='lg-link' to='/login'>Login/Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginGuestModal;
