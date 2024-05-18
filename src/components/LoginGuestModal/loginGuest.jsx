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
        <div className="modal13">
            <div className="modal-content13">
                <span className="close lg-close" onClick={onClose}>&times;</span>
                <div className='lg-content-modal'>
                    <h2>Select Login Option</h2>
                    <div className='option-one-wrapper'>
                        <h3>Option 1:</h3>
                        <div className='form-wrapper'>
                            <div className='input-wrapper'>
                                <span className='lg-mail-wrapper'>
                                <svg fill="#0dccd7" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<path d="M496.327,127.091l-15.673,9.613L281.83,258.623c-7.983,4.859-16.917,7.293-25.84,7.293s-17.826-2.424-25.778-7.262
			l-0.136-0.084L31.347,134.771l-15.673-9.759L0,115.242v302.717h512V117.488L496.327,127.091z"/>
	</g>
</g>
<g>
	<g>
		<path d="M25.245,94.041l25.161,15.673l25.161,15.673l171.008,106.527c5.841,3.521,13.082,3.511,18.913-0.042l173.652-106.486
			l25.558-15.673l25.558-15.673H25.245z"/>
	</g>
</g>
</svg>
                                </span>
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
                                    className='ph-number-input'

                                />
                            </div>
                            <Link className='lg-link' to='/checkout'>Continue as a guest
                            <span className='paper-plan'>
                                
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                            </span>
                            </Link>
                        </div>
                    </div>
                    <div className='or-lg'>
                        <hr />
                      <span>  OR
                      </span>

                      </div>
                    <div className='option-two-wrapper'>
                    <h3>Option 2:</h3>
                        <Link className='lg-link' to='/login'>Login/Register
                        <span className='paper-plan'>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                                                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginGuestModal;
