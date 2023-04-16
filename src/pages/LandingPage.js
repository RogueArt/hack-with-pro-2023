import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '../pages/LandingPage.css'

const track = document.getElementById("image-track");

window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;
  console.log("mouse down");
  console.log(e.clientX);
}

window.onmousemove = e => {
  if(track.dataset.mouseDownAt === 0) return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt)-e.clientX,
        maxDelta = window.innerwidth/2;
  
  const percentage = (mouseDelta / maxDelta) * -100;
  track.style.transform = `translate(${percentage}%,ç-50%)`;
  console.log("moving");
}

window.onmouseup = () =>{
  track.dataset.mouseDownAt = "0"; 
  console.log("mouse up");
}

export function LandingPage() {
  function doSomething() {
  }
  
  return (
      <div>
        <h2>Welcome to</h2>
        <h1><span class="magic">Smart Schedule</span></h1>
        <h3>"The lost time is never found again" - Benjamin Franklin</h3>
        <div class = "startb">
          <p class = "start">Start</p>
        </div>
        <Draggable axis="x"
    handle="#image-track"
    defaultPosition={{x: 0, y: 0}}
    position={null}
    grid={[25, 25]}
    scale={1}>
        <div id = "image-track" data-mouse-down-at="0"> 
          <img class="image" src="Task.png" alt="image1" draggable = "false"/>
          <img class="image" src="mood.png" alt="image2" draggable = "false"/>
          <img class="image" src="domore.jpg" alt="image3" draggable = "false"/>
          <img class="image" src="a2f.png" alt="image4" draggable = "false"/>
          <img class="image" src="studying.jpeg" alt="image5" draggable = "false"/>
          <img class="image" src="productivewoman.jpeg" alt="image6" draggable = "false"/>
        </div>
        </Draggable>
      </div>
  )
}