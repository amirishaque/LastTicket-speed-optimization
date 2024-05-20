import React, { useState, useEffect } from "react";
import FlipNumbers from "react-flip-numbers";
import '../../styles/counter/counter.css'


const Counter = () => {
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer); // Stop the timer when time reaches zero
          return 0;
        }
      });
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="counter-wrapper">
      <div className="counter-wrapper-inner">
        <div className="timer-wrapperz">
          <FlipNumbers
            play
            color="#000"
            background="rgba(0, 0, 0, 0)"
            width={window.innerWidth < 600 ? 35 : 50} // Adjust width based on screen size
            height={window.innerWidth < 600 ? 35 : 50} // Adjust height based on screen size
            numbers={`${minutes}`}
          />
        </div>
        <span>:</span>
        <div className="timer-wrapperz">
          <FlipNumbers
            play
            color="#000"
            background="rgba(0, 0, 0, 0)"
            width={window.innerWidth < 600 ? 25 : 50} // Adjust width based on screen size
            height={window.innerWidth < 600 ? 25 : 50} // Adjust height based on screen size
            numbers={`${seconds}`}
          />
        </div>
        <span></span>
        {/* <div>
          <Milliseconds milliseconds={milliseconds} />
        </div> */}
      </div>
    </div>
  );
};

export default Counter;
