import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ticket/style.css';
import Modal from '../modal/Modal';
import TicketIcon from '../../assets/images/ticketIcon.webp'

export default function ETicket() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample ticket data
    const tickets = [
        { category: 'Alun-alun kidul', section: 'Premium', numberOfTickets: 4, price: 83 },
        { category: 'Alun-alun kidul', section: 'Premium', numberOfTickets: 4, price: 83 },
        { category: 'Alun-alun kidul', section: 'Premium', numberOfTickets: 4, price: 83 }
        // Add more ticket data as needed
    ];

    // const openModal = () => {
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    // };

    return (
        <>
            <div className='eticket-wrapper'>
                {tickets.map((ticket, index) => (
                    <div className='eticket-box' key={index}>
                        <div className='left-fragment'>
                            <figure>
                                <img src='https://lastchanceticket.com/public/assets/images/t1.webp' alt='ticket' width={180}/>
                            </figure>
                            <div className='d-wrapper-eticket'>
                            <h3>Mobile Ticket
                                {/* <img src={TicketIcon} width={25} style={{marginLeft:'5', marginRight:'5'}}/> */}
                            </h3>
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
                        </div>
                        <div className='right-fragment'>
                            <strong>No Restrictions</strong>
                            <span>${ticket.price}</span>
                            <button>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* <button onClick={openModal}>Buy Now</button> */}
            {/* <Modal isOpen={isModalOpen} closeModal={closeModal} /> */}
        </>
    );
}
