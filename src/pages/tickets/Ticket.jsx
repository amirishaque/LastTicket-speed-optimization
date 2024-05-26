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
import ToastUserMale from '../../assets/images/toastUserF.png';
import ToastUserFMale from '../../assets/images/toastUserM.svg'


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

		setTimeout(() => {
			showInfoToast();
		}, 15000); // 10000 milliseconds = 10 seconds
	};


	const showInfoToast = (userImage, message, imageUrl, timeAgo) => {
		toast.info(
		  <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
			<img src={ToastUserMale} width={20} alt='flag' style={{ marginRight: '5px', marginLeft: '5px' }}/>
			<p> 
			{userImage}
			<img src={message} width={20} alt='flag' style={{ marginRight: '5px', marginLeft: '5px' }} />
				 {timeAgo}. for this event</p>
			
		  </div>,
		  {
			position: 'top-center',
			autoClose: 700000,
			hideProgressBar: true,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
		  }
		);
	  };

	  const toastData = [
		{

		  userImage: ToastUserMale,
		  imageUrl: USAImg,
		  message: 'Bought 2 tickets from',
		  timeAgo: '10 minutes ago',

		},
		{
		  userImage: ToastUserFMale,
		  imageUrl: USAImg,
		  message: 'Sold 1 ticket to',
		  timeAgo: '20 minutes ago',
		},
		{
		  userImage: ToastUserFMale,
		  imageUrl: USAImg,
		  message: 'Reserved 3 tickets for',
		  timeAgo: '15 minutes ago',
		},
	  ];
	  

	  const showRandomToast = () => {
		const randomIndex = Math.floor(Math.random() * toastData.length);
		const { message, imageUrl, timeAgo } = toastData[randomIndex];
		showInfoToast(message, imageUrl, timeAgo);
	  };


	const [selectedOption, setSelectedOption] = useState('all'); // State to keep track of the selected option

	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value); // Update the state with the value of the selected radio button
	};

	useEffect(() => {
		const loaderTimeout = setTimeout(() => {
			setShowLoader(false);
			setShowTicketModal(false);
		}, 4500);
	
		const toastTimeout = setTimeout(() => {
			showRandomToast();
			// Set up another timeout to show setShowTicketModal(true) after 13 seconds
			const modalTimeout = setTimeout(() => {
				setShowTicketModal(true);
				// Set up another timeout to close the modal after 7 seconds
				const closeModalTimeout = setTimeout(() => {
					setShowTicketModal(false);
					document.body.classList.remove('modal-content-open');
				}, 7000); // Close modal after 7 seconds
				return () => clearTimeout(closeModalTimeout); // Cleanup
			}, 40000); // Show setShowTicketModal(true) after 30 seconds
			return () => clearTimeout(modalTimeout); // Cleanup
		}, 10000); // Show toast after 10 seconds
	
		return () => {
			clearTimeout(loaderTimeout);
			clearTimeout(toastTimeout);
		};
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


	useEffect(() => {
		if (showLoader) {
			document.body.classList.add('modal-content-open');
		} else {
			document.body.classList.remove('modal-content-open');
		}
	}, [showLoader]);





	const [viewerCount, setViewerCount] = useState(0);

	useEffect(() => {
	  // Simulate fetching new viewer count data
	  const fetchViewerCount = () => {
		// This is just a placeholder function, replace it with your actual logic to fetch viewer count
		const newViewerCount = Math.floor(Math.random() * 1000); // Example: generate a random number between 0 and 1000
		setViewerCount(newViewerCount);
	  };
  
	  // Fetch viewer count initially
	  fetchViewerCount();
  
	  // Schedule fetching viewer count every 10 seconds (adjust this interval as needed)
	  const interval = setInterval(fetchViewerCount, 10000);
  
	  // Clean up interval to prevent memory leaks
	  return () => clearInterval(interval);
	}, []);


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
						<div className="containerr">
							<div className="filters-holder">
								<div className='filter-holder-inner'>
									<Link to='/'>
										<svg fill="#22b3c1" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
											width="30px" height="30px" viewBox="0 0 495.398 495.398"
											xml:space="preserve">
											<g>
												<g>
													<g>
														<path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
														<path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
													</g>
												</g>
											</g>
										</svg>

									</Link>
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
															{/* <img src={TrustImg} alt="img" width={25} height={11} className='st-img' /> */}
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
									<img src='https://lastchanceticket.com/public/assets/images/seated.png' alt="#" width={55} />
									<span>Select number of tickets and you will be seated together</span>
								</div>
								<div className="counters flex">
									<button type="button" onClick={() => smoothScrollToSection('targetedSection', 500)}>1</button>
									<button type="button" onClick={() => smoothScrollToSection('targetedSection', 500)}>2</button>
									<button type="button" onClick={() => smoothScrollToSection('targetedSection', 500)}>3</button>
									<button type="button" onClick={() => smoothScrollToSection('targetedSection', 500)}>4</button>
									<button type="button" onClick={() => smoothScrollToSection('targetedSection', 500)}>5+</button>
								</div>
								<form className="filters-form">
									<div className="selects flex v-center">
										<select className='desktop'>
											<option>Filter By Ticket Type</option>
											<option>All Tickets</option>
											<option>Paper Ticket</option>
											<option>E-Ticket</option>
											<option>Mobile Ticket</option>
										</select>
										<select className='desktop'>
											<option>Filter by Restrictions</option>
											<option>Age Limit 14+</option>
											<option>Age Limit 21+</option>
											<option>No Restrictions</option>
											<option>All Tickets</option>
										</select>
										<select className='desktop'>
											<option>No. of Tickets in Listing</option>
											<option>All Tickets</option>
										</select>
										{/* <select className='mobile'>
											<option>Sort by</option>
											<option>Low to High</option>
											<option>High to Low</option>
											<option>Best Value</option>
											<option>Newest</option>
										</select> */}
									</div>
									<div className="sort-row flex v-center sort-by-tickets">
										{/* <strong>Sort by:</strong> */}
										<div className="radios">
										<strong>Sort by:</strong>
											<label htmlFor="all" className={selectedOption === 'all' ? 'checked' : ''}>
												<input
													type="radio"
													id="all"
													name="group1"
													value="all"
													checked={selectedOption === 'all'}
													onChange={handleOptionChange}
												/> All
											</label>
											<label htmlFor="low-to-high" className={selectedOption === 'low-to-high' ? 'checked' : ''}>
												<input
													type="radio"
													id="low-to-high"
													name="group1"
													value="low-to-high"
													checked={selectedOption === 'low-to-high'}
													onChange={handleOptionChange}
												/> Price: Low to High
											</label>
											{/* <label htmlFor="high-to-low" className={selectedOption === 'high-to-low' ? 'checked' : ''}>
												<input
													type="radio"
													id="high-to-low"
													name="group1"
													value="high-to-low"
													checked={selectedOption === 'high-to-low'}
													onChange={handleOptionChange}
												/> PRICE High to Low
											</label> */}
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
											<label htmlFor="newest"  className={`${selectedOption === 'newest' ? 'checked' : ''} desktop`}>
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
								<div className='categories-ticket-wrapper-outer mobile'>
											<h2 id="targetedSection">Categories: </h2>
											<div className='categories-ticket-wrapper'>
												<div className='categories-ticket-box'>
													<span style={{ background: 'blue' }}></span>
													<p>B3</p>
												</div>
												<div className='categories-ticket-box mobile'>
													<span></span>
													<p>Gernal Admission</p>
												</div>
												<div className='categories-ticket-box'>
													<span style={{ background: 'yellow' }}></span>
													<p>Gloden Cirlce</p>
												</div>
											</div>
										</div>
								<div id="content" className="flex page-wrapper-tickets">
								<div id="sidebarz">
									<div className="widget mobile" style={{background:'#fff'}}>
												<strong>Filter By Category</strong>
												<select>
													<option>SEARCH BY CATEGORY</option>
													<option>All Tickets</option>
													<option>Golden Circle - GC</option>
													<option>Upper Bowl</option>
												</select>
											</div>
								</div>
									<aside id="sidebar">
										<div className="map-holder">
											<img src={map} alt="#" />
											<div className="views">
												100
											</div>
										</div>
										<div class="views-count-wrapper">
										<svg style={{marginRight:'10px'}} fill="#0DCCD7" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 511.999 511.999" xml:space="preserve">
<g>
	<g>
		<path d="M509.361,249.401c-0.771-1.927-19.335-47.719-59.326-93.862C396.198,93.42,329.101,60.585,255.999,60.585
			S115.802,93.42,61.964,155.54c-39.99,46.143-58.555,91.935-59.326,93.862L0,255.999l2.639,6.598
			c0.771,1.927,19.335,47.719,59.326,93.862c53.837,62.119,120.933,94.955,194.035,94.955s140.198-32.836,194.035-94.955
			c39.99-46.143,58.555-91.935,59.326-93.862l2.639-6.598L509.361,249.401z M255.999,380.354
			c-68.569,0-124.355-55.786-124.355-124.355s55.786-124.355,124.355-124.355s124.355,55.786,124.355,124.355
			S324.569,380.354,255.999,380.354z"/>
	</g>
</g>
<g>
	<g>
		<path d="M255.999,167.174c-48.978,0-88.825,39.847-88.825,88.825c0,48.978,39.847,88.825,88.825,88.825
			c48.978,0,88.825-39.847,88.825-88.825S304.977,167.174,255.999,167.174z M255.999,238.234c-9.796,0-17.765,7.969-17.765,17.765
			h-35.53c0-29.387,23.908-53.295,53.295-53.295V238.234z"/>
	</g>
</g>
</svg>
												{/* <i className="fa-solid fa-eye" style={{color: '#22b3c1', fontSize: '18px'}}></i> */}
												<span id="viewerCount" style={{ fontWeight: 'bold' }}>
      {viewerCount} viewers
    </span> looking Now
										</div>
										<div className="widget desktop" id="bottomOfPage" style={{background:'#fff'}}>
											<strong>Filter By Category</strong>
											<select>
												<option>SEARCH BY CATEGORY</option>
												<option>All Tickets</option>
												<option>Golden Circle - GC</option>
												<option>Upper Bowl</option>
											</select>
										</div>
							
									</aside>
									<div className='eticket-outer-wrapper containerz'>

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
