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
                    <div className='ee' style={{position:'relative'}}>
                    <div class="ribbon ribbon-top-left">
                      <span className='ri'>Lowest Price in the Category</span>
                      <div className='eticket-box' key={index}>
                        <div className='left-fragment'>
                            <figure>
                                <img src='https://lastchanceticket.com/public/assets/images/t1.webp' alt='ticket' width={180} />
                            </figure>
                            <div className='d-wrapper-eticket'>
                                <h3>Mobile Ticket
                                    {/* <img src={TicketIcon} width={25} style={{marginLeft:'5', marginRight:'5'}}/> */}
                                    <div className='possession-wrapper'>
                                        <span>
                                            <svg fill="#6f6f6f" width="17px" height="17px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <title>fast-ship</title>
                                                <path d="M17.451 22.151c-0.224-0.193-0.444-0.397-0.66-0.613-2.468-2.467-3.425-5.51-2.139-6.796s4.328-0.328 6.796 2.139c0.209 0.209 0.407 0.422 0.594 0.638l-4.050-10.471-1.454 3.069c-1.496-3.205-3.434-7.332-3.434-7.332l1.266 7.996-9.825-9.822-3.477-0.047-0.048 3.572 10.051 10.047-8.386-1.327c0 0 4.063 1.906 7.257 3.397l-2.953 1.451 10.465 4.099zM29.264 29.429l-3.172-9.146 2.677 2.218-1.088-6.208-2.706 2.928-1.474 0.368-2.097-1.145-3.124 3.124 1.145 2.096-0.367 1.469-2.873 2.656 6.208 1.088-1.98-2.519 8.852 3.070zM22.141 24.63l2.324-2.324c4.308 4.381 2.062 6.638-2.324 2.324z"></path>
                                            </svg>
                                            Ticket in hand</span>
                                        <span>
                                            <svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0909 2.54877C17.5385 2.23946 16.9504 2.20831 16.3288 2.286C15.7383 2.3598 15.02 2.54651 14.1567 2.7709L12.1384 3.2954C11.2755 3.51963 10.557 3.70634 10.0072 3.92891C9.4292 4.16293 8.92943 4.47736 8.60526 5.02195C8.27903 5.56998 8.24664 6.15584 8.32794 6.76777C8.40459 7.34473 8.59805 8.04488 8.82853 8.87901L9.37108 10.8429C9.60161 11.6775 9.79499 12.3775 10.0259 12.9139C10.271 13.4835 10.5985 13.9684 11.1541 14.2795C11.7064 14.5888 12.2945 14.62 12.9162 14.5423C13.5066 14.4685 14.225 14.2818 15.0882 14.0574L17.1066 13.5329C17.9695 13.3086 18.688 13.1219 19.2377 12.8994C19.8157 12.6653 20.3155 12.3509 20.6397 11.8063C20.9659 11.2583 20.9983 10.6724 20.917 10.0605C20.8403 9.48355 20.6469 8.7834 20.4164 7.94926L19.8738 5.98536C19.6433 5.1508 19.4499 4.45076 19.2191 3.91434C18.9739 3.34477 18.6465 2.85989 18.0909 2.54877ZM14.485 4.2354C15.4099 3.99503 16.0331 3.83463 16.5148 3.77442C16.9764 3.71673 17.1974 3.7676 17.358 3.85754C17.5154 3.94567 17.6656 4.09931 17.8413 4.50734C18.0265 4.93768 18.1937 5.53684 18.442 6.43548L18.9564 8.29754C19.2048 9.19641 19.3687 9.79611 19.4301 10.2581C19.4883 10.6968 19.4362 10.8956 19.3508 11.0391C19.2633 11.186 19.1047 11.3349 18.6748 11.509C18.2271 11.6903 17.605 11.8535 16.6798 12.0939L14.76 12.5929C13.835 12.8333 13.2118 12.9937 12.7301 13.0539C12.2685 13.1116 12.0476 13.0607 11.8869 12.9707C11.7296 12.8826 11.5793 12.729 11.4037 12.3209C11.2185 11.8906 11.0512 11.2914 10.8029 10.3928L10.2885 8.53074C10.0402 7.63187 9.87625 7.03217 9.81487 6.57022C9.75658 6.13148 9.80876 5.93269 9.89418 5.78921C9.98164 5.64227 10.1402 5.49334 10.5701 5.31928C11.0179 5.138 11.64 4.97476 12.5651 4.73434L14.485 4.2354Z" fill="#6f6f6f" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.2007 4.72469C2.80157 4.61396 2.38823 4.84775 2.27749 5.24688C2.16675 5.64602 2.40054 6.05936 2.79968 6.17009L4.50338 6.64278C4.92898 6.76086 5.24592 7.08236 5.35419 7.47427L7.3055 14.5374C7.23053 14.5521 7.1556 14.5692 7.0808 14.5887C5.10375 15.1025 3.89563 17.0913 4.43836 19.0558C4.97848 21.0108 7.03215 22.1384 9.00137 21.6266C10.7247 21.1788 11.8638 19.6102 11.7683 17.9139L20.1888 15.7256C20.5897 15.6214 20.8303 15.2119 20.7261 14.811C20.6219 14.4101 20.2124 14.1696 19.8115 14.2738L11.3734 16.4667C10.8651 15.4794 9.93146 14.7927 8.86688 14.5562L6.80003 7.07483C6.5469 6.1586 5.82129 5.45177 4.9044 5.19738L3.2007 4.72469ZM7.45809 16.0404C8.66981 15.7255 9.88575 16.4288 10.198 17.5589C10.5076 18.6796 9.82797 19.862 8.62408 20.1748C7.41235 20.4897 6.19641 19.7864 5.8842 18.6563C5.5746 17.5357 6.25419 16.3533 7.45809 16.0404Z" fill="#6f6f6f" />
                                            </svg>
                                            Quick Transfer</span>
                                    </div>
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
                    </div>
                    </div>
                ))}
            </div>
          
            {/* <button onClick={openModal}>Buy Now</button> */}
            {/* <Modal isOpen={isModalOpen} closeModal={closeModal} /> */}
        </>
    );
}
