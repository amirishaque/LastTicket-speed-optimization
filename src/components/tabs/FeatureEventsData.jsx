import React from "react";
import Image1 from "../../assets/images/img1.webp";
import Image2 from "../../assets/images/img2.webp";
import "./style/style.css";

export default function FeatureEventsData() {
  // Define images for each event
  const images = [
    Image1,
    Image2,
    Image1,
    Image2,
    // Add more images as needed
  ];

  // Define events data
  const events = [
    {
      id: 1,
      image: images[1], // Associate the first image with the first event
      name: "Billy Joel & Stevie Nicks",
      location: "New York, United States",
      price: "From $80",
    },
    {
      id: 2,
      image: images[0], // Associate the second image with the second event
      name: "Billy Joel & Stevie Nicks",
      location: "New York, United States",
      price: "From $80",
    },
    {
      id: 3,
      image: images[1], // Associate the second image with the second event
      name: "Billy Joel & Stevie Nicks",
      location: "New York, United States",
      price: "From $80",
    },
    {
      id: 4,
      image: images[0], // Associate the second image with the second event
      name: "Billy Joel & Stevie Nicks",
      location: "New York, United States",
      price: "From $80",
    },
    {
      id: 5,
      image: images[1], // Associate the second image with the second event
      name: "Event 2 Name",
      location: "Location 2",
      price: "Price 2",
    },
    {
      id: 6,
      image: images[0], // Associate the second image with the second event
      name: "Billy Joel & Stevie Nicks",
      location: "New York, United States",
      price: "From $80",
    },
    // Add more events as needed
  ];

  return (
    <>
          {/* Rest of your JSX */}
          <div className="feature-events-card-wrapper">
            <div className="feature-events-card-wrapper-inner">
              {events.map((event) => (
                <div key={event.id} className="card-wrapper">
                  <figure>
                    <img src={event.image} alt="Event" />
                  </figure>
                  <h3>{event.name}</h3>
                  <span className="location">
                    <svg
                      version="1.0"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 64 64"
                      enableBackground="new 0 0 64 64"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          fill="#231F20"
                          d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14 s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"
                        />
                        <path
                          fill="#231F20"
                          d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z"
                        />
                      </g>
                    </svg>
                    {event.location}
                  </span>
                  <strong className="price">{event.price}</strong>
                </div>
              ))}
            </div>
          </div>
    </>
  );
}
