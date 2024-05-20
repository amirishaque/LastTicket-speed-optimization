import React, { useState, useRef, useEffect } from 'react';
import countriesData from './CountriesData.json';
import './style/style.css';
import PhoneIcon from '../../../assets/images/phoneIcon.png';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null); // New state for selected country
    const dropdownRef = useRef(null);

    // Toggle dropdown open state
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Handle country selection
    const handleSelectCountry = (country) => {
        setSelectedCountry(country); // Update selected country state
        setIsOpen(false); // Close the dropdown
    };

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <>
            <div ref={dropdownRef} className='dropdown-wrapper'>
                {/* Update button text to show selected country */}
                <button className="dropdown-btn" onClick={toggleDropdown}>
                    {selectedCountry ? (
                        <span className='cell-ph wrapper-cp'>
                              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1200px-United-states_flag_icon_round.svg.png' alt='flag' height='23' width='23'  style={{borderRadius:'50%'}} /> 
                            {/* <img className="country-flag" src={selectedCountry.flag} alt={selectedCountry.name} /> */}
                            {/* <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#0DCCD7" />
                            </svg> */}
                            <span className='ph-num'>
                                    <span className='flag-img'>
                                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#0DCCD7" />
                            </svg>

                              {/* <img src={PhoneIcon} alt='Phone Icon' width={20} height={20} /> */}
                                      
                                    </span>
                                    <span> {selectedCountry.name}</span></span>
                        </span>
                    ) : (
                        <>
                            <span className='cell-ph'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1200px-United-states_flag_icon_round.svg.png' alt='flag' height='23' width='23' style={{borderRadius:'50%'}} /> 
                                {/* <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#0DCCD7" />
                                </svg> */}
                            </span>
                            <span className='ph-num'>
                                <span className='flag-img'>
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#0DCCD7" />
                                </svg>
                                 {/* <img src={PhoneIcon} alt='Phone Icon' width={20} height={20} /> */}
                                
                                </span>
                              <span>+1234567890 </span>
                            </span>
                        </>

                    )}
                </button>
                {isOpen && (
                    <ul className="dropdown-menu-ph">
                        {countriesData.map((country) => (
                            <li key={country.code} onClick={() => handleSelectCountry(country)}>
                                <img className="country-flag" src={country.flag} alt={country.name} />
                                {country.name}
                            </li>
                        ))}
                        <p className='opening-hours-text'>Opening Hours 9:00 to 17:00 CET weekdays</p>
                    </ul>
                )}
            </div>
        </>
    );
}

export default Dropdown;
