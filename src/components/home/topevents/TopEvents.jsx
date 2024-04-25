import React from "react";
import { Link } from "react-router-dom";
import Image from '../../../assets/images/img1.webp';
import "./style/style.css";
import Ticket from "../../../pages/tickets/Ticket";

export default function TopEvents() {
  // Array of image sources
  const images = [
    Image,
    Image,
    Image,
    Image
  ];

  return (
    <>
      <section className="top-events-wrapper">
        <h2>Top Events</h2>
        <div className="image-wrapper">
          {/* Mapping over the array of images */}
         
          {images.map((image, index) => (
            <div className="image-box" key={index}>
               <span></span>
              <span></span>
              <span></span>
              <span></span>
              <figure>
                <Link to="/Ticket">
                <img src={image} alt="#" width={450} height={327} />
               
                </Link>
              </figure>
              <strong>India Vs Pakistan - T20 World Cup 2024</strong>
            </div>
          ))}
      
         
        </div>
        <div className="white-overlay"></div>
      </section>
    </>
  );
}
