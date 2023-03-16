import React, { useState } from 'react';

function Joystick() {
  const [buttonPos, setButtonPos] = useState({x: 0, y: 0});
  const [isDragging, setIsDragging] = useState(false);
  
  const handleMouseDown = (event) => {
    setIsDragging(true);
  }
  
  const handleMouseUp = (event) => {
    setIsDragging(false);
    setButtonPos({x: 0, y: 0});
  }
  
  const handleMouseMove = (event) => {
    if (isDragging) {
      const joystick = event.currentTarget.getBoundingClientRect();
      const newX = event.clientX - joystick.left - joystick.width/2;
      const newY = event.clientY - joystick.top - joystick.height/2;
      setButtonPos({x: newX, y: newY});
    }
  }
  
  return (
    <div style={{position: 'relative', width: '100px', height: '100px', backgroundColor: '#eee'}}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onMouseLeave={handleMouseUp}>
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%) translate(${buttonPos.x}px, ${buttonPos.y}px)`, width: '50px', height: '50px', backgroundColor: 'blue', borderRadius: '50%'}}
           onMouseDown={handleMouseDown} />
    </div>
  );
}
