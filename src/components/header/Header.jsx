import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDown from './DropDown/DropDown';
import LogoMain from '../../assets/images/LCT-LOGO.png';
import './style/style.css'


const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const closeMenu = (event) => {
    const navContainer = document.querySelector(".nav-container");
    const headerRight = document.querySelector(".header-right");
    const navUl = document.querySelector("nav ul li");
  
    if (isActive && 
        !event.target.closest(navContainer) && 
        !event.target.closest(headerRight)) {
      setIsActive(false);
      navUl.classList.remove("active");
    }
  };
  

  useEffect(() => {
    document.body.addEventListener("click", closeMenu);
    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, [isActive]);

  return (
    <>
      <div className="header-placement"></div>
      <header id="header">
        <div className={`header-wrapper ${isActive ? "your-class" : ""}`}>
          <Link to='/' className="">
            <img src={LogoMain} alt="logo" width={231} height={48}  className="main-image"/>
          </Link>
          <div className={`header-right ${isActive ? "active" : ""}`}>
            <figure>
              <Link to='/'>
                <img src={LogoMain} alt="logo" width={231} height={48} style={{width: '-webkit-fill-available'}}/>
              </Link>
            </figure>
            <nav id="nav">
              <ul className="list-none flex v-center">
                <li>
                  <Link to="/SellTicket">Sell Ticket</Link>
                </li>
                <li>
                  <Link to="/RequestEvent">Request Event</Link>
                </li>
                <li>
                  <Link to="/ContactUs">Contact us</Link>
                </li>
              </ul>
            </nav>
            <div className="header-right-wrapper">
              <span className="review-more">
                100k+ Social Media Followers
              </span>
              <DropDown />
              <ul className="list-none flex ml-auto mr-auto v-center header-ul">
                <li className="login-btn">
                  <Link to="/Login" className="btn-primary text-decoration-none">Login</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`mobile ${isActive ? "your-class" : ""}`}>
            {/* Content for mobile */}
          </div>
        </div>
        <div className={`nav-container ${isActive ? "active" : ""}`}>
          <button
            className={`nav-opener ${isActive ? "active" : ""}`}
            onClick={toggleClass}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
