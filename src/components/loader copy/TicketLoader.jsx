import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './style/style.css';
// import './AnimatedText.css'; 
import { TypeAnimation } from 'react-type-animation';
import useTypingAnimation from '../typeAnimation/TypeAnimation';

const TicketLoader = () => {
  const [animationStyle, setAnimationStyle] = useState({});

  useEffect(() => {
    // Define the animation properties
    const animationProperties = {
      animationName: 'moveText', // Name of the animation defined in CSS
      animationDuration: '2.5s', // Duration of the animation
      animationTimingFunction: 'linear', // Timing function for animation
      animationIterationCount: 'infinite', // Repeat the animation infinitely
    };

    // Update the state with animation properties
    setAnimationStyle(animationProperties);
  }, []);


  const originalText = 'Tickets are in high demand! Grab yours now before they sell out.'; // Text for typing animation
  const typingSpeed = 50; // Adjust typing speed as needed

  // Use the custom hook to get the animated text
  const text = useTypingAnimation(originalText, typingSpeed);


  return (
    <div className='ticket-page-loader-wrapper'>
    <div className="page-loader">
  
      
        {/* <p>Tickets are in high demand! Grab yours now before they sell out.</p> */}
        <section className="your-section-class">
        <p style={{color:'#fff'}}>{text}</p>
      </section>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#0DCCD7"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
    </div>
  );
};

export default TicketLoader;
