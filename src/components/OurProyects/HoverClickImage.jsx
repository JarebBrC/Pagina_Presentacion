import React, { useState } from 'react';

const HoverClickImage = ({ defaultImage, hoverImage, altText = "" }) => {
  const [isHoveredOrClicked, setIsHoveredOrClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHoveredOrClicked(true);
  };

  const handleMouseLeave = () => {
    setIsHoveredOrClicked(false);
  };

  const handleClick = () => {
    setIsHoveredOrClicked((prev) => !prev); // Cambia entre true/false cuando das click
  };

  return (
    <img
      src={isHoveredOrClicked ? hoverImage : defaultImage}
      alt={altText}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: 'pointer', transition: '0.3s ease' }}
    />
  );
};

export default HoverClickImage;
