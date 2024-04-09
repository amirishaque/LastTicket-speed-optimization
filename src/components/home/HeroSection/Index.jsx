import React, { useState, useEffect } from "react";
import "./style/style.css";
import Slider from "../../slider/Slider";

export default function Index() {
  const [placeholder, setPlaceholder] = useState("");
  const originalPlaceholder = "Search for an event here";
  const typingSpeed = 100; // Adjust typing speed as needed
  let currentIndex = 0;
  let isTypingForward = true;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTypingForward) {
        if (currentIndex <= originalPlaceholder.length) {
          setPlaceholder(originalPlaceholder.substring(0, currentIndex));
          currentIndex++;
        } else {
          isTypingForward = false;
          currentIndex = originalPlaceholder.length;
        }
      } else {
        if (currentIndex >= 0) {
          setPlaceholder(originalPlaceholder.substring(0, currentIndex));
          currentIndex--;
        } else {
          isTypingForward = true;
          currentIndex = 0;
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="header-banner-wrapper">
        <section className="banner-wrapper">
          <Slider />
          <div className="banner-wrapper-inner">
            <h2>WELCOME TO Last Chance Ticket</h2>
            <h1>Last Chance Ticket is one of the world's leading secondary ticket marketplaces. Prices may be above or below face value.</h1>
            {/* <p>
            Last Chance Ticket is one of the world's leading secondary ticket marketplaces. Prices may be above or below face value.
            </p> */}
            <form>
              <input
                type="text"
                className="animated-input"
                placeholder={placeholder}
              />
              <button type="submit">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#0d6efd"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}
