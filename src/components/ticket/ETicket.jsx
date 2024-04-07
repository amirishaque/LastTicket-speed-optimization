import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ticket/style.css';
import Modal from '../modal/Modal';

export default function ETicket() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample ticket data
    const tickets = [
        { category: 'Alun-alun kidul', section: 'Premium', numberOfTickets: 4, price: 83 },
        { category: 'Alun-alun kidul', section: 'Premium', numberOfTickets: 4, price: 83 },
        { category: 'Alun-alun kidul', section: 'Premium', numberOfTickets: 4, price: 83 }
        // Add more ticket data as needed
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='eticket-wrapper'>
                {tickets.map((ticket, index) => (
                    <div className='eticket-box' key={index}>
                        <div className='left-fragment'>
                            <h3>Mobile Ticket</h3>
                            <ul>
                                <li>
                                    <strong>Category</strong>
                                    <span>{ticket.category}</span>
                                </li>
                                <li>
                                    <strong>Section</strong>
                                    <span>{ticket.section}</span>
                                </li>
                                <li>
                                    <strong>No of Tickets</strong>
                                    <span>{ticket.numberOfTickets}</span>
                                </li>
                            </ul>
                        </div>
                        <div className='right-fragment'>
                            <strong>No Restrictions</strong>
                            <span>${ticket.price}</span>
                            <button onClick={openModal}>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* <button onClick={openModal}>Buy Now</button> */}
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </>
    );
}
