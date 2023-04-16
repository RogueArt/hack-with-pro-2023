import React, { useState } from 'react'

export function LandingPage() {
  function doSomething() {
    console.log('do something!')
  }

  return (
    <div>
      <h1>Welcome to SmartSched!</h1>
      <p>Introducing SmartSchedule, the revolutionary new app designed to make planning your weekly schedule effortless and stress-free. With SmartSchedule, you can easily input your tasks for the week and let the app handle the rest.

Gone are the days of juggling multiple to-do lists and calendars. With SmartSchedule, you can quickly and easily prioritize your tasks and schedule them into your week. The app will help you allocate the right amount of time for each task, ensuring that you never overcommit or underdeliver.

SmartSchedule is also designed to be flexible, allowing you to adjust your schedule as needed. If something unexpected comes up, you can easily reschedule tasks or rearrange your entire week with just a few taps.

But that's not all - SmartSchedule is also equipped with smart features that help you optimize your productivity. The app will suggest the best times of day for you to complete certain tasks based on your work patterns and energy levels. It can also help you avoid burnout by scheduling in breaks and downtime throughout your week.</p>

      <body>
        <button onClick={doSomething()}> Let's Get Started </button>
      </body>

    </div>
  )
}
