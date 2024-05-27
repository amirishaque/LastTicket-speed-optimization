import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ticket/style.css';
import Modal from '../modal/Modal';
import TicketIcon from '../../assets/images/ticketIcon.webp';
import TicketViewModal from '../TicketViewModal/TicketViewModal';
import Tooltip from '../Tooltip/Tooltip';
import SelectionModal from '../SelectionModal/SelectionModal';
import InfoIcon from '../../assets/images/info.png';
import fastDelivery from '../../assets/images/quickTransfer.png';
import barCode from '../../assets/images/barCode.png';

export default function ETicket() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample ticket data
    const tickets = [
        { category: 'Alun-alun kidul', section: 'Premium', numberOfTickets: 4, price: 83, value:'Ticket in Hand', transfer:'Quick Transfer' },
        { category: 'Alun-alun kidul', section: 'Premium', numberOfTickets: 4, price: 83, value:'Clear View', transfer:'Seated' },
        { category: 'Alun-alun kidul', section: 'Premium', numberOfTickets: 4, price: 83, value:'Clear View', transfer:'Unseated' }
        // Add more ticket data as needed
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        // Remove hovered class when scrolling
        setHoveredIndex(null);
      };
  
      // Add scroll event listener when component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Remove scroll event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array ensures this effect runs only once after component mounts
  



    //For Ticket Detail
    const [isTicketViewOpen, setIsTicketViewOpen] = useState(false);

    const openTicketView = () => {
        setIsTicketViewOpen(true);
    };

    const closeTicketView = () => {
        setIsTicketViewOpen(false);
    };


    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleOpenModal = () => {
      setShowModal(true);
    };


    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };


    return (
        <>

            <div className='eticket-wrapper'>
                {tickets.map((ticket, index) => (
                    <div className={`eticket-box-wrapper ${hoveredIndex === index ? 'hovered' : ''}`}
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div class="ribbon-2">Lowest Price in the category</div>
                        
                        <div className='eticket-box' key={index}>
                        <strong style={{ color: 'red', fontSize: '12px' }} className='red-tt'> Ticket price below face value - Grab it now</strong>
                            <div className='left-fragment'>
                                <figure>
                                    <img src={barCode} alt='ticket' width={180} />
                                    {/* {/ <img src='https://lastchanceticket.com/public/assets/images/t1.webp' alt='ticket' width={180} /> /} */}
                                </figure>
                                <div className='d-wrapper-eticket'>
                                    <h3>Mobile Ticket
                                        <Tooltip text="You will soon get an email with instructions on how to download your tickets to your phone.">
                                            <span className='info-icon'>
                                            <img src={InfoIcon} alt='info' width={20} height={20} />
                                            </span>
                                            {/* <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.0294 16.9706 2.99994 12 2.99994C7.0294 2.99994 2.99994 7.0294 2.99994 12C2.99994 16.9706 7.0294 21 12 21Z" stroke="#6f6f6f" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.99991"/><path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#000000"/><path d="M12 17V11" stroke="#6f6f6f" stroke-width="2"/></svg>
                                            </span> */}
                                        </Tooltip>
                                  
                                        {/* {/ <img src={TicketIcon} width={25} style={{marginLeft:'5', marginRight:'5'}}/> /} */}
                                        {/* <div className='possession-wrapper'>
                                            <span className="blinking">
                                          
                                                <svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.25993 21.3884H6C5.05719 21.3884 4.58579 21.3884 4.29289 21.0955C4 20.8026 4 20.3312 4 19.3884V18.2764C4 17.7579 4 17.4987 4.13318 17.2672C4.26636 17.0356 4.46727 16.9188 4.8691 16.6851C7.51457 15.1464 11.2715 14.2803 13.7791 15.7759C13.9475 15.8764 14.0991 15.9977 14.2285 16.1431C14.7866 16.77 14.746 17.7161 14.1028 18.2775C13.9669 18.396 13.8222 18.486 13.6764 18.5172C13.7962 18.5033 13.911 18.4874 14.0206 18.4699C14.932 18.3245 15.697 17.8375 16.3974 17.3084L18.2046 15.9433C18.8417 15.462 19.7873 15.4619 20.4245 15.943C20.9982 16.3762 21.1736 17.0894 20.8109 17.6707C20.388 18.3487 19.7921 19.216 19.2199 19.7459C18.6469 20.2766 17.7939 20.7504 17.0975 21.0865C16.326 21.4589 15.4738 21.6734 14.6069 21.8138C12.8488 22.0983 11.0166 22.0549 9.27633 21.6964C8.29253 21.4937 7.27079 21.3884 6.25993 21.3884Z" fill="#1C274C" />
                                                    <path d="M6.58579 2.58579C6.21901 2.95256 6.08188 3.4593 6.03061 4.2498C7.24895 4.23355 8.23355 3.24896 8.2498 2.03061C7.4593 2.08188 6.95256 2.21901 6.58579 2.58579Z" fill="#1C274C" />
                                                    <path d="M17.4142 2.58579C17.0474 2.21901 16.5407 2.08188 15.7502 2.03061C15.7664 3.24895 16.751 4.23355 17.9694 4.2498C17.9181 3.4593 17.781 2.95256 17.4142 2.58579Z" fill="#1C274C" />
                                                    <path d="M17.4142 9.41421C17.0474 9.78099 16.5407 9.91812 15.7502 9.96939C15.7665 8.75104 16.751 7.76645 17.9694 7.7502C17.9181 8.5407 17.781 9.04744 17.4142 9.41421Z" fill="#1C274C" />
                                                    <path d="M6.58579 9.41421C6.95256 9.78099 7.4593 9.91812 8.2498 9.96939C8.23355 8.75105 7.24895 7.76645 6.03061 7.7502C6.08188 8.5407 6.21901 9.04744 6.58579 9.41421Z" fill="#1C274C" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5.75C8.07107 5.75 9.75 4.07107 9.75 2H14.25C14.25 4.07107 15.9289 5.75 18 5.75V6.25C15.9289 6.25 14.25 7.92893 14.25 10H9.75C9.75 7.92893 8.07107 6.25 6 6.25V5.75ZM12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z" fill="#1C274C" />
                                                </svg>
                                                Ticket in hand</span>
                                            <span>
                                                <img src={fastDelivery} alt='Fast Delivery' width={17} height='auto' />
                                               
                                                Quick Transfer</span>
                                        </div> */}
                               </h3>
                                    <ul>
                                        <li>
                                            <strong>Category</strong>
                                            <span>{ticket.category}</span>
                                        </li>
                                        {/* <li>
                                            <strong>Category</strong>
                                            <span>Corner Side</span>
                                        </li> */}
                                        <li>
                                            <strong>Section</strong>
                                            <span>{ticket.section}</span>
                                        </li>
                                        
                                    </ul>
                                    <div className='possession-wrapper'>
                                            <span className="blinking">
                                          
                                                <svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.25993 21.3884H6C5.05719 21.3884 4.58579 21.3884 4.29289 21.0955C4 20.8026 4 20.3312 4 19.3884V18.2764C4 17.7579 4 17.4987 4.13318 17.2672C4.26636 17.0356 4.46727 16.9188 4.8691 16.6851C7.51457 15.1464 11.2715 14.2803 13.7791 15.7759C13.9475 15.8764 14.0991 15.9977 14.2285 16.1431C14.7866 16.77 14.746 17.7161 14.1028 18.2775C13.9669 18.396 13.8222 18.486 13.6764 18.5172C13.7962 18.5033 13.911 18.4874 14.0206 18.4699C14.932 18.3245 15.697 17.8375 16.3974 17.3084L18.2046 15.9433C18.8417 15.462 19.7873 15.4619 20.4245 15.943C20.9982 16.3762 21.1736 17.0894 20.8109 17.6707C20.388 18.3487 19.7921 19.216 19.2199 19.7459C18.6469 20.2766 17.7939 20.7504 17.0975 21.0865C16.326 21.4589 15.4738 21.6734 14.6069 21.8138C12.8488 22.0983 11.0166 22.0549 9.27633 21.6964C8.29253 21.4937 7.27079 21.3884 6.25993 21.3884Z" fill="#1C274C" />
                                                    <path d="M6.58579 2.58579C6.21901 2.95256 6.08188 3.4593 6.03061 4.2498C7.24895 4.23355 8.23355 3.24896 8.2498 2.03061C7.4593 2.08188 6.95256 2.21901 6.58579 2.58579Z" fill="#1C274C" />
                                                    <path d="M17.4142 2.58579C17.0474 2.21901 16.5407 2.08188 15.7502 2.03061C15.7664 3.24895 16.751 4.23355 17.9694 4.2498C17.9181 3.4593 17.781 2.95256 17.4142 2.58579Z" fill="#1C274C" />
                                                    <path d="M17.4142 9.41421C17.0474 9.78099 16.5407 9.91812 15.7502 9.96939C15.7665 8.75104 16.751 7.76645 17.9694 7.7502C17.9181 8.5407 17.781 9.04744 17.4142 9.41421Z" fill="#1C274C" />
                                                    <path d="M6.58579 9.41421C6.95256 9.78099 7.4593 9.91812 8.2498 9.96939C8.23355 8.75105 7.24895 7.76645 6.03061 7.7502C6.08188 8.5407 6.21901 9.04744 6.58579 9.41421Z" fill="#1C274C" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5.75C8.07107 5.75 9.75 4.07107 9.75 2H14.25C14.25 4.07107 15.9289 5.75 18 5.75V6.25C15.9289 6.25 14.25 7.92893 14.25 10H9.75C9.75 7.92893 8.07107 6.25 6 6.25V5.75ZM12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z" fill="#1C274C" />
                                                </svg>
                                                {ticket.value}</span>
                                            <span>
                                                <img src={fastDelivery} alt='Fast Delivery' width={17} height='auto' />
                                               
                                                {ticket.transfer}</span>
                                        </div>
                                </div>
                            </div>
                            <div className='right-fragment'>
                                <p className='no-of-tickets' style={{textAlign:'center', paddingBottom:'5px'}}>No of Tickets</p>
                                <div className='btn-numbr'>
                                    <div  className="counter-box">
                                        <div className='incremant-wrapper'>
                                            <span className="arrow-button downers" disabled>
                                            <svg fill="#000000" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"/></svg>
                                            </span>
                                            <span  className="arrow-button uppers" disabled>
                                            <svg fill="#000000" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"/></svg>
                                            </span>
                                        </div>
                                        <span className="count">{count}</span>
                                        
                                    </div>
                                </div>
                                 {/* <strong style={{ color: 'red', fontSize: '12px' }} className='red-tt'> Ticket price below face value - Grab it now</strong> */}
                                <span>${ticket.price}</span>
                                <Link to='/order-detail'>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className={`overlay ${hoveredIndex !== null ? 'show' : ''}`}></div>
             {/* <button onClick={handleOpenModal}>Open Modal</button> */}
             <TicketViewModal isTicketViewOpen={isTicketViewOpen} onTicketViewClose={closeTicketView} /> 
            {/* <button onClick={openModal}>Buy Now</button> */}
             <Modal isOpen={isModalOpen} closeModal={closeModal} /> 
            {showModal && (
        <SelectionModal
          onClose={handleCloseModal}
        />
      )}
        </>
    );
}
