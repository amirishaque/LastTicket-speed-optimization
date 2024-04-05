import React, { useEffect, useState } from 'react'
import Index from '../../components/home/HeroSection/Index'
import './Ticket.css'
import Loader from "../../components/loader/Loader";
import ticketIcon from '../../assets/images/tickets.png';
import groundIMage from '../../assets/images/banner-1.webp';
import videoClip from '../../assets/images/stadium-clip.mp4';
import seatImage from '../../assets/images/seated.png';

function Ticket() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);
return (
<>
  <Index />
  <section id="search-form" className="search-main-form">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="search-form-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="categories-search">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <button className="nav-link active" id="oneway-tab" type="button"><b>
                              <h5 style={{fontWeight: "600"}}>Last Chance Ticket</h5>
                            </b></button>
                        </li>
                      </ul>

                      <p className="text-dark">
                      </p>
                      <div style={{float: "left"}}>
                        <img className="seats-Logo" 
                        src={seatImage}
                          alt="" />
                      </div>
                      <div className="text-content" style={{fontSize: "11.5px"}}>
                        <b>Select number of tickets and you will</b>
                        <span className="mobile-line-break"> <b> be seated together.</b></span>
                      </div>
                      <p></p>

                    </div>
                  </div>
                </div>
                <div className="tab-content" id="myTabContent1">
                  <div className="tab-pane fade show active" id="oneway_flight">

                    <div className="row">
                      <div className="col-lg-12">
                        <div className="oneway_search_form">
                          <form method="get" id="qty-form">
                            <div className="row">
                              <input type="hidden" className="form-control" id="total-tickets" name="qty" value="" />
                              <div className="col-md-4 restrictionsDropdown">
                                <select className="form-control" name="ticket_type">
                                  <option disabled="" selected="">Filter By Ticket Type
                                  </option>
                                  <option value="">All
                                    Tickets</option>
                                  <option value="Paper-Ticket">Paper Ticket</option>

                                  <option value="E-Ticket">E-Ticket</option>

                                  <option value="Mobile-Ticket">Mobile Ticket</option>
                                </select>
                              </div>
                              <div className="col-md-4 restrictionsDropdown">

                                <div className="form-group">
                                  <select className="form-control" name="Restriction_filter">
                                    <option selected="" disabled="">Filter by
                                      Restrictions</option>

                                    <option value="">No Restrictions </option>

                                    <option value="">No Restrictions</option>

                                    <option value=""> All
                                      Tickets</option>
                                  </select>
                                </div>

                              </div>
                              <div className="col-md-4 restrictionsDropdown">
                                <form method="get" id="qty-form">
                                  <div className="form-group">
                                    <select className="form-control" name="qty">
                                      <option selected="" disabled="">No. of Tickets in
                                        Listing</option>

                                      <option value="">
                                        All
                                        Tickets
                                      </option>
                                    </select>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </form>

                          <div className="row mt-3">
                            <div className="col-md-12">
                              <span style={{fontSize: "15px", marginRight: "20px"}}>Sort By
                                :</span>
                              <a href="#"
                                style={{marginRight: "20px", textDecoration: "none"}}>ALL</a>
                              <a href="#
                                                                    ?sort=price_asc"
                                style={{marginRight: "20px", textDecoration: "none"}}>PRICE
                                : Low to High</a>
                              <a href="#
                                                                    ?sort=price_desc"
                                style={{marginRight: "20px", textDecoration: "none"}}>PRICE
                                : High to Low</a>
                              <a href="#
                                                                    ?sort=best_value"
                                style={{marginRight: "20px", textDecoration: "none"}}>Best
                                Value</a>
                              <a href="#
                                                                    ?sort=newest"
                                style={{marginRight: "20px", textDecoration: "none"}}>Newest</a>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="oneway_search_form">
                                <form method="get" id="qty-form">

                                  <div className="row select-ticket">

                                    <div className="col-sm-2 col-md-3 col-lg-2 mt-3 mt-3">
                                      <div className="cardNew btn_theme btn_md mb-3">
                                        <div className="text-center card-body ticket-num-card cursor-pointer shadow-sm"
                                          data-tickets-val="1">
                                          <h4 className="text-white">1</h4>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-2 col-md-3 col-lg-2 mt-3">
                                      <div className="cardNew btn_theme btn_md mb-3">
                                        <div className="text-center card-body ticket-num-card cursor-pointer shadow-sm"
                                          data-tickets-val="2">
                                          <h4 className="text-white">2</h4>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-2 col-md-3 col-lg-2 mt-3">
                                      <div className="cardNew btn_theme btn_md mb-3">
                                        <div id="button1"
                                          className="text-center card-body ticket-num-card cursor-pointer shadow-sm"
                                          data-tickets-val="3">
                                          <h4 className="text-white">3</h4>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-2 col-md-3 col-lg-2 mt-3">
                                      <div className="cardNew btn_theme btn_md mb-3">
                                        <div className="text-center card-body ticket-num-card cursor-pointer shadow-sm"
                                          data-tickets-val="4">
                                          <h4 className="text-white">4</h4>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-2 col-lg-2">
                                      <div className="col-lg-12 mt-3">
                                        <div className="cardNew btn_theme btn_md mb-3">
                                          <div className="text-center card-body ticket-card  cursor-pointer shadow-sm"
                                            data-tickets-val="5">
                                            <h4 className="text-white">5 +</h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </form>
                              </div>
                            </div>

                            <div className="col-md-12" id="ticket-more-5" style={{display: "none"}}>
                              <form method="get" id="qty-form">
                                <div className="row height d-flex align-items-center">
                                  <div className="col-md-10">
                                    <div className="search">
                                      <input type="text" name="search-no-of-tickets" value="" className="form-control" />
                                      <i className="fa fa-search"></i>
                                      <button type="submit" value="Search" className="btn btn-primary">Search</button>
                                    </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="explore_area" className="">
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-12">
        </div>
      </div>
      <div className="row mb-2 section_padding">

        <div className="col-lg-12">
          <div className="mb-2">
            <span style={{fontSize:"18px"}}><b>Categories : </b>
            </span></div>
          <div className="category-item ">
            <span className="category-circle red"></span>
            <span className="category-text"><b>Standard</b></span>
          </div>

        </div>

      </div>
      <div className="row">
        <div className="col-lg-4">
             <div className="left_side_search_area">
      <div className="card mb-3 shadow-sm br-10">
        <div className="card-body shadow-sm">
          {showVideo ? (
            <video autoPlay controls className="img-fluid">
              <source src={videoClip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={groundIMage} className="img-fluid" alt="" />
          )}
        </div>
    </div>
            <div className="mb-2 text-center">
              <i className="fa-solid fa-eye" style={{color: "#22b3c1", fontSize: "18px"}}></i>
              <span id="viewerCount" style={{fontWeight: "bold"}}>115 viewers</span> looking Now
            </div>
            <div className="card mb-3 shadow-sm br-10">
              <div className="card-body shadow-sm">
                <h5 className="mb-3">Filter By Category</h5>
                <div className="row">
                  <div className="col-md-12">
                    <form method="get" id="qty-form">
                      <div className="form-group">
                        <select className="form-select form-control-lg" name="Cat_filter" onchange="this.form.submit()">
                          <option selected="" disabled="">SEARCH BY CATEGORY</option>
                          <option value=""> All
                            Tickets</option>
                          <option value="Standard">Standard</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">

          <div className="row">
            <div className="flight_search_result_wrapper">
              <div className="flight_search_item_wrappper">
                <div className="search-items border text-dark" style={{borderRadius: "12px", marginBottom: "20px"}}>
                  <div className="multi-city-lists" style={{borderLeft:"7px solid #22b3c1"}}>
                    <div className="multis-area">
                      <div className="search-left">
                        <div className="ticket text-center" style={{width: "50%"}}>
                          <img src={ticketIcon} className="" alt="img" />
                        </div>
                        <div className="flight_right_arrow">
                          <p>Category:</p>
                          <h6>
                            Standard
                          </h6>
                          <p>Section: </p>
                          <h6>Standard</h6>
                        </div>

                      </div>
                      <div className="search-middel">
                        <div className="search-destination">
                          <p>Tickets</p>
                          <h6>No of Tickets 4</h6>
                          <p className="m-0">Restriction</p>
                          <h6>No Restrictions</h6>
                          {/*
                          <!--<h6 className="fw-700 ">[&quot;No Restrictions&quot;]</h6>--> */}

                        </div>
                        <div className="search-destination">
                          <p className="type pt-3">Ticket-Type : </p>
                          <h6 className="type2">Mobile-Ticket</h6>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search-right">

                    <h2><b>$1995.00</b></h2>

                    <a className="btn btn_theme btn_sm mb-2"
                      href="https://www.lastchanceticket.com/ticket/5077/10436/64/checkout?selectedQuantity=">
                      Select Ticket
                    </a>
                    <br />
                    <span className="spen"> </span>
                  </div>
                </div>
                <div className="search-items border text-dark" style={{borderRadius: "12px", marginBottom: "20px"}}>
                  <div className="multi-city-lists" style={{borderLeft: "7px solid #22b3c1"}}>
                    <div className="multis-area">
                      <div className="search-left">
                        <div className="ticket text-center" style={{width: "50%"}}>
                          <img src={ticketIcon} className="" alt="img" />
                        </div>
                        <div className="flight_right_arrow">
                          <p>Category:</p>
                          <h6>
                            Standard
                          </h6>
                          <p>Section: </p>
                          <h6>Standard</h6>
                        </div>

                      </div>
                      <div className="search-middel">
                        <div className="search-destination">
                          <p>Tickets</p>
                          <h6>No of Tickets 10</h6>
                          <p className="m-0">Restriction</p>
                          <h6>No Restrictions</h6>
                          {/*
                          <!--<h6 className="fw-700 ">[&quot;No Restrictions&quot;]</h6>--> */}

                        </div>
                        <div className="search-destination">
                          <p className="type pt-3">Ticket-Type : </p>
                          <h6 className="type2">Mobile-Ticket</h6>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search-right">

                    <h2><b>$2500.00</b></h2>

                    <a className="btn btn_theme btn_sm mb-2"
                      href="#">
                      Select Ticket
                    </a>
                    <br />
                    <span className="spen"> </span>
                  </div>
                </div>
                <div className="search-items border text-dark" style={{borderRadius: "12px", marginBottom: "20px"}}>
                  <div className="multi-city-lists" style={{borderLeft:"7px solid #22b3c1"}}>
                    <div className="multis-area">
                      <div className="search-left">
                        <div className="ticket text-center" style={{width: "50%"}}>
                          <img src={ticketIcon} className="" alt="img" />
                        </div>
                        <div className="flight_right_arrow">
                          <p>Category:</p>
                          <h6>
                            Standard
                          </h6>
                          <p>Section: </p>
                          <h6>Standard</h6>
                        </div>

                      </div>
                      <div className="search-middel">
                        <div className="search-destination">
                          <p>Tickets</p>
                          <h6>No of Tickets 10</h6>
                          <p className="m-0">Restriction</p>
                          <h6>No Restrictions </h6>
                          {/*
                          <!--<h6 className="fw-700 ">[&quot;No Restrictions&quot;,null]</h6>--> */}

                        </div>
                        <div className="search-destination">
                          <p className="type pt-3">Ticket-Type : </p>
                          <h6 className="type2">Mobile-Ticket</h6>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search-right">

                    <h2><b>$2500.00</b></h2>

                    <a className="btn btn_theme btn_sm mb-2"
                      href="">
                      Select Ticket
                    </a>
                    <br />
                    <span className="spen"> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</>
)
}

export default Ticket