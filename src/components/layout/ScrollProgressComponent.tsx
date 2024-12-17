'use client'
import { useEffect } from 'react';

const ScrollProgressBar = () => {
  useEffect(() => {
    const progressBar = document.getElementById('scroll-progress-bar');

    if (!progressBar) {
      console.error("Progress bar element not found!");
      return;
    }

    const updateScrollProgress = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      progressBar.style.width = `${scrollPercentage}%`;

      let red, green;

      if (scrollPercentage <= 50) {
        green = 255;
        red = Math.floor((scrollPercentage / 50) * 255);
      } else {
        red = 255;
        green = Math.floor(255 - ((scrollPercentage - 50) / 50) * 255);
      }

      progressBar.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
    };

    window.addEventListener('scroll', updateScrollProgress);

    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="sticky top-0 h-1 w-full bg-antiquewhite">
      <div
        id="scroll-progress-bar"
        className="h-full w-0 transition-width duration-75 ease-in-out"
        style={{ zIndex: 100 }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
