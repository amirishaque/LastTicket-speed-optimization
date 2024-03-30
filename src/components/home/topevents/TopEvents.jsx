import React from "react";
import { Link } from "react-router-dom";
import Image from '../../../assets/images/img1.webp';
import "./style/style.css";

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
              <figure>
                <img src={image} alt="#" width={450} height={327} />
              </figure>
            </div>
          ))}
        </div>
        <div className="white-overlay"></div>
      </section>
    </>
  );
}
