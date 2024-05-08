import React, { useState, useEffect } from 'react';
import '../../index.css';

const AnimatedCard = ({ digit }) => {
  const [folded, setFolded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFolded(prevFolded => !prevFolded);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const animationClass = folded ? 'fold' : 'unfold';

  return (
    <div className={`flipCard ${animationClass}`}>
      <span>{digit}</span>
    </div>
  );
};

const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

const FlipUnitContainer = ({ digit, unit }) => {
  let currentDigit = digit;
  let previousDigit = digit - 1;

  if (unit !== 'hours') {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  return (
    <div className={'flipUnitContainer'}>
      <StaticCard position={'upperCard'} digit={currentDigit} />
      <StaticCard position={'lowerCard'} digit={previousDigit} />
      {unit === 'minutes' && <AnimatedCard digit={currentDigit} />}
    </div>
  );
};

const Counter = () => {
  const [time, setTime] = useState(new Date(new Date().getTime() + 5 * 60 * 1000));

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(prevTime => new Date(prevTime.getTime() - 1000));
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className={'flipClock'}>
      <FlipUnitContainer unit={'hours'} digit={hours} />
      <FlipUnitContainer unit={'minutes'} digit={minutes} />
      <FlipUnitContainer unit={'seconds'} digit={seconds} />
    </div>
  );
};

export default Counter;
