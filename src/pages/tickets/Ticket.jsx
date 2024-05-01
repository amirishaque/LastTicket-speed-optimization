import React, { useState, useEffect } from 'react';
import '../../styles/tickets/style.css';
import seatIcon from "../../assets/images/seated.webp";
import map from "../../assets/images/map.webp";
import ticket from "../../assets/images/ticketIcon.webp";
import Banner from '../../components/banner/Banner';
import Slider from '../../components/slider/Slider';
import ETicket from '../../components/ticket/ETicket';
import TicketDetail from '../../components/ticketDetail/TicketDetail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../../components/modal/Modal';
import { Link } from 'react-router-dom';
import Flag from '../../assets/images/flag.svg';
import Loader from '../../components/loader/Loader';
import TrustImg from '../../assets/images/trustpilot.png';
import HTrustImg from '../../assets/images/trustpilothelf.png';
import USAImg from '../../assets/images/USAFlag.png';
import TicketLoader from '../../components/loader copy/TicketLoader';
import { TypeAnimation } from 'react-type-animation';
import TicketModal from '../../components/TicketModal/TicketModal';
import { animateScroll as scroll } from 'react-scroll';


export default function Ticket() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [showLoader, setShowLoader] = useState(true);
	const [showTicketModal, setShowTicketModal] = useState(false);

	const openPopup = () => {

		setIsPopupOpen(true);
	};

	const closePopup = () => {
		setIsPopupOpen(false);
		document.body.classList.remove('modal-content-open');
	};

	const closeModal = () => {
		setShowTicketModal(false);
		document.body.classList.remove('modal-content-open');
	};
	useEffect(() => {

		toast.info(
			<div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
				<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					width="35px" height="35px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
					<g>
						<path fill="#231F20" d="M62.242,47.758l0.014-0.014c-5.847-4.753-12.84-8.137-20.491-9.722C44.374,35.479,46,31.932,46,28
	      c1.657,0,3-1.343,3-3v-2c0-0.886-0.391-1.673-1-2.222V12c0-6.627-5.373-12-12-12h-8c-6.627,0-12,5.373-12,12v8.778
	      c-0.609,0.549-1,1.336-1,2.222v2c0,1.657,1.343,3,3,3c0,3.932,1.626,7.479,4.236,10.022c-7.652,1.586-14.646,4.969-20.492,9.722
	      l0.014,0.014C0.672,48.844,0,50.344,0,52v8c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4v-8C64,50.344,63.328,48.844,62.242,47.758z
	       M20,28v-1c0-0.553-0.447-1-1-1h-1c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1h1c0.553,0,1-0.447,1-1v-1v-1c0-2.209,1.791-4,4-4
	      c2.088,0,3.926-1.068,5-2.687C30.074,13.932,31.912,15,34,15h6c2.209,0,4,1.791,4,4v1v1c0,0.553,0.447,1,1,1h1c0.553,0,1,0.447,1,1
	      v2c0,0.553-0.447,1-1,1h-1c-0.553,0-1,0.447-1,1v1c0,6.627-5.373,12-12,12S20,34.627,20,28z M24.285,39.678
	      C26.498,41.143,29.147,42,32,42s5.502-0.857,7.715-2.322c1.66,0.281,3.297,0.63,4.892,1.084C41.355,43.983,36.911,46,31.973,46
	      c-4.932,0-9.371-2.011-12.621-5.226C20.96,40.315,22.61,39.961,24.285,39.678z" />
						<path fill="#231F20" d="M24.537,21.862c0.475,0.255,1.073,0.068,1.345-0.396C25.91,21.419,26.18,21,26.998,21
	      c0.808,0,1.096,0.436,1.111,0.458C28.287,21.803,28.637,22,28.999,22c0.154,0,0.311-0.035,0.457-0.111
	      c0.491-0.253,0.684-0.856,0.431-1.347C29.592,19.969,28.651,19,26.998,19c-1.691,0-2.618,0.983-2.9,1.564
	      C23.864,21.047,24.063,21.609,24.537,21.862z" />
						<path fill="#231F20" d="M34.539,21.862c0.475,0.255,1.073,0.068,1.345-0.396C35.912,21.419,36.182,21,37,21
	      c0.808,0,1.096,0.436,1.111,0.458C38.289,21.803,38.639,22,39.001,22c0.154,0,0.311-0.035,0.457-0.111
	      c0.491-0.253,0.684-0.856,0.431-1.347C39.594,19.969,38.653,19,37,19c-1.691,0-2.618,0.983-2.9,1.564
	      C33.866,21.047,34.065,21.609,34.539,21.862z" />
					</g>
				</svg>
				<p>
					Bought 2 tickets from
					<img src={USAImg} width={20} alt='flag' style={{ marginRight: '5px', marginLeft: '5px' }} />
					for this event.
					<br />
					10 minutes ago.
				</p>
			</div>,
			{
				position: "top-center", // Use "top-center" directly as a string
				autoClose: 700, // Close after 7 seconds
				hideProgressBar: true,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
			}
		);
	}, []);

	const [selectedOption, setSelectedOption] = useState('all'); // State to keep track of the selected option

	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value); // Update the state with the value of the selected radio button
	};

	console.log('selected option:', selectedOption)

	useEffect(() => {
		const loaderTimeout = setTimeout(() => {
		  setShowLoader(false);
		  setShowTicketModal(true);
		}, 3000);
	
		return () => clearTimeout(loaderTimeout);
	  }, []);
	  











    const smoothScrollToSection = (id, duration) => {
        const element = document.getElementById(id);
        if (!element) return;

        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scrollProgress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutQuad(scrollProgress);
            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        requestAnimationFrame(animation);
    };


	return (
		<>

			<div className='ticket-page-loader'>
				{showLoader && <TicketLoader />}
				
				</div>
				{showTicketModal && <TicketModal />}
			<div className={`ticket-page-content ${showLoader ? 'hidden' : ''}`}>
				{isPopupOpen && (
					<div className="popup ticket_booking_popup">
						<div className="text-right"> <span className="close ticket_popup_close" onClick={closePopup}>&times;</span></div>
						<div className="popup-content">

							<h4 className="border-bottom pb-2">Ticket Quantity</h4>
							<p className="fw-bold">Please confirm how much ticket you would like to purchase</p>
							<form className="filters-form">
								<p className="mb-1">Select number of tickets</p>
								<select>
									<option>Select Number of Tickets</option>
									<option>1 Tickets</option>
									<option>2 Tickets</option>
									<option>3 Tickets</option>
									<option>4 Tickets</option>
									<option>5 Tickets</option>
									<option>6 Tickets</option>
									<option>7 Tickets</option>
								</select>
								<button className="ticket_popup_btn">Submit</button>
							</form>
						</div>
					</div>
				)}
				<Slider />
				<Banner bannerHeading="India Vs Pakistan - T20 World Cup 2024" bannerText="New York Cricket Ground" className='ticket-banner' />
				<div className="login-page">
					<ToastContainer />
					<div className="contact-cols login-cols">
						<div className="container">
							<div className="filters-holder">
								<div className='filter-holder-inner'>
									<Link to='/'>Home</Link>
									<strong>Last Chance Ticket</strong>
									<div className="trust-pilot desktop">
										<p style={{ fontWeight: 'bold' }}>Trust Pilot Score 4.7</p>
										<div className="img-wrapper">
											<div className="img-boxes">
												<div className="img-box">
													<div className="backLan image-container">
														<div className="star">
															<img src={TrustImg} alt="img" width={25} height={11} className='st-img' />
														</div>
														<div className="star">
															<img src={TrustImg} alt="img" width={25} height={11} className='st-img' />
														</div>
														<div className="star">
															<img src={TrustImg} alt="img" width={25} height={11} className='st-img' />
														</div>
														<div className="star">
															<img src={TrustImg} alt="img" width={25} height={11} className='st-img' />
														</div>
														<div className="star">
															<img src={HTrustImg} alt="img" width={25} height={11} className='st-img st-half' />
														</div>
													</div>




													<div className="star">
														<span style={{ fontWeight: 'bold' }}>Excellent</span>
													</div>
												</div>
											</div>
											{/* <span>Excellent</span> */}
										</div>
									</div>
								</div>
								<div className="seat-ico flex v-center">
									<img src={seatIcon} alt="#" />
									<span>Select number of tickets and you will be seated together.</span>
								</div>
								<div className="counters flex">
									<button type="button" className="active" onClick={() => smoothScrollToSection('targetedSection', 2000)}>1</button>
									<button type="button" onClick={() => smoothScrollToSection('targetedSection', 2000)}>2</button>
									<button type="button" onClick={() => smoothScrollToSection('targetedSection', 2000)}>3</button>
									<button type="button" onClick={() => smoothScrollToSection('targetedSection', 2000)}>4</button>
									<button type="button" onClick={() => smoothScrollToSection('targetedSection', 2000)}>5+</button>
								</div>
								<form className="filters-form">
									<div className="selects flex v-center">
										<select>
											<option>Fill By Ticket Type</option>
											<option>All Tickets</option>
											<option>Paper Ticket</option>
											<option>E-Ticket</option>
											<option>Mobile Ticket</option>
										</select>
										<select>
											<option>Filter by Restrictions</option>
											<option>Age Limit 14+</option>
											<option>Age Limit 21+</option>
											<option>No Restrictions</option>
											<option>All Tickets</option>
										</select>
										<select>
											<option>No. of Tickets in Listing</option>
											<option>All Tickets</option>
										</select>
										<select className='mobile'>
											<option>Sort by</option>
											<option>Low to Heigh</option>
											<option>High to Low</option>
											<option>Price High to Low</option>
											<option>Best Value</option>
											<option>Newest</option>
										</select>
									</div>
									<div className="sort-row flex v-center desktop">
										<strong>Sort by:</strong>
										<div className="radios">
											<label htmlFor="all" className={selectedOption === 'all' ? 'checked' : ''}>
												<input
													type="radio"
													id="all"
													name="group1"
													value="all"
													checked={selectedOption === 'all'}
													onChange={handleOptionChange}
												/> ALL
											</label>
											<label htmlFor="low-to-high" className={selectedOption === 'low-to-high' ? 'checked' : ''}>
												<input
													type="radio"
													id="low-to-high"
													name="group1"
													value="low-to-high"
													checked={selectedOption === 'low-to-high'}
													onChange={handleOptionChange}
												/> PRICE: Low to High
											</label>
											<label htmlFor="high-to-low" className={selectedOption === 'high-to-low' ? 'checked' : ''}>
												<input
													type="radio"
													id="high-to-low"
													name="group1"
													value="high-to-low"
													checked={selectedOption === 'high-to-low'}
													onChange={handleOptionChange}
												/> PRICE High to Low
											</label>
											<label htmlFor="best-value" className={selectedOption === 'best-value' ? 'checked' : ''}>
												<input
													type="radio"
													id="best-value"
													name="group1"
													value="best-value"
													checked={selectedOption === 'best-value'}
													onChange={handleOptionChange}
												/> Best Value
											</label>
											<label htmlFor="newest" className={selectedOption === 'newest' ? 'checked' : ''}>
												<input
													type="radio"
													id="newest"
													name="group1"
													value="newest"
													checked={selectedOption === 'newest'}
													onChange={handleOptionChange}
												/> Newest
											</label>
										</div>
									</div>

								</form>
							</div>

							<div className="view-area">
								<header className="header desktop">
									<h2>Categories:</h2>
									<div className="colors flex v-center">
										<div className="color ">
											<div className="dot"></div>
											<span>Golden Circle - GC</span>
										</div>
										<div className="color">
											<div className="dot yellow"></div>
											<span>Upper Bowl</span>
										</div>
									</div>
								</header>
								<div id="content" className="flex page-wrapper-tickets">
									<aside id="sidebar">
										<div className="map-holder">
											<img src={map} alt="#" />
											<div className="views">
												100
											</div>
										</div>
										<div className="widget desktop" id="bottomOfPage">
											<strong>Filter By Category</strong>
											<select>
												<option>SEARCH BY CATEGORY</option>
												<option>All Tickets</option>
												<option>Golden Circle - GC</option>
												<option>Upper Bowl</option>
											</select>
										</div>
										<div className='categories-ticket-wrapper-outer mobile'>
											<h2>Categories: </h2>
											<div className='categories-ticket-wrapper'>
												<div className='categories-ticket-box'>
													<span style={{background:'blue'}}></span>
													<p>B3</p>
												</div>
												<div className='categories-ticket-box mobile'>
													<span></span>
													<p>Gernal Admission</p>
												</div>
												<div className='categories-ticket-box'>
													<span style={{background:'yellow'}}></span>
													<p>Gloden Cirlce</p>
												</div>
											</div>
										</div>
									</aside>
									<div className='eticket-outer-wrapper' id="targetedSection">

									<ETicket />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{showTicketModal && <TicketModal isOpen={true} closeModal={closeModal} />}


		</>
	)
}
