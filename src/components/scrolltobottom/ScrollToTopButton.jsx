import React, { useState, useEffect } from "react";
import "./style/style.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled down enough to show the button
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run effect only once on component mount

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="up-arrow"
              >
                <g data-name="Layer 2">
                  <g data-name="arrowhead-up">
                    <path d="M6.63 11.61 12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.14z"></path>
                    <path d="M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41z"></path>
                  </g>
                </g>
              </svg>
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
