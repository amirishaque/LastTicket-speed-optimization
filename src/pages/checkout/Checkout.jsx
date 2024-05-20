import React, { useState, useEffect } from 'react';
import '../../styles/checkout/style.css';
import '../../styles/checkout/style-backup.css';
import Strip from '../../assets/images/stripe.svg';
import MasterCard from '../../assets/images/master-card.svg';
import ApplePay from '../../assets/images/apple-pay.svg';
import GooglePay from '../../assets/images/google-pay.svg';
// import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Slider from '../../components/slider/Slider';
import Counter from '../../components/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TypeAnimation } from 'react-type-animation';
// import useTypingAnimation from '../typeAnimation/TypeAnimation';
import useTypingAnimation from '../../components/typeAnimation/TypeAnimation';


export default function Checkout() {

    const initialTime = 5 * 60; // 5 minutes in seconds
    const [timeLeft, setTimeLeft] = useState(initialTime);

    const [shouldShowConfetti, setShouldShowConfetti] = useState(false);
    const [confettiHeight, setConfettiHeight] = useState(window.innerHeight);


    useEffect(() => {
        function handleResize() {
            setConfettiHeight(window.innerHeight);
        }

        function handleScroll() {
            setConfettiHeight(window.innerHeight + window.scrollY);
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // setShouldShowConfetti(true);
        window.scrollTo(0, 0);
        const interval = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft - 1);

        }, 1000); // Update timer every 1000ms (1 second)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures that the effect runs only once

    // Convert total seconds to minutes and remaining seconds
    const minutes = Math.floor(timeLeft / 60);
    const remainingSeconds = timeLeft % 60;

    const handleClickConfetti = () => {
        setShouldShowConfetti(true);
        const timer = setTimeout(() => {
            setShouldShowConfetti(false);
        }, 5000);

        return () => clearTimeout(timer);
    };




    const [animationStyle, setAnimationStyle] = useState({});

    useEffect(() => {
        // Define the animation properties
        const animationProperties = {
            animationName: 'moveText', // Name of the animation defined in CSS
            animationDuration: '5s', // Duration of the animation
            animationTimingFunction: 'linear', // Timing function for animation
            animationIterationCount: 'infinite', // Repeat the animation infinitely
        };

        // Update the state with animation properties
        setAnimationStyle(animationProperties);
    }, []);


    const originalText = 'Congratulations\n An Unforgettable experience is just 1 click away'; // Text for typing animation
    const typingSpeed = 50; // Adjust typing speed as needed

    // Use the custom hook to get the animated text
    const text = useTypingAnimation(originalText, typingSpeed);
    return (
        <>
            {shouldShowConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={confettiHeight} // Dynamic height based on window height + scrollY
                />
            )}
            <Slider />
            <div className='timer-wrapper-outer'>
                <h2>
                    {text}</h2>
                <div className='timer-wrapper'>
                    <div className='left-fragment-counter mobile'>
                        <span>100% safe & secure</span>
                        <span>100% Guaranteed</span>
                        <span>100% Transparent</span>
                    </div>
                    <Counter/>
                    {/* <div className='timer-inner-wrapper'>
                        <span>Buy now before price go up</span>
                        <span>{minutes < 10 ? '0' : ''}{minutes} : {remainingSeconds < 10 ? '0' : ''}{remainingSeconds}</span>
                        <span>Left to complete purchase...!</span>
                    </div> */}
                    <div className='right-fragment-counter mobile'>
                        <span>Trusted platform</span>
                        <span>Peace of min</span>
                        <span>Certified ticketing</span>
                    </div>
                </div>
            </div>
            <div className='container main-content-checkout'>
                <div className="row">


                    <div className="col-lg-4 ">
                        <div className="main-card order-summary">
                            <div className="bp-title">
                                <h4>Order Summary</h4>
                            </div>
                            <div className="order-summary-content p_30">
                                <div className="event-order-dt">
                                    <div className="event-thumbnail-img">
                                        <img src="https://lastchanceticket.com/public/assets/images/t1.webp" className="" alt="img" />
                                    </div>
                                    <div className="event-order-dt-content">
                                        <h5>India Vs Pakistan - T20 World Cup 2024</h5>

                                        <div className=""><b>Date: 09-06-24</b></div>
                                        <div className=""><b>Event Time : 09:30</b></div>
                                        <div className=""><b>Ticket Type : Mobile-Ticket</b></div>
                                    </div>
                                </div>
                                <div className="order-total-block">
                                    <div className="order-total-dt">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="order-text">Venue</div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="order-number">New York Cricket Ground</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-total-dt">
                                        <div className="order-text">Category</div>
                                        <div className="order-number">Premium</div>
                                    </div>
                                    <div className="order-total-dt">
                                        <div className="order-text">Section</div>
                                        <div className="order-number">Premium</div>
                                    </div>
                                    <div className="order-total-dt">
                                        <div className="order-text">Row</div>
                                        <div className="order-number"></div>
                                    </div>
                                    <div className="order-total-dt">
                                        <div className="order-text">Seating Area</div>
                                        <div className="order-number">Seated Tickets</div>
                                    </div>
                                    <div className="order-total-dt">
                                        <div className="order-text">Per-Ticket</div>
                                        <div className="order-number">$2495.00</div>
                                    </div>
                                    <div className="order-total-dt">
                                        <div className="order-text">Total Tickets</div>
                                        <div className="order-number"><small>x</small>1</div>
                                    </div>
                                    <div className="order-total-dt">
                                        <div className="order-text">Total Tickets Price</div>
                                        <div className="order-number">$2495</div>
                                    </div>

                                    <div className="order-total-dt">
                                        <div className="order-text">Shipping and Handling Fee</div>
                                        <div className="order-number">$0.00</div>
                                    </div>
                                    <div className="order-total-dt">
                                        <div className="order-text">Service Charges</div>
                                        <div className="order-number">+ $49.9</div>
                                    </div>
                                    <div className="divider-line"></div>
                                    <div className="order-total-dt">
                                        <div className="order-text" style={{ fontSize: '18px' }}><b>Total</b></div>
                                        <div className="order-number ttl-clr" style={{ fontSize: '18px' }}><b>$2544.9</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 ">
                        <div className="checkout-block">
                            <section className='checkout-page-wrapper'>
                                <div className='left-fragment'>
                                    <div className='box-payment'>
                                        {/* <div className='box-p'>
                            <figure>
                                <img src={payPal} alt='paypal' width={100} height={100}/>
                                </figure> 
                            </div> */}
                                        <div className='box-payment-inner-wrapper'>
                                            <div className='box-payment-inner desktop'>
                                                <div className='qualities-wrapper'>
                                                    <div>100% safe & secure</div>
                                                    <div>100% Guaranteed</div>
                                                    <div>100% Transparent</div>
                                                </div>
                                            </div>
                                            <div className='box-payment-inner secured-payment-wrapper'>
                                                <strong>Secured Payment Gateway</strong>
                                                <div className='box-payment-inner-box'>
                                                    <div className='box-p'>
                                                        <figure>
                                                            <img src={Strip} alt='paypal' width={100} height={100} />
                                                        </figure>
                                                    </div>

                                                    <div className='box-p'>
                                                        <figure>
                                                            <img src={ApplePay} alt='paypal' width={100} height={100} />
                                                        </figure>
                                                    </div>

                                                    <div className='box-p'>
                                                        <figure>
                                                            <img src={GooglePay} alt='paypal' width={100} height={100} />
                                                        </figure>
                                                    </div>

                                                    <div className='box-p'>
                                                        <figure>
                                                            <img className='paypal-checkout' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1024px-PayPal_logo.svg.png' alt='paypal' width={100} />
                                                        </figure>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        {/* <span>Express Checkout</span> */}
                                        {/* <figure>
                    <img src='https://www.lastchanceticket.com/assets/images/Secured%20Payment%20Gateway_LCT_NS.png' alt='images' width={556}/>
                </figure> */}
                                    </div>
                                </div>
                            </section>
                            {/* <div className="row" style={{width:'100%', marginLeft:'1px'}}>
                                <div className="col-md-6 border 1px " style={{marginBottom:'10px', backgroundColor : '#fff'}}>
                                    <div className="card-body">
                                        <div className="">
                                            <h3 className="mb-2 mt-3">100% Safe &amp; Secure </h3>
                                            <h3 className="mb-2">100% Guaranteed </h3>
                                            <h3 className="mb-2">100% Transparent </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 border 1px " style={{marginBottom:'10px', backgroundColor : '#fff'}}>
                                    <div className="card-body">
                                        <div className="">
                                            <h3>Secured Payment Gateway</h3>
                                            <img src="/assets/images/Secured Payment Gateway_LCT_NS.png" width="300px" alt="invalid" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="card" style={{ padding: '13px' }}>
                                        <div className="panel-heading">
                                            <div className="row text-center"></div>
                                        </div>
                                        <div className="card-body">
                                            <div className="">
                                                <p style={{fontWeight:'600'}}>We care about your security, No credit card information is stored on our website. Our site utilizes an internationally certified, encrypted payment gateway.<br /><br /></p>
                                                <h4 className="">Payment Details </h4>
                                                <hr />
                                            </div>
                                            <div className="mt-4 mb-3">
                                                <h4>Total Payable Amount : $2544.9</h4>
                                            </div>
                                            <form method="post" action="https://www.lastchanceticket.com/ticket/5076/10434/64/ProceedToCheckout " role="form" className="validation" data-cc-on-file="false" data-stripe-publishable-key="pk_live_51MgNaXAHwTZuNeMcwffVynctVDmfHs1Td9IveHyH64CvNKDoWEItjvkBVjMQGftxdNWDRqJ58VyffacFmuC2mni300XrkzvPkm" id="payment-form">
                                                <input type="hidden" name="_token" value="6q7GEgfGiGFWKFOsDC5HC76LoSPm8zxDdCdrMPn5" />                                            <input type="hidden" name="ticketid" value="10434" />
                                                <input type="hidden" name="country_id" value="" />
                                                <input type="hidden" name="quantity" value="1" />
                                                <input type="hidden" name="shipingCharges" value="" />
                                                <div className="form-row row">
                                                    <div className="col-xs-12 form-group required p-4">
                                                        <label className="control-label">Name on Card</label> <input className="form-control h_50" style={{ outline: 'thick', size: '4' }} type="text" />
                                                    </div>
                                                </div>
                                                <div className="form-row row">
                                                    <div className="col-xs-12 form-group  required p-4">
                                                        <label className="control-label">Card Number</label> <input autocomplete="off" className="form-control card-num h_50" size="20" type="text" />
                                                    </div>
                                                </div>
                                                <div className="form-row row">
                                                    <div className="col-xs-12 col-md-4 form-group cvc required p-4">
                                                        <label className="control-label">CVC</label>
                                                        <input autocomplete="off" className="form-control card-cvc h_50" placeholder="e.g 415" size="4" type="text" />
                                                    </div>
                                                    <div className="col-xs-12 col-md-4 form-group expiration required p-4">
                                                        <label className="control-label">Expiration Month</label> <input className="form-control card-expiry-month h_50" placeholder="MM" size="2" type="text" />
                                                    </div>
                                                    <div className="col-xs-12 col-md-4 form-group expiration required p-4">
                                                        <label className="control-label">Expiration Year</label> <input className="form-control card-expiry-year h_50" placeholder="YYYY" size="4" type="text" />
                                                    </div>
                                                    <div className="col-lg-12 form-group p-4">
                                                        <label className="m-2 "><input className="" type="checkbox" name="" value="" id="" required="" />&nbsp; I agree with the LCT Terms &amp;
                                                            Conditions</label>
                                                    </div>
                                                </div>
                                                <div className="form-row row">
                                                    <div className="col-md-12 hide error form-group">
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12 mt-4">
                                                        <button type="submit" id="submit_button" className=" main-btn btn-hover h_50 w-100 ">Pay</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
