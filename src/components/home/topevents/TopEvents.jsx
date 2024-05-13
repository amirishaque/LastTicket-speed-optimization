import React, {useState} from "react";
import { Link } from "react-router-dom";
import Image from '../../../assets/images/img1.webp';
import "./style/style.css";
import Ticket from "../../../pages/tickets/Ticket";
import Modal from  '../../../components/modal/Modal'

export default function TopEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Array of image sources
  const images = [
    Image,
    Image,
    Image,
    Image
  ];


  const openModal = () => {
    setIsModalOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
};
  return (
    <>
      <section className="top-events-wrapper">
        <h2>Top Events</h2>
        <div className="image-wrapper">
          {/* Mapping over the array of images */}
         
          {images.map((image, index) => (
            <div className="image-box" key={index} onClick={openModal}>
               <span></span>
              <span></span>
              <span></span>
              <span></span>
              <figure>
               
                <img src={image} alt="#" width={450} height={327} />
              
              </figure>
             
              <strong>India Vs Pakistan - T20 World Cup 2024</strong>
            </div>
          ))}
      
         
        </div>
        <div className="white-overlay"></div>
      </section>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
