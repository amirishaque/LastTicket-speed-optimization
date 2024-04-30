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
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    return (
        <>

            <div className='eticket-wrapper'>
                {tickets.map((ticket, index) => (
                    <div  className={`eticket-box-wrapper ${hoveredIndex === index ? 'hovered' : ''}`}
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                        <div class="ribbon-2">Lowest Price in the category</div>
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
                                        <svg fill="#6f6f6f" height="17px" width="17px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
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
                            <strong style={{color:'red', fontSize:'12px'}}> Ticket price below face value - Grab it now</strong>
                            <span>${ticket.price}</span>
                            <button>Buy Now</button>
                        </div>
                      </div>
                    </div>
                ))}
            </div>
            <div className={`overlay ${hoveredIndex !== null ? 'show' : ''}`}></div>

          
            {/* <button onClick={openModal}>Buy Now</button> */}
            {/* <Modal isOpen={isModalOpen} closeModal={closeModal} /> */}
        </>
    );
}
