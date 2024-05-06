import React from 'react';
import Banner from '../../components/banner/Banner';
import Slider from '../../components/slider/Slider';
import '../../styles/orderDetail/style.css';
import logos from '../../assets/images/logoMain.webp';
import Guard from '../../assets/images/guard.jpeg';
import { Link } from 'react-router-dom';
import LogoMain from '../../assets/images/LCT-LOGO.png'

export default function OrderDetail() {
    return (
        <>
            <Slider />
            {/* <Banner  bannerHeading="Order Detail" bannerText="New York Cricket Ground"/> */}
            <section className='order-detail-wrapper-outer'>
                <div className='order-detail-wrapper'>
                <div className='heading-detail'>
                    <h2>Your Order Details</h2>
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
                                <strong>EVENT</strong>
                                <span>India Vs Pakistan - T20 World Cup 2024</span>
                            </li>
                            <li>
                                <strong>EVENT TIME </strong>
                                <span>09:30</span>
                            </li>
                            <li>
                                <strong>DATE</strong>
                                <span>09-06-24</span>
                            </li>
                            <li>
                                <strong>VENUE</strong>
                                <span>New York Cricket Ground</span>
                            </li>
                            <li>
                                <strong>CATEGORY</strong>
                                <span>Premium</span>
                            </li>
                        </ul>
                    </div>

                    <div className='right-fragment'>
                        <ul>
                            <li>
                                <strong>SECTION</strong>
                                <span>India Vs Pakistan - T20 World Cup 2024</span>
                            </li>
                            <li>
                                <strong>ROW </strong>
                                <span>09:30</span>
                            </li>
                            <li>
                                <strong>SEATING AREA </strong>
                                <span>09-06-24</span>
                            </li>
                            <li>
                                <strong>TICKET</strong>
                                <span>New York Cricket Ground</span>
                            </li>
                            <li>
                                <strong>AVAILABLE TICKETS </strong>
                                <span>4</span>
                            </li>

                        </ul>
                    </div>
                    <h4>Total Price 500$</h4>

                </div>
                <div className='ticket-details'>
                    <h2>About Your Tickets</h2>
                    <ul>
                        <li><strong>Ticket Type : </strong>Mobile Ticket</li>
                        <li>
                           <strong>Restriction : </strong> No Restriction
                        </li>
                        <li>
                            <div>
                            <strong> BENEFITS :  </strong>
                        <img src={Guard} width={50} title='gurard'/>
                         Tickets 100% guaranted
                         </div>
                         </li>
                       <li><strong>Customer Support : </strong>24/7 </li>
                        {/* <li>Age Limit 21+</li> */}

                    </ul>
                    {/* <p>Great! You are logged in successfully. Please proceed to checkout.</p> */}
               <p>You will get an email with instructions on how to download your tickets to your phone.</p>
                </div>
                <Link to='/Checkout'>Proceed to checkout</Link>
                </div>
            </section>
        </>
    )
}
