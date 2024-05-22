import React from "react";
// import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style/style.css';
import TrustPilot from '../../../assets/images/trustpilot.png'
import TrustPilotSingle from '../../../assets/images/trustpilotSingle.svg';
import starHalf from '../../../assets/images/starHalf.jpg';

export default function Reviews() {
  return (
    <>
      <section
        className="reviews-wrapper-outer"
        style={{ background: "#EDEDED", marginBottom: "120px" }}
      >
        <div className="reviews-wrapper">
          <h2>Excellent</h2>
          <div className="main-review">
            <div className="star">
              <img src={TrustPilot} alt="star" width={35} height={35}/>
            </div>
            <div className="star">
            <img src={TrustPilot} alt="star" width={35} height={35}/>
            </div>
            <div className="star">
            <img src={TrustPilot} alt="star" width={35} height={35}/>
            </div>
            <div className="star">
            <img src={TrustPilot} alt="star" width={35} height={35}/>
            </div>
            <div className="star" style={{background:'transparent'}}>
            <img src={starHalf} alt="star" width={43} height={43}/>
            </div>
  
          </div>
          {/* <h4 className="quantity-reviews">Based on</h4> */}
          <div className="trust-pilot-wrapper">
           <img src={TrustPilotSingle} alt="start" width={35} height={35} />
            <h3>Trustpilot</h3>
          </div>
          <Swiper
            // style={{paddingLeft: '15px', paddingRight:'15px', paddingBottom:'30px'}}
            navigation
            pagination={false}
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // navigation={{
            //     prevEl: '.swiper-button-prev',
            //     nextEl: '.swiper-button-next',
            //   }}
            className="mySwiper"
            breakpoints={{
              767: {
                slidesPerView: 4,
              },
              480: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className="slide-item">
                <div className="d-flex">
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
            
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                </div>
                <div className="slide-item-heading">
                  <h2>Excellent service</h2>
                  <p>
                    Excellent service, trusted people, Sometimes fees are to
                    expensive but ok. William Castellanos, 3 days ago
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <div className="d-flex">
             
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                </div>
                <div className="slide-item-heading">
                  <h2>Excellent service</h2>
                  <p>
                    Excellent service, trusted people, Sometimes fees are to
                    expensive but ok. William Castellanos, 3 days ago
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <div className="d-flex">
           
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                </div>
                <div className="slide-item-heading">
                  <h2>Excellent service</h2>
                  <p>
                    Excellent service, trusted people, Sometimes fees are to
                    expensive but ok. William Castellanos, 3 days ago
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <div className="d-flex">
             
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                </div>
                <div className="slide-item-heading">
                  <h2>Excellent service</h2>
                  <p>
                    Excellent service, trusted people, Sometimes fees are to
                    expensive but ok. William Castellanos, 3 days ago
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <div className="d-flex">
           
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                </div>
                <div className="slide-item-heading">
                  <h2>Excellent service</h2>
                  <p>
                    Excellent service, trusted people, Sometimes fees are to
                    expensive but ok. William Castellanos, 3 days ago
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <div className="d-flex">
            
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                  <div className="star">
                  <img src={TrustPilot} alt="star" width={25} height={25}/>
                  </div>
                </div>
                <div className="slide-item-heading">
                  <h2>Excellent service</h2>
                  <p>
                    Excellent service, trusted people, Sometimes fees are to
                    expensive but ok. William Castellanos, 3 days ago
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
