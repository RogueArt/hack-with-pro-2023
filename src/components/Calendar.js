import React, { useState } from 'react'
import './Calendar.css'

// If an hour is the start of an event, then put the name there and oclor
// If the next hour is part of an event, then background color only

// 5 PM must be between 4 PM and 6 PM

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function Calendar({ events, workingHours }) {
  const [selectedCell, setSelectedCell] = useState(null)

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
              const eventsForCell = events.filter((event) => {
                return event.daysOfWeek.includes(day) && event.startHour <= hour && hour < event.endHour
              })
              const hasEvent = eventsForCell.length > 0

              let eventStyle = {}
              let isEventStart = false
              if (hasEvent) {
                const event = eventsForCell[0]
                isEventStart = event.startHour === hour
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
                    return <p className={'calendar-event-text'}>{isEventStart && event.name}</p>
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
