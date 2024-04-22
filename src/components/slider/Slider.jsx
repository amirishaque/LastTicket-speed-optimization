import React, { useState } from 'react';
import FastMarquee from 'react-fast-marquee';

const Slider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
    <div className='slider-wrapper'>
    <FastMarquee
  style={{ width: '100%', height: '29px', backgroundColor: '#0dccd7', color: '#fff', padding: '2px 0', textShadow: '2px 2px 4px rgba(0,0,0,.5)' }}
  pauseOnHover
  speed={90}
  gradientColor={[255, 255, 255]}
  gradientWidth={30}
  direction="left"
  pause={isPaused}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
      {/* Your content goes here */}
      <div style={{ width: '35px' }}></div>
      <div>Hurray! You are in the right place *  100K+ social media followers  *   We value every customer *  100% customer satisfaction   * We guarantee your entry *  SSL certificate website *  Secured payout  *  24/7 Customer Support* If you are not 100% satisfied, we will refund you 100%</div>
    </FastMarquee>
    </div>
    </>
  );
};

export default Slider;
