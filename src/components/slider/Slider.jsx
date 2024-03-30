import React, { useState, useRef, useEffect } from "react";
import './style/style.css'

const Slider = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [startScroll, setStartScroll] = useState(0);
  const [loopedText, setLoopedText] = useState("");

  useEffect(() => {
    // Concatenate the text to itself to create a loop
    setLoopedText(text + " " + text);
  }, [text]);

  const handleMouseOver = () => setIsPaused(true);
  const handleMouseOut = () => setIsPaused(false);

  const handleMouseDown = (e) => {
    setStartX(e.pageX);
    setStartScroll(marqueeRef.current.scrollLeft);
    setIsPaused(true); // Pause animation on drag start
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const dx = e.pageX - startX;
    marqueeRef.current.scrollLeft = startScroll - dx;
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    setIsPaused(false); // Resume animation after drag
  };

  return (
    <>
      <div className="slider-wrapper">
        <div
          ref={marqueeRef}
          className={`marquee ${isPaused ? "paused" : ""}`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onMouseDown={handleMouseDown}
        >
          {/* {loopedText} */}
          Prepare for an unforgettable night, With tickets in hand, your next
          adventure takes flight. An amazing experience awaits, don't miss the
          sight. Prepare for an unforgettable night, With tickets in hand.
        </div>
      </div>
    </>
  );
};

export default Slider;
