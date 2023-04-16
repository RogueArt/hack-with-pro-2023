import React, { useEffect, useState } from 'react'
// import '../pages/LandingPage.css'

export function LandingPage() {
  function doSomething() {
    console.log('do something!')
  }

  useEffect(() => {
    if (window?.location.pathname === '/') import('../pages/LandingPage.css')
  }, [])

  return (
    <div>
      <br></br>
      <h2>Welcome to</h2>
      <h1><span class="magic">Smart Schedule</span></h1>
      <h3>"The lost time is never found again" - Benjamin Franklin</h3>
      <div class = "startb">
        <p class = "start">Start</p>
      </div>
      <div id = "image-track">
        
      </div>
    </div>
  )
}