import React from 'react';
import Banner from '../../components/banner/Banner';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import '../../styles/ticketDetail/style.css';
import Slider from '../slider/Slider';

function TicketDetail() {

    const slideContent = [
        {
          title: "Formula One Sao Paulo - 3 Day Pass",
          location: "Sports LCT",
          ticketDetails: [
            { label: "Time:", value: "09:00" },
            { label: "Date:", value: "24-11-2023" },
            { label: "Location:", value: "Singapore" },
          ],
        },
        {
            title: "Formula One Sao Paulo - 3 Day Pass",
            location: "Sports LCT",
            ticketDetails: [
              { label: "Time:", value: "09:00" },
              { label: "Date:", value: "24-11-2023" },
              { label: "Location:", value: "Singapore" },
            ],
          },
          {
            title: "Formula One Sao Paulo - 3 Day Pass",
            location: "Sports LCT",
            ticketDetails: [
              { label: "Time:", value: "09:00" },
              { label: "Date:", value: "24-11-2023" },
              { label: "Location:", value: "Singapore" },
            ],
          },
          {
            title: "Formula One Sao Paulo - 3 Day Pass",
            location: "Sports LCT",
            ticketDetails: [
              { label: "Time:", value: "09:00" },
              { label: "Date:", value: "24-11-2023" },
              { label: "Location:", value: "Singapore" },
            ],
          },
          {
            title: "Formula One Sao Paulo - 3 Day Pass",
            location: "Sports LCT",
            ticketDetails: [
              { label: "Time:", value: "09:00" },
              { label: "Date:", value: "24-11-2023" },
              { label: "Location:", value: "Singapore" },
            ],
          },
          {
            title: "Formula One Sao Paulo - 3 Day Pass",
            location: "Sports LCT",
            ticketDetails: [
              { label: "Time:", value: "09:00" },
              { label: "Date:", value: "24-11-2023" },
              { label: "Location:", value: "Singapore" },
            ],
          },

      ];

    return (
        <>
        <Slider/>
            <Banner/>
            <div className="container text-holder">
                <h1 className="text-center fluid uppercase">What we do <span>
                    {/* {ticketName} */}
                </span></h1>
                <Swiper
      navigation
      pagination={false}
      slidesPerView={3}
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="mySwiper detailsSlider"
      breakpoints={{
        767: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {slideContent.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-item">
            <h2>{slide.title}</h2>
            <span className="location">{slide.location}</span>
            <div className="ticketDetails">
              <h4>Ticket Details:</h4>
              <ul className="list-none">
                {slide.ticketDetails.map((detail, index) => (
                  <li key={index}>
                    <span>{detail.label}</span>
                    <span>{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link className="sellBtn" to="/login">
              Sell Tickets Here
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
            </div>
        </>
    )
}

export default TicketDetail