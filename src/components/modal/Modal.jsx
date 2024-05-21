import React, { useState } from 'react';
import '../../styles/modal/style.css';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, closeModal }) => {
    const handleOutsideClick = (e) => {
      if (e.target.className === 'modal-overlay') {
        closeModal();
      }
    };
  
    return (
      <>
        {isOpen && (
          <div className="modal-overlay" onClick={handleOutsideClick}>
            <div className="modal-content">
              {/* <span className="close-button" onClick={closeModal}>
                &times;
              </span> */}
              <div className='modal-content-wrapper'>
                <h3>Please select how many tickets you would like to purchase</h3>
               {/* <strong>Select The Number Of Tickets</strong> */}
               <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
                {/* <option>6</option> */}
               </select>
               <p>
                <span>
                You will be seated together
                </span>
                <span>
                <img src='https://lastchanceticket.com/public/assets/images/seated.png' alt="#" width={55}/>
                </span>
            </p>
               {/* <div className="select-ticket-wrapper"><p><span>You will be seated together</span><span><img src="https://lastchanceticket.com/public/assets/images/seated.png" alt="#" width="55" height="33" /></span></p></div> */}
               <div className='btn-wrapper-m'>
                <Link className='primary-btn' to="/ticket">Confirm</Link>
                <Link className='secondary-btn' onClick={closeModal}>Skip</Link>
               </div>
               {/* <Link to=' '>Submit</Link> */}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;