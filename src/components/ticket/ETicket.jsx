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
                                    {/* <img src='https://lastchanceticket.com/public/assets/images/t1.webp' alt='ticket' width={180} /> */}
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
                                  
                                        {/* <img src={TicketIcon} width={25} style={{marginLeft:'5', marginRight:'5'}}/> */}
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
                                                Ticket in hand</span>
                                            <span>
                                                <img src={fastDelivery} alt='Fast Delivery' width={17} height='auto' />
                                                {/* <svg fill="#6f6f6f" height="17px" width="17px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 612 612" xml:space="preserve">
                                                    <g>
                                                        <g>
                                                            <path d="M175.205,239.62c0.127-1.965-0.533-3.902-1.833-5.381l-58.84-66.941c-1.3-1.479-3.135-2.381-5.102-2.508
			c-1.975-0.126-3.902,0.533-5.381,1.833c-27.037,23.766-49.479,51.794-66.706,83.305c-0.944,1.729-1.165,3.762-0.611,5.651
			c0.554,1.89,1.836,3.483,3.565,4.427l78.205,42.748c1.131,0.619,2.352,0.912,3.557,0.912c2.627,0,5.174-1.398,6.523-3.866
			c11.386-20.828,26.229-39.359,44.114-55.08C174.178,243.422,175.08,241.587,175.205,239.62z"/>
                                                            <path d="M201.462,214.829c1.334,2.515,3.907,3.948,6.568,3.948c1.174,0,2.365-0.279,3.473-0.867
			c20.962-11.117,43.512-18.371,67.025-21.561c4.064-0.551,6.913-4.293,6.362-8.358l-11.979-88.316
			c-0.551-4.064-4.304-6.909-8.358-6.362c-35.708,4.843-69.949,15.857-101.772,32.736c-3.623,1.922-5.002,6.416-3.082,10.041
			L201.462,214.829z"/>
                                                            <path d="M105.785,334.345l-86.017-23.338c-1.901-0.514-3.929-0.255-5.638,0.725s-2.958,2.598-3.475,4.499
			C3.586,342.295,0,369.309,0,396.523c0,4.657,0.111,9.329,0.342,14.284c0.185,3.981,3.468,7.083,7.414,7.083
			c0.116,0,0.234-0.002,0.35-0.008l89.031-4.113c1.967-0.09,3.82-0.96,5.145-2.415c1.327-1.455,2.022-3.38,1.93-5.347
			c-0.155-3.341-0.23-6.444-0.23-9.484c0-18.02,2.365-35.873,7.029-53.066C112.082,339.499,109.743,335.42,105.785,334.345z"/>
                                                            <path d="M438.731,120.745c-32.411-15.625-67.04-25.308-102.925-28.786c-1.972-0.198-3.918,0.408-5.439,1.659
			c-1.521,1.252-2.481,3.056-2.671,5.018l-8.593,88.712c-0.396,4.082,2.594,7.713,6.677,8.108
			c23.652,2.291,46.463,8.669,67.8,18.954c1.015,0.49,2.118,0.738,3.225,0.738c0.826,0,1.654-0.139,2.45-0.416
			c1.859-0.649,3.385-2.012,4.24-3.786l38.7-80.287C443.978,126.965,442.427,122.525,438.731,120.745z"/>
                                                            <path d="M569.642,245.337c0.48-1.911,0.184-3.932-0.828-5.624c-18.432-30.835-41.933-57.983-69.848-80.686
			c-1.529-1.242-3.48-1.824-5.447-1.627c-1.959,0.203-3.758,1.174-5,2.702l-56.237,69.144c-1.242,1.529-1.828,3.488-1.625,5.447
			c0.201,1.959,1.173,3.758,2.702,5.002c18.47,15.019,34.015,32.975,46.205,53.369c1.392,2.326,3.855,3.618,6.383,3.618
			c1.297,0,2.61-0.34,3.803-1.054l76.501-45.728C567.94,248.889,569.16,247.248,569.642,245.337z"/>
                                                            <path d="M598.044,304.939c-1.228-3.915-5.397-6.096-9.308-4.867l-85.048,26.648c-3.915,1.226-6.093,5.393-4.867,9.306
			c6.104,19.486,9.199,39.839,9.199,60.494c0,3.041-0.076,6.144-0.23,9.484c-0.092,1.967,0.602,3.892,1.93,5.347
			c1.327,1.456,3.178,2.325,5.145,2.415l89.031,4.113c0.118,0.005,0.234,0.008,0.35,0.008c3.944,0,7.228-3.103,7.414-7.083
			c0.229-4.955,0.342-9.627,0.342-14.284C612,365.306,607.306,334.494,598.044,304.939z"/>
                                                            <path d="M305.737,380.755c-1.281,0-2.555,0.042-3.824,0.11l-120.65-71.185c-2.953-1.745-6.702-1.308-9.176,1.065
			c-2.476,2.371-3.07,6.099-1.456,9.121l65.815,123.355c-0.242,2.376-0.371,4.775-0.371,7.195c0,18.608,7.246,36.101,20.403,49.258
			c13.158,13.158,30.652,20.404,49.26,20.404c18.608,0,36.101-7.248,49.258-20.404c13.158-13.157,20.403-30.65,20.403-49.258
			c0-18.608-7.246-36.101-20.403-49.258C341.839,388.001,324.344,380.755,305.737,380.755z"/>
                                                        </g>
                                                    </g>
                                                </svg> */}
                                                Quick Transfer</span>
                                        </div>
                               </h3>
                                    <ul>
                                        <li>
                                            <strong>Category</strong>
                                            <span>{ticket.category}</span>
                                        </li>
                                        <li>
                                            <strong>Category</strong>
                                            <span>Corner Side</span>
                                        </li>
                                        <li>
                                            <strong>Section</strong>
                                            <span>{ticket.section}</span>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className='right-fragment'>
                                <span className='btn-numbr'>
                                    <input type='number' placeholder='1' style={{maxWidth:'40px', maxHeight:'40px', padding:'0px 0px 0px 10px '}}/>
                                </span>
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
            {/* <TicketViewModal isTicketViewOpen={isTicketViewOpen} onTicketViewClose={closeTicketView} /> */}
            {/* <button onClick={openModal}>Buy Now</button> */}
            {/* <Modal isOpen={isModalOpen} closeModal={closeModal} /> */}
            {showModal && (
        <SelectionModal
          onClose={handleCloseModal}
        />
      )}
        </>
    );
}
