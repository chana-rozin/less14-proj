import React, { useState, useRef, useEffect } from 'react';
import style from './ColorPicker.module.css';
import colors from '../../utils/optionalColors';

function ColorPicker({ color, handleColorChange }) {

  const [controllerDisplay, setControllerDisplay] = useState(false);
  const containerRef = useRef(null);


  const toggleControllerDisplay = () => {
    setControllerDisplay((prev) => !prev);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setControllerDisplay(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

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
          ref={containerRef}
        >
          {colors.map(color =>
            <div
              key={color}
              className={`${style[color]} ${style.circle}`}
              onClick={() => handleColorChange(color)}
            ></div>
          )}
        </div>
      )
      }
    </>

  );
}

export default ColorPicker;
