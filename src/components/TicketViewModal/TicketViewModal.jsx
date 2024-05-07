import React, { useState } from 'react';
import '../../styles/TicketViewModal/style.css'

function TicketViewModal({ isTicketViewOpen, onTicketViewClose }) {
    if (!isTicketViewOpen) return null;

    return (
        <div className="modal t-view-modal-wrapper-outer">
            <div className="modal-content t-view-modal-wrapper">
                <span className="close t-view-close" onClick={onTicketViewClose}>&times;</span>
                <div className='t-view-modal-content'>
                    <div className='detail'>
                        {/* <strong>E Ticket</strong> */}
                        <span>You will soon get an email with instructions on how to download your tickets to your phone.</span>
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
