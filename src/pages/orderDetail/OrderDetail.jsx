import React, { useState, useEffect } from 'react';
import Slider from '../../components/slider/Slider';
import '../../styles/orderDetail/style.css';
import { Link } from 'react-router-dom';
import LogoMain from '../../assets/images/LCT-LOGO.png'
import LoginGuestModal from '../../components/LoginGuestModal/loginGuest';
import TicketViewModal from '../../components/TicketViewModal/TicketViewModal';
import { TypeAnimation } from 'react-type-animation';
// import useTypingAnimation from '../typeAnimation/TypeAnimation';
import useTypingAnimation from '../../components/typeAnimation/TypeAnimation';

export default function OrderDetail() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
    }, []);

    //For phone call
    const [isTicketViewOpen, setIsTicketViewOpen] = useState(false);

    const openTicketView = () => {
        setIsTicketViewOpen(true);
    };

    const closeTicketView = () => {
        setIsTicketViewOpen(false);
    };





    return (
        <>
            <Slider />
            {/* <Banner  bannerHeading="Order Detail" bannerText="New York Cricket Ground"/> */}
            <section className='order-detail-wrapper-outer'>
                <div className='order-detail-wrapper'>
                    <div className='heading-detail'>
                        <h2>Your Order Details <span> (India Vs Pakistan - T20 World Cup 2024) </span></h2>
                        <div>
                            <figure>
                                <img src={LogoMain} alt='logo' width={312} />
                            </figure>
                        </div>
                    </div>


                    <div className='order-detail-box'>
                        <div className='left-fragment'>
                            <ul>
                                <li>
                                    <strong>EVENT:</strong>
                                    <span>India Vs Pakistan - T20 World Cup 2024</span>
                                </li>
                                <li>
                                    <strong>EVENT TIME: </strong>
                                    <span>09:30 AM</span>
                                </li>
                                <li>
                                    <strong>DATE:</strong>
                                    <span>Thursday, 23rd August 2023</span>
                                </li>
                                <li>
                                    <strong>VENUE:</strong>
                                    <span>Trinidad and Tobago Cricket Ground</span>
                                </li>
                                <li>
                                    <strong>CATEGORY:</strong>
                                    <span>Standard</span>
                                </li>
                            </ul>
                        </div>

                        <div className='right-fragment'>
                            <ul>
                                <li>
                                    <strong>SECTION:</strong>
                                    <span>Standard</span>
                                </li>
                                {/* <li>
                                <strong>ROW </strong>
                                <span>09:30</span>
                            </li> */}
                                <li>
                                    <strong>SEATING AREA: </strong>
                                    <span>Seated Tickets</span>
                                </li>
                                <li>
                                    <strong>TICKET:</strong>
                                    <span>Mobile Ticket</span>
                                </li>
                                <li>
                                    <strong>SELECTED NO. OF TICKETS: </strong>
                                    <span>4</span>
                                </li>

                            </ul>
                        </div>
                        <h4>Total Ticket Price 500$</h4>

                    </div>
                    <div className='ticket-details'>
                        <h2>About Your Tickets</h2>
                        <ul>
                            <li><strong>
                                <span>
                                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 27.442 27.442" xml:space="preserve">
<g>
	<path d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
		c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
		s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
		c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
		 M19.995,21.1H7.448V3.373h12.547V21.1z"/>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
</g>
</svg>
                                </span>
                                Ticket Type : </strong>

                                Mobile Ticket | you will be seated togather
                            </li>
                            {/* <li>
                           <strong>Restriction : </strong> No Restriction
                        </li> */}
                            <li>

                                <strong>
                                    <span>
                                    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<rect x="211.478" y="478.609" width="89.043" height="33.391"/>
	</g>
</g>
<g>
	<g>
		<rect x="144.696" y="445.217" width="66.783" height="33.391"/>
	</g>
</g>
<g>
	<g>
		<rect x="300.522" y="445.217" width="66.783" height="33.391"/>
	</g>
</g>
<g>
	<g>
		<rect x="434.087" y="311.652" width="33.391" height="66.783"/>
	</g>
</g>
<g>
	<g>
		<rect x="111.304" y="411.826" width="33.391" height="33.391"/>
	</g>
</g>
<g>
	<g>
		<rect x="367.304" y="411.826" width="33.391" height="33.391"/>
	</g>
</g>
<g>
	<g>
		<rect x="77.913" y="378.435" width="33.391" height="33.391"/>
	</g>
</g>
<g>
	<g>
		<rect x="400.696" y="378.435" width="33.391" height="33.391"/>
	</g>
</g>
<g>
	<g>
		<rect x="11.13" y="66.783" width="33.391" height="244.87"/>
	</g>
</g>
<g>
	<g>
		<rect x="467.478" y="66.783" width="33.391" height="244.87"/>
	</g>
</g>
<g>
	<g>
		<rect x="44.522" y="311.652" width="33.391" height="66.783"/>
	</g>
</g>
<g>
	<g>
		<rect x="77.913" width="356.174" height="33.391"/>
	</g>
</g>
<g>
	<g>
		<rect x="44.522" y="33.391" width="33.391" height="33.391"/>
	</g>
</g>
<g>
	<g>
		<rect x="434.087" y="33.391" width="33.391" height="33.391"/>
	</g>
</g>
<g>
	<g>
		<polygon points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"/>
	</g>
</g>
</svg>
                                    </span>
                                    BENEFITS :  </strong>

                                Tickets 100% guaranted
                                {/* <img src={Guard} width={50} title='gurard'/> */}


                            </li>
                            <li onClick={openTicketView} style={{cursor:'pointer'}}><strong>
                                <span >
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </span>
                                Customer Support : </strong>

                                24/7
                            </li>
                            {/* <li>Age Limit 21+</li> */}

                        </ul>
                        {/* <p>Great! You are logged in successfully. Please proceed to checkout.</p> */}
                        <p>You will get an email with instructions on how to download your tickets to your phone.</p>
                        <p className='toast-pr'>Great! you are logged in successfully. Please proceed to checkout.</p>
                    </div>
                    <Link onClick={openModal}>Proceed to checkout</Link>
                    {/* <button onClick={openModal}>Open Modal</button> */}
                </div>
            </section>
            <LoginGuestModal isOpen={isModalOpen} onClose={closeModal} />
            <TicketViewModal isTicketViewOpen={isTicketViewOpen} onTicketViewClose={closeTicketView} />
        </>
    )
}
