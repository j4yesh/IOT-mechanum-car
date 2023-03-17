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
      console.log(newX+" "+newY);
      let ra = newX*newX+newY*newY;
      ra = Math.sqrt(ra);
      console.log(ra);
      if(ra>50){
        setButtonPos(newX-1,newY-1);
      }else{
        setButtonPos({x: newX, y: newY});
      }
    }
  }
  
  return (
    <div style={{position: 'relative', width: '100px', height: '100px', borderRadius: '50%',backgroundColor: '#313743'
                ,margin: '5px'}}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onMouseLeave={handleMouseUp}>
      <div style={{position: 'absolute', top: '50%', left: '50%', 
      transform: `translate(-50%, -50%) translate(${buttonPos.x}px, ${buttonPos.y}px)`,
       width: '50px', height: '50px', 
       backgroundColor: '#e1e1e1', 
       borderRadius: '50%'}}
           onMouseDown={handleMouseDown} />
    </div>
  );
}

export default Joystick;


// import React from 'react';

// class Joystick extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   handleUpClick = () => {
//     this.joystick.style.top = (parseInt(this.joystick.style.top) - 10) + 'px';
//   };

//   handleDownClick = () => {
//     this.joystick.style.top = (parseInt(this.joystick.style.top) + 10) + 'px';
//   };

//   handleLeftClick = () => {
//     this.joystick.style.left = (parseInt(this.joystick.style.left) - 10) + 'px';
//   };

//   handleRightClick = () => {
//     this.joystick.style.left = (parseInt(this.joystick.style.left) + 10) + 'px';
//   };

//   render() {
//     return (
//       <div
//         id="joystick"
//         ref={(el) => { this.joystick = el; }}
//         style={{
//           width: '150px',
//           height: '150px',
//           borderRadius: '50%',
//           background: 'gray',
//           position: 'relative',
//         }}
//       >
//         <button
//           id="up"
//           onClick={this.handleUpClick}
//           style={{
//             position: 'absolute',
//             width: '50px',
//             height: '50px',
//             borderRadius: '50%',
//             background: 'white',
//             border: 'none',
//             outline: 'none',
//             top: '0',
//             left: '50%',
//             transform: 'translateX(-50%)',
//           }}
//         >
//           ↑
//         </button>
//         <button
//           id="down"
//           onClick={this.handleDownClick}
//           style={{
//             position: 'absolute',
//             width: '50px',
//             height: '50px',
//             borderRadius: '50%',
//             background: 'white',
//             border: 'none',
//             outline: 'none',
//             bottom: '0',
//             left: '50%',
//             transform: 'translateX(-50%)',
//           }}
//         >
//           ↓
//         </button>
//         <button
//           id="left"
//           onClick={this.handleLeftClick}
//           style={{
//             position: 'absolute',
//             width: '50px',
//             height: '50px',
//             borderRadius: '50%',
//             background: 'white',
//             border: 'none',
//             outline: 'none',
//             top: '50%',
//             left: '0',
//             transform: 'translateY(-50%)',
//           }}
//         >
//           ←
//         </button>
//         <button
//           id="right"
//           onClick={this.handleRightClick}
//           style={{
//             position: 'absolute',
//             width: '50px',
//             height: '50px',
//             borderRadius: '50%',
//             background: 'white',
//             border: 'none',
//             outline: 'none',
//             top: '50%',
//             right: '0',
//             transform: 'translateY(-50%)',
//           }}
//         >
//           →
//         </button>
//       </div>
//     );
//   }
// }

// export default Joystick;
