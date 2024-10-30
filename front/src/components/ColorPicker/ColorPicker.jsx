import React, { useState, useRef, useEffect } from 'react';
import style from './ColorPicker.module.css';

function ColorPicker({ color, handleColorChange }) {
  const [controllerDisplay, setControllerDisplay] = useState(false);
  const containerRef = useRef(null); // Create a ref

  const toggleControllerDisplay = () => {
    setControllerDisplay((prev) => !prev);
  };

  // Handle clicks outside the color picker
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click was outside the container
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setControllerDisplay(false); // Close the controller
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  return (
    <>
      {!controllerDisplay ? (
        <div className={`${style[color]} ${style.circle}`} onClick={toggleControllerDisplay}></div>
      ) : (
        <div
          className={style.container}
          ref={containerRef} // Attach the ref to the container
        >
          <div className={`${style.blue} ${style.circle}`} onClick={() => handleColorChange('blue')}></div>
          <div className={`${style.green} ${style.circle}`} onClick={() => handleColorChange('green')}></div>
          <div className={`${style.purple} ${style.circle}`} onClick={() => handleColorChange('purple')}></div>
          <div className={`${style.orange} ${style.circle}`} onClick={() => handleColorChange('orange')}></div>
        </div>
      )
      }
    </>

  );
}

export default ColorPicker;
