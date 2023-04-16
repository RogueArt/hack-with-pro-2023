import React, { useState } from 'react'
import './Calendar.css'
import { useLocation } from 'react-router'

// If an hour is the start of an event, then put the name there and oclor
// If the next hour is part of an event, then background color only

// 5 PM must be between 4 PM and 6 PM

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function generateRandomHexCode() {
  const hexChars = '0123456789abcdef'
  let hexCode = '#'
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length)
    hexCode += hexChars[randomIndex]
  }
  return hexCode
}

function getHourFromString(str) {
  const parts = str.split(":");
  const hour = parseInt(parts[0], 10);
  return hour;
}

// "9:30" -> 9
// "10:01" -> 10
const EVENTS = [
  {
    task: 'Eat',
    day: 'Monday',
    startTime: 9,
    endTime: 10,
    color: '#FF0000',
  },
  {
    task: 'Go to gym',
    day: 'Monday',
    startTime: 10,
    endTime: 11,
    color: '#FF0000',
  },
]

function Calendar({ events, workingHours }) {
  if (!workingHours) workingHours = { startHour: 9, endHour: 17 }
  const [selectedCell, setSelectedCell] = useState(null)

  // console.log('Working hours', workingHours)
  

  const { state } = useLocation()
  console.log('State', JSON.stringify(state, null, 2))

  if (state) {
    state.events = state.events.filter(event => event.startTime && event.endTime)

    // events = filteredEvents.map(event => {
    //   return {
    //     task: event.task,
    //     startTime: getHourFromString(event.startTime),
    //     endTime: getHourFromString(event.endTime),
    //     color: '#FF0000',
    //     day: event.day,
    //   }
    // })

    for (let x = 0; x < state.events.length; x += 1) {
      state.events[x].startTime = Number.isInteger(state.events[x].startTime) ? state.events[x].startTime : getHourFromString(state.events[x].startTime)
      state.events[x].endTime = Number.isInteger(state.events[x].endTime) ? state.events[x].endTime : getHourFromString(state.events[x].endTime)
      state.events[x].color = generateRandomHexCode()
    }
    events = state.events
  }
  console.log('Events', events)

  // events = EVENTS

  const handleCalendarClick = (day, hour) => {
    setSelectedCell({ day, hour })
  }

  const getFormattedHour = hour => {
    if (hour === 0) {
      return '12 AM'
    } else if (hour < 12) {
      return `${hour} AM`
    } else if (hour === 12) {
      return '12 PM'
    } else {
      return `${hour - 12} PM`
    }
  }

  const startHour = workingHours.startHour
  const endHour = workingHours.endHour
  const hours = []
  for (let i = startHour; i <= endHour; i++) {
    hours.push(i)
  }
  const fmtHours = hours.map(hour => getFormattedHour(hour))

  const getEventStyle = (startHour, endHour) => {
    const start = hours.indexOf(startHour)
    const end = hours.indexOf(endHour)
    return {
      gridRow: `${start + 2} / ${end + 3}`,
    }
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="calendar-header-day" />
        {days.map(day => (
          <div key={day} className="calendar-header-day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-body">
        {hours.map(hour => (
          <div key={hour} className="calendar-row">
            <div className="calendar-hour">{getFormattedHour(hour)}</div>
            
            {/* Go through each day for that  */}
            {days.map(day => {
              const isCellSelected =
                selectedCell &&
                selectedCell.day === day &&
                selectedCell.hour === hour

              // If there's an event for this day and time, then set the style
              console.log('New events', events)
              const eventsForCell = events.filter((event) => {
                console.log(event.day, day, event.startTime, hour, event.endTime, hour)
                return event.day === day && event.startTime <= hour && hour < event.endTime
              })
              const hasEvent = eventsForCell.length > 0

              let eventStyle = {}
              let isEventStart = false
              if (hasEvent) {
                const event = eventsForCell[0]
                isEventStart = event.startTime === hour
                eventStyle = { backgroundColor: event.color, border: event.color }
              }

              const cellEvent = eventsForCell[0]
              // const isEventStart = cellEvent.startHour === hour

              // console.log(eventsForCell)

              return (
                <div
                  key={`${day}-${hour}`}
                  className={`calendar-cell ${hasEvent && `calendar-event`}`}
                  style={eventStyle}
                  // onClick={() => handleCalendarClick(day, hour)}
                >
                  {eventsForCell.map(event => {
                    isEventStart = event.startTime === hour
                    return <p style={{ color: 'white' }} className={'calendar-event-text'}>{isEventStart && event.task}</p>
                  })}
                  {/* {eventsForCell.map(event => (
                    <div
                      key={event.name}
                      className="calendar-event"
                      style={getEventStyle(event.startHour, event.endHour)}
                    >
                      {event.name}
                    </div>
                  ))} */}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
