import React, { useState, useEffect } from 'react';
import '../../styles/checkout/style.css'
import Strip from '../../assets/images/stripe.svg';
import MasterCard from '../../assets/images/master-card.svg';
import ApplePay from '../../assets/images/apple-pay.svg';
import GooglePay from '../../assets/images/google-pay.svg';
// import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Slider from '../../components/slider/Slider';
import Counter from '../../components/counter/Counter';


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


    return (
        <>
        {shouldShowConfetti && (
     <Confetti
          width={window.innerWidth}
          height={confettiHeight} // Dynamic height based on window height + scrollY
        />
      )}
      	<Slider />
            <section className='checkout-page-wrapper'>
                <div className='left-fragment'>
                    <h2>Congratulations
                        An Unforgettable experience is just 1 click away</h2>
                    <div className='timer-wrapper'>
                        {/* <Counter/> */}
                        <div className='left-fragment-counter'>
                            <span>100% safe & secure</span>
                            <span>100% Guaranteed</span>
                            <span>100% Transparent</span>
                        </div>
                        <div className='timer-inner-wrapper'>
                            <span>Buy now before price go up</span>
                            <span>{minutes < 10 ? '0' : ''}{minutes} : {remainingSeconds < 10 ? '0' : ''}{remainingSeconds}</span>
                            <span>Left to complete purchase...!</span>
                        </div>
                        <div className='right-fragment-counter'>
                            <span>Trusted platform</span>
                            <span>Peace of min</span>
                            <span>Certified ticketing</span>
                        </div>
                    </div>
                    <div className='box-payment'>
                        {/* <div className='box-p'>
                   <figure>
                    <img src={payPal} alt='paypal' width={100} height={100}/>
                    </figure> 
                </div> */}
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
                        <span>Express Checkout</span>
                        {/* <figure>
                    <img src='https://www.lastchanceticket.com/assets/images/Secured%20Payment%20Gateway_LCT_NS.png' alt='images' width={556}/>
                </figure> */}
                    </div>
                    <div className='or-div'>
                        <span>OR</span>
                    </div>
                    <div className='contact-info'>
                        <div className='detail'>
                            <span>Contact information</span>
                            <span></span>
                        </div>
                        <div className='form-wrapper'>
                            <input placeholder='Name on Card' />
                            <input placeholder='Card Number' />
                            <div className='cvc-wrapper'>
                                <input placeholder='e.g 415' />
                                <input placeholder='Exp Month' />
                                <input placeholder='Exp Year' />

                            </div>
                            <div className='checkbox'>
                                <input type='checkbox' />
                                <label>I agree with the Last Chance Ticket Terms & Conditions</label>
                            </div>
                            <p className='ext-text'>If you are not 100% satisfied, we will refund you 100% of your order.</p>
                            <button onClick={handleClickConfetti}>Buy</button>

                        </div>
                    </div>
                </div>
                <div className='right-fragment'>
                    <h2>Order Summary</h2>
                    <div className='order-detail-b'>
                        <ul>
                            <li>
                                <strong>Venue</strong>
                                <span>New York Cricket Ground</span>
                            </li>
                            <li>
                                <strong>Category</strong>
                                <span>New York Cricket Ground</span>
                            </li>
                            <li>
                                <strong>Section</strong>
                                <span>New York Cricket Ground</span>
                            </li>
                            <li>
                                <strong>Seating Area</strong>
                                <span>New York Cricket Ground</span>
                            </li>
                            <li>
                                <strong>Per-Ticket</strong>
                                <span>New York Cricket Ground</span>
                            </li>
                            <li>
                                <strong>Total Tickets Price</strong>
                                <span>New York Cricket Ground</span>
                            </li>

                            <li>
                                <strong>Shipping and Handling Fee</strong>
                                <span>New York Cricket Ground</span>
                            </li>
                            <li>
                                <strong>Service Charges</strong>
                                <span>New York Cricket Ground</span>
                            </li>
                        </ul>
                        <strong className='total-order-p'>
                            <ul>
                                <li>
                                    <strong>Total</strong>
                                    <strong>$5089.8</strong>
                                </li>
                            </ul>
                        </strong>
                    </div>
                </div>
            </section>
        </>
    )
}
