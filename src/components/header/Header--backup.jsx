import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Dropdown from "../../home/dropdown/DropDown";
import LogoMain from "../../../assets/images/logoMain.webp";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const closeMenu = (event) => {
    if (isActive && !event.target.closest(".nav-container") && !event.target.closest(".header-right")) {
      setIsActive(false);
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
      <header id="header">
        <div className="header-wrapper">
          <Link to="/" className="logo mb-1">
            <img src={LogoMain} alt="logo" width={231} height={48} />
          </Link>
          <div className={`header-right ${isActive ? "active" : ""}`}>
            <figure>
              <img src={LogoMain} alt="logo" width={231} height={48} />
            </figure>
            <nav id="nav">
              <ul className="list-none flex v-center">
                <li>
                  <Link to="/sell-tickets">Sell Tickets</Link>
                </li>
                <li>
                  <Link to="/request-event">Request Event</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
            <div className="header-right-wrapper">
              <span className="review-more">
                {" "}
                100k+ Social Media Followers{" "}
              </span>
              <Dropdown />
              <ul className="list-none flex ml-auto mr-auto v-center header-ul">
                <li className="login-btn">
                  <Link
                    className="btn-primary text-decoration-none"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
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
