import GuaranteeImage from "../../assets/images/ArtsDot-Footer-Payment-Guaranteed.webp";
import "../../styles/footer/footer.css";
import ApplyPay from '../../assets/images/applepay.svg';
import GooglePay from '../../assets/images/googlepay.svg';
import SamsungPay from '../../assets/images/samsungpay.svg';
import PayPal from '../../assets/images/paypal.svg';
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
              <li>
                <img src={GooglePay} alt="icon" width={25} height={30} title="Google Payment" />
              </li>
              <li>
                <img src={SamsungPay} alt="icon" width={25} height={25} title="Samsung Payment" style={{height:'25px'}}/>
              </li>
              <li>
                <img src={PayPal} alt="icon" width={25} height={25} title="PayPal" style={{height:'25px'}}/>
              </li>
              <li>
                <img src={VisaCard} alt="icon" width={25} height={30} title="Visa Card Paymeny" />
              </li>
              <li>
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
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.5 14.95C18.55 14.8 19.4 14 19.6 12.95C19.8 11.8 20 10.1 20.05 8C20.05 5.9 19.8 4.2 19.6 3.05C19.4 2 18.55 1.2 17.5 1.05C15.8 0.8 13.1 0.5 10 0.5C6.9 0.5 4.15 0.8 2.5 1.05C1.45 1.2 0.6 2 0.4 3.05C0.2 4.2 0 5.9 0 8C0 10.1 0.2 11.8 0.4 12.95C0.6 14 1.45 14.8 2.5 14.95C4.2 15.2 6.95 15.5 10 15.5C13.1 15.5 15.85 15.2 17.5 14.95ZM14 8L8 4.5V11.5L14 8Z"
                    fill="#F6F9FD"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 0H4C1.791 0 0 1.791 0 4V14C0 16.209 1.791 18 4 18H9.621V11.039H7.278V8.314H9.621V6.309C9.621 3.985 11.042 2.718 13.116 2.718C13.815 2.716 14.513 2.752 15.208 2.823V5.253H13.78C12.65 5.253 12.43 5.787 12.43 6.575V8.31H15.13L14.779 11.035H12.414V18H14C16.209 18 18 16.209 18 14V4C18 1.791 16.209 0 14 0Z"
                    fill="#F6F9FD"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0238 2.46624C18.3217 2.77796 17.5691 2.98726 16.7779 3.08226C17.5854 2.59835 18.2059 1.83241 18.4968 0.921006C17.7428 1.3678 16.9041 1.69288 16.015 1.86804C15.3025 1.10804 14.2872 0.634521 13.1635 0.634521C11.0052 0.634521 9.25513 2.38312 9.25513 4.5414C9.25513 4.84718 9.29075 5.14554 9.35755 5.43202C6.10974 5.26874 3.23153 3.71311 1.30333 1.34851C0.966377 1.92741 0.774893 2.59835 0.774893 3.31382C0.774893 4.66905 1.46364 5.86546 2.5131 6.56757C1.87185 6.54679 1.26919 6.37015 0.742236 6.07772C0.742236 6.09405 0.742236 6.11038 0.742236 6.12671C0.742236 8.02077 2.09005 9.59866 3.87575 9.95936C3.54919 10.0484 3.20333 10.0959 2.84708 10.0959C2.59474 10.0959 2.34981 10.0722 2.11083 10.0247C2.60958 11.5758 4.05239 12.7084 5.76091 12.7396C4.42497 13.7876 2.74021 14.411 0.908486 14.411C0.592315 14.411 0.28208 14.3932 -0.0222168 14.3561C1.7056 15.4664 3.75997 16.1121 5.96724 16.1121C13.1546 16.1121 17.0852 10.1583 17.0852 4.99562C17.0852 4.8264 17.0808 4.65569 17.0748 4.48944C17.8378 3.93874 18.4998 3.24999 19.0238 2.46624Z"
                    fill="#F6F9FD"
                  ></path>
                </svg>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.5 18C16.881 18 18 16.881 18 15.5V2.5C18 1.119 16.881 0 15.5 0H2.5C1.1195 0 0 1.119 0 2.5V15.5C0 16.881 1.1195 18 2.5 18H15.5ZM5.5 6.5H3V15H5.5V6.5ZM4.2285 5.5H4.2425C5.0175 5.5 5.5 4.9435 5.5 4.2495C5.486 3.54 5.0175 3 4.257 3C3.4975 3 3 3.54 3 4.2495C3 4.944 3.4825 5.5 4.2285 5.5ZM12.5 15H15L14.9995 10.137C14.9995 7.625 13.658 6.5 11.869 6.5C10.425 6.5 9.8605 7.25 9.5 7.808V6.5H7V15H9.5V10.5C9.5 10.4583 9.49937 10.4096 9.49869 10.3566C9.49539 10.0993 9.49079 9.74164 9.5505 9.5965C9.7475 9.1075 10.1535 8.6015 10.904 8.6015C11.8875 8.6015 12.5 9.3515 12.5 10.4505V15Z"
                      fill="#F6F9FD"
                    ></path>
                  </svg>
                </a>
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
