import React, { useState } from 'react';
import '../../styles/TicketViewModal/style.css'

function TicketViewModal({ isTicketViewOpen, onTicketViewClose }) {
    if (!isTicketViewOpen) return null;

    return (
        <div className="modal12 t-view-modal-wrapper-outer">
            <div className="modal-content12 t-view-modal-wrapper">
                <span className="close12 t-view-close" onClick={onTicketViewClose}>&times;</span>
                <div className='t-view-modal-content'>
                    <div className='detail'>
                        {/* <strong>E Ticket</strong> */}
                        <ul className="dropdown-menu-ph"><li><img className="country-flag" src="https://www.svgrepo.com/show/508668/flag-us.svg" alt="+1234567890" />+1234567890</li><li><img className="country-flag" src="https://www.svgrepo.com/show/508668/flag-us.svg" alt="+4455667788" />+4455667788</li><li><img className="country-flag" src="https://www.svgrepo.com/show/508668/flag-us.svg" alt="+1234567890" />+1234567890</li><li><img className="country-flag" src="https://www.svgrepo.com/show/508668/flag-us.svg" alt="+6123456789" />+6123456789</li><li><img className="country-flag" src="https://www.svgrepo.com/show/508668/flag-us.svg" alt="+1234567890" />+1234567890</li><li><img className="country-flag" src="https://www.svgrepo.com/show/508668/flag-us.svg" alt="+1234567890" />+1234567890</li><li><img className="country-flag" src="https://www.svgrepo.com/show/508668/flag-us.svg" alt="+1234567890" />+1234567890</li><li><img className="country-flag" src="https://www.svgrepo.com/show/508668/flag-us.svg" alt="+1234567890" />+1234567890</li><li><img className="country-flag" src="https://www.svgrepo.com/show/508668/flag-us.svg" alt="+1234567890" />+1234567890</li></ul>
                    </div>
                    {/* <div className='detail'>
                        <strong>Physical Ticket</strong>
                        <span>Tickets will be send to your address you provided.</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default TicketViewModal;
