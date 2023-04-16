import React, { useEffect, useState } from 'react'
import '../pages/LandingPage.css'
import { useNavigate } from 'react-router'

export function LandingPage() {
  function doSomething() {
    console.log('do something!')
  }

  // useEffect(() => {
  //   if (window?.location.pathname === '/') import('../pages/LandingPage.css')
  // }, [])

  const navigate = useNavigate()

  return (
    <div>
      <br></br>
      <h2>Welcome to</h2>
      <h1><span class="magic">Smart Schedule</span></h1>
      <h3>"The lost time is never found again" - Benjamin Franklin</h3>
      <div class = "startb">
        <p onClick={() => navigate('/input')} class = "start">Start</p>
      </div>
      <div id = "image-track">
        
      </div>
    </div>
  )
}