'use client';
import React, { useState, useEffect } from 'react';

function FlareCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [flareSize, setFlareSize] = useState(30);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsPointer(e.target.style.cursor === 'pointer');
  };

  const handleMouseClick = () => {
    setFlareSize(10);
  };
  const handleMouseback = () => {
    setFlareSize(30);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('pointerdown', handleMouseClick);
    window.addEventListener('pointerup', handleMouseback);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
      window.removeEventListener('pointerup', handleMouseback);
    };
  }, []);

  const cursorStyle = isPointer ? { left: '-100px', top: '-100px' } : {};

  return (
    <div
      className={`flare ${isPointer ? 'pointer' : ''}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
        mixBlendMode: 'difference',
      }}
    ></div>
  );
}

export default FlareCursor;
