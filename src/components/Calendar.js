import React, { useState } from 'react'
import './Calendar.css'

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
    hours.push(getFormattedHour(i))
  }

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
            <div className="calendar-hour">{hour}</div>
            {days.map(day => {
              const isCellSelected =
                selectedCell &&
                selectedCell.day === day &&
                selectedCell.hour === hour
              const eventsForCell = events.filter(
                event => event.day === day && event.startHour === hour
              )
              return (
                <div
                  key={`${day}-${hour}`}
                  className={`calendar-cell ${
                    isCellSelected ? 'selected' : ''
                  }`}
                  onClick={() => handleCalendarClick(day, hour)}
                >
                  {eventsForCell.map(event => (
                    <div
                      key={event.name}
                      className="calendar-event"
                      style={getEventStyle(event.startHour, event.endHour)}
                    >
                      {event.name}
                    </div>
                  ))}
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
