import { useState, useEffect } from 'react';

const useTypingAnimation = (originalText, typingSpeed) => {
  const [text, setText] = useState('');
  let currentIndex = 0;
  let isTypingForward = true;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTypingForward) {
        if (currentIndex <= originalText.length) {
          setText(originalText.substring(0, currentIndex));
          currentIndex++;
        } else {
          isTypingForward = false;
          currentIndex = originalText.length;
        }
      } else {
        if (currentIndex >= 0) {
          setText(originalText.substring(0, currentIndex));
          currentIndex--;
        } else {
          isTypingForward = true;
          currentIndex = 0;
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [originalText, typingSpeed]);

  return text;
};

export default useTypingAnimation;
