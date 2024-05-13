import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/selectionModal/style.css'

const SelectionModal = ({ tickets, onSelect, onClose }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleConfirmSelection = () => {

      onClose();
    
  };

  return (
    <div className="unique-modal-overlay">
      <div className="unique-modal">
        <h2>How many tickets?</h2>
        <div className='select-ticket-wrapper'>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <p>
                <span>
                You will be seated togather
                </span>
                <span>
                <img src='https://lastchanceticket.com/public/assets/images/seated.png' alt="#" width={55} height={33}/>
                </span>
            </p>
        </div>
        <div className='btn-wrapper-unique'>
        <Link to='/order-detail'>Confirm</Link>
          {/* <button onClick={onClose}>Cancel</button> */}
          <Link onClick={onClose}>Skip</Link>
        </div>
      </div>
    </div>
  );
};

export default SelectionModal;
