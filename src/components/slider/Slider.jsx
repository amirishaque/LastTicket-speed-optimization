import React, { useState, useRef, useEffect } from "react";
import "./style/style.css";

const Slider = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);
  const [loopedText, setLoopedText] = useState("");

  useEffect(() => {
    // Concatenate the text to itself to create a loop without any additional spaces
    setLoopedText(text + text);

    // Start the animation immediately when the component mounts
    const marquee = marqueeRef.current;
    marquee.classList.remove("paused");
  }, [text]);

  const handleMouseOver = () => setIsPaused(true);
  const handleMouseOut = () => setIsPaused(false);

  const handleAnimationEnd = () => {
    // When animation ends, reset scroll position to seamlessly transition to the beginning of the loop
    const marquee = marqueeRef.current;
    marquee.scrollLeft = 0;
  };

  return (
    <div className="slider-wrapper">
      <div
        ref={marqueeRef}
        className={`marquee ${isPaused ? "paused" : ""}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onAnimationIteration={handleAnimationEnd}
      >
        Hurray! You are in the right place *  100K+ social media followers  *   We value every customer *  100% customer satisfaction   * We guarantee your entry *  SSL certificate website *  Secured payout  *  24/7 Customer Support* If you are not 100% satisfied, we will refund you 100% 
      </div>
    </div>
  );
};

export default Slider;
