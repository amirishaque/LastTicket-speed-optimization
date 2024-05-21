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
import 'bootstrap/dist/css/bootstrap.min.css';
import TickIcon from '../../assets/images/tickIcon.png';
import PhoneIcon from '../../assets/images/phoneIcon.png';
import PhoneCall from '../../assets/images/phoneCall.png'


export default function OrderDetail() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <div style={{ background: '#f2f2f2' }}>
                <div className="container py-5 ">

                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 mb-3">
                            <div className="card card-stepper" style={{ borderRadius: '10px' }}>
                                <div className="card-body p-4">

                                    <div className="d-flex justify-content-between align-items-center main-tcp">
                                        <div className="d-flex flex-column wrpr">


                                            <span className="lead fw-normal">Your Order Details</span>
                                            <span className="text-muted small">by LAST CHANCE TICKET</span>
                                        </div>
                                        <div>

                                            <h3 className='lct-head'>LAST CHANCE TICKET</h3>
                                        </div>
                                    </div>
                                    <hr className="my-4" />

                                    <div className="d-flex flex-row justify-content-between align-items-center align-content-center dots-wrapperi">
                                        <span className="dot"></span>
                                        <hr className="flex-fill track-line" /><span className="dot"></span>
                                        <hr className="flex-fill track-line" /><span className="dot"></span>
                                        <hr className="flex-fill track-line" /><span className="dot"></span>
                                        <hr className="flex-fill track-line" /><span className="d-flex justify-content-center align-items-center big-dot dot">
                                            <svg className='tickk' fill="#fff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 490 490" xml:space="preserve">
                                                <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="row d-flex flex-row justify-content-between align-items-center aligs">

                                        <div className="col-md-2 d-flex flex-column align-items-start"><span className='mb-version'><b>EVENT : </b>
                                            <br />India Vs Pakistan - T20 World Cup 2024</span></div>
                                        <div className="col-md-2 d-flex flex-column "><span className='mb-version'><b>EVENT TIME
                                            :</b><br />09:30 AM</span></div>
                                        <div className="col-md-2 d-flex  flex-column  "><span className='mb-version'><b>DATE :
                                        </b><br />Thursday, 23rd August 2023</span></div>
                                        <div className="col-md-2 d-flex flex-column "><span className='mb-version'><b>VENUE :
                                        </b><br />Trinidad and Tobago Cricket Ground</span></div>
                                        <div className="col-md-2 d-flex flex-column "><span className='mb-version'><b>CATEGORY : </b><br />
                                            Standard</span></div>

                                    </div><br className='sert' />
                                    <div className="row d-flex flex-row justify-content-between align-items-center">
                                        <div className="col-md-2  d-flex flex-column ">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <span className='mb-version'><b>SECTION :</b>
                                                        <br />Standard
                                                    </span></div>
                                                {/* <div className="col-md-6">
                                                <span><b>ROW :</b>
                                                    <br />
                                                </span></div> */}
                                            </div>

                                        </div>
                                        <div className="col-md-2 d-flex flex-column "><span className='mb-version'><b>SEATING AREA
                                            :</b><br />Seated Tickets</span></div>
                                        <div className="col-md-2 d-flex flex-column "><span className='mb-version'><b>TICKET :
                                        </b><br />Mobile Ticket</span></div>
                                        <div className="col-md-2 d-flex flex-column "><span className='mb-version' id="noticket"><b>SELECTED TICKETS :
                                        </b><br />4</span></div>
                                        <div className="col-md-2 d-flex flex-column "><span className='mb-version'><b>Total Ticket Price
                                            :</b><br />$2495.00</span></div>

                                        <input type="hidden" id="pricetotal" value="2495.00" name="price" />

                                    </div>
                                    <form method="get" action="https://www.lastchanceticket.com/ticket/10435/purchase" role="form" className="validation">

                                        <div className="row d-flex flex-row justify-content-between align-items-center" id="v2">
                                        </div>
                                    </form></div>
                            </div>
                        </div>
                        <div className="col-lg-12">

                            <div className="card p-3 shadow-sm br-10 mb-3">
                                <div className="row">
                                    {/* <div className="col-md-4 ">
                                    <div className="confirm d-flex justify-content-between align-items-center " style={{ marginTop: '30px' }}>
                                        <h5 className="fw-700 mb-5">Please confirm how many tickets you would like to purchase
                                        </h5>

                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                        </div>
                                    </div>
                                    <div className="number-of-tickets mb-5">
                                        <h6>Select The Number Of Tickets</h6>

                                        <select className="form-select " id="ticket" name="quantity" required="">
                                            <option selected="" disabled="">Select Number of Tickets</option>
                                            <option value="1">1 Tickets</option>
                                            <option value="2">2 Tickets</option>
                                            <option value="3">3 Tickets</option>
                                            <option value="4">4 Tickets</option>

                                        </select>
                                    </div>


                                    <div className="mt-2">
                                    </div>
                                </div> */}
                                    <div className="col-md-12">
                                        <div className="card p-3 shadow-sm br-10 mb-5">
                                            <div className="card-header  text-light" style={{ background: '#22b3c1' }}>
                                                <h4 className="fw-700 m-0 text-white">About Your Tickets</h4>
                                            </div>
                                            <div className="card-body">

                                                <div className='ticket-details'>
                                                    {/* <h2>About Your Tickets</h2> */}
                                                    <ul>
                                                        <li><strong>
                                                            <span>
                                                                <img src={PhoneCall} alt='phone call' width={20} height={20} />
                                                            </span>
                                                            Ticket <span className='desktop'>Type</span>:</strong>

                                                            Mobile Ticket | you will be seated togather
                                                        </li>
                                                        {/* <li>
                           <strong>Restriction : </strong> No Restriction
                        </li> */}
                                                        <li>

                                                            <strong>
                                                                <span>
                                                                    <img src={TickIcon} alt='Tick Icon' width={20} height={20} />
                                                                </span>
                                                                Benefits :</strong>

                                                            Tickets 100% guaranteed to be next to it.
                                                            {/* <img src={Guard} width={50} title='gurard'/> */}


                                                        </li>
                                                        <li onClick={openTicketView} style={{ cursor: 'pointer' }}><strong>
                                                            <span >
                                                            <svg
                                                                height="20px"
                                                                width="20px"
                                                                version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                viewBox="0 0 512 512"
                                                                xmlSpace="preserve"
                                                                >
                                                                <path
                                                                    style={{ fill: "#EDEDED" }}
                                                                    d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0
                                                                S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"
                                                                />
                                                                <path
                                                                    style={{ fill: "#55CD6C" }}
                                                                    d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662
                                                                c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234
                                                                c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"
                                                                />
                                                                <path
                                                                    style={{ fill: "#FEFEFE" }}
                                                                    d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297
                                                                c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048
                                                                c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359
                                                                c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248
                                                                c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062
                                                                l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"
                                                                />
                                                                </svg>
                                                                {/* <img src={PhoneIcon} alt='Phone Icon' width={20} height={20} /> */}
                                                            </span>
                                                            Customer Support :</strong>

                                                            24/7
                                                        </li>
                                                        {/* <li>Age Limit 21+</li> */}

                                                    </ul>
                                                    <p>You will get an email with instructions on how to download your tickets to your phone.</p>
                                                    <p className='toast-pr'>Great! you are logged in successfully. Please proceed to checkout.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 ">
                                                <div className="card" style={{ padding: '13px' }}>
                                                    <div className="panel-heading">
                                                        <div className="row text-center">

                                                        </div>
                                                    </div>
                                                    <div className="">

                                                        <button onClick={openModal} className="main-btn btn-hover h_50 w-100 ">Proceed
                                                            to
                                                            Checkout</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LoginGuestModal isOpen={isModalOpen} onClose={closeModal} />
            <TicketViewModal isTicketViewOpen={isTicketViewOpen} onTicketViewClose={closeTicketView} />
        </>
    );
}
