import GuaranteeImage from "../../assets/images/ArtsDot-Footer-Payment-Guaranteed.webp";
import "../../styles/footer/footer.css";
import ApplyPay from '../../assets/images/applepay.svg';
import GooglePay from '../../assets/images/googlepay.svg';
import SamsungPay from '../../assets/images/samsungpay.svg';
// import PayPal from '../../assets/images/paypal.svg';
import VisaCard from '../../assets/images/visacard.svg';
import MasterCard from '../../assets/images/mastercard.svg'

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-wrapper-inner">
          <div className="about">
            <figure>
              <img
                src={GuaranteeImage}
                alt="Guarantee Image"
                width={75}
                height={58}
              />
            </figure>
            <p>
              <span>Our Warranty </span>If you are not 100% satisfied we will
              refund you 100% of your order.
            </p>
            <ul className="payments-methods">
              <li>
                <img src={ApplyPay} alt="icon" width={25} height={30} title="Apple Payment" />
              </li>
              <li className="no-padding">
                <img src={GooglePay} alt="icon" width={25} height={30} title="Google Payment" />
              </li>
              <li className="no-padding">
                <img src={SamsungPay} alt="icon" width={25} height={25} title="Samsung Payment" style={{height:'25px'}}/>
              </li>
              {/* <li>
                <img src={PayPal} alt="icon" width={25} height={25} title="PayPal" style={{height:'25px'}}/>
              </li> */}
              <li className="no-padding">
                <img src={VisaCard} alt="icon" width={25} height={30} title="Visa Card Paymeny" />
              </li>
              <li className="no-padding">
                <img src={MasterCard} alt="icon" width={25} height={30} title="Master Card Payment" />
              </li>

            </ul>
            {/* <ul>
              <li>
                <a href="#">
                  <img src={PaymentImage} alt="icons" width={36} height={22} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={PaymentImages} alt="icons" width={36} height={22} />
                </a>
              </li>
            </ul> */}
          </div>
          <div className="detail">
            <h2>HOT TICKETS
            </h2>
            <ul>
              <li>
                India Vs Pakistan - T20 World Cup 2024

              </li>
              <li>
                Semi Final 1 - T20 Cricket World Cup
              </li>
              <li>
                Semi Final 2 - T20 Cricket World Cup

              </li>
              <li>Final - T20 Cricket World Cup
              </li>
            </ul>
          </div>
          <div className="detail">
            <h2>POPULAR EVENTS</h2>
            <ul>
              <li>
                Concert
              </li>
              <li>
                Formula 1
              </li>
              <li>
                UFC
              </li>
            </ul>
          </div>
       
          <div className="detail">
            <h2>COMPANY INFO</h2>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              {/* <li>Contect</li> */}
              {/* <li>Information</li> */}
            </ul>
          </div>
          <div className="detail">
            <h2>SAFE AND SECURE</h2>
            <ul>
              <li>Buy 100% safe and secure</li>
              <li>Best Customer service before and after Purchase.</li>
              <li>100% Secure Payment System</li>
              {/* <li>Testimonials</li> */}
            </ul>
          </div>
    
        </div>
        <div className="footer-bottom">
          <div className="detail-footer">
            <span>Copyright © 2025 LastChanceTicket - All rights reserved</span>
          </div>
          <div className="social-links">
            <ul>
              <li>
              <svg width="25px" height="25px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="#3B5998" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z" fill="white" />
                  </svg>
              </li>
              <li>
                  {/* For Insta Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 102 102" id="instagram"><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"></stop><stop offset=".78" stop-color="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop><stop offset="1" stop-color="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path></svg>
                  {/* For Insta Icon */}
              </li>
              <li>
                 {/* For X Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="none" viewBox="0 0 512 512" id="twitter"><g clip-path="url(#clip0_84_15697)"><rect width="512" height="512" fill="#000" rx="60"></rect><path fill="#fff" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15697"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>
                  {/* For X Icon */}
              </li>

            </ul>
          </div>
        </div>
        <button className="whatsApp">

        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="wa-messenger-svg-whatsapp wh-svg-icon"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg>

        </button>



      </footer>
      
    </>
  );
};

export default Footer;



               
               