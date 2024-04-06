import React,{useState} from 'react';
import '../../styles/tickets/style.css';
import seatIcon from "../../assets/images/seated.webp";
import map from "../../assets/images/map.webp";
import ticket from "../../assets/images/ticketIcon.webp";
import Banner from '../../components/banner/Banner';
import Slider from '../../components/slider/Slider';
import ETicket from '../../components/ticket/ETicket';
// import TicketDetail from '../../components/ticketDetail/TicketDetail';

export default function Ticket() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {

      setIsPopupOpen(true);
  };

  const closePopup = () => {
      setIsPopupOpen(false);
  };
  return (
    <>

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
            <Slider/>
            <Banner/>
              <div className="login-page">
                  <div className="contact-cols login-cols">
                        <div className="container">
                            <div className="filters-holder">
                                <strong>Last Chance Ticket</strong>
                                <div className="seat-ico flex v-center">
                                    <img src={seatIcon} alt="#" />
                                    <span>Select number of tickets and you will be seated together.</span>
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
                                    </div>
                                    <div className="sort-row flex v-center">
                                        <strong>Sort By:</strong>
                                        <div className="radios">
                                            <label htmlFor="all">ALL</label>
                                            <input type="radio" id="all" name="group1" selected />
                                            <label htmlFor="low-to-high">PRICE: Low to High</label>
                                            <input type="radio" id="low-to-high" name="group1" />
                                            <label htmlFor="high-to-low">PRICE High to Low</label>
                                            <input type="radio" id="high-to-low" name="group1" />
                                            <label htmlFor="best-value">Best Value</label>
                                            <input type="radio" id="best-value" name="group1" />
                                            <label htmlFor="newest">Newest</label>
                                            <input type="radio" id="newest" name="group1" />
                                        </div>
                                    </div>
                                    <div className="counters flex">
                                        <button type="button" className="active">1</button>
                                        <button type="button">2</button>
                                        <button type="button">3</button>
                                        <button type="button">4</button>
                                        <button type="button">5+</button>
                                    </div>
                                </form>
                            </div>

                            <div className="view-area">
                                <header className="header">
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
                                <div id="content" className="flex">
                                    <aside id="sidebar">
                                        <div className="map-holder">
                                            <img src={map} alt="#" />
                                            <div className="views">
                                                100
                                            </div>
                                        </div>
                                        <div className="widget">
                                            <strong>Filter By Category</strong>
                                            <select>
                                                <option>SEARCH BY CATEGORY</option>
                                                <option>All Tickets</option>
                                                <option>Golden Circle - GC</option>
                                                <option>Upper Bowl</option>
                                            </select>
                                        </div>
                                    </aside>
                                <ETicket/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    </>
  )
}
