import React, { useState } from 'react'
import styles from './TaskInput.module.css'
import OpenaiRequest from '../../models/requests/taskRequest';

import Task from '../../models/task.js'
import Event from '../../models/event.js'
import generateResponse from '../../api/generateResponse.js'
import { useNavigate } from 'react-router';

function getDayOfWeek(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

const TaskInput = ({ onSubmit }) => {
  const [tasks, setTasks] = useState([])
  const [events, setEvents] = useState([])

  // console.log('tasks', JSON.stringify(tasks, null, 2))
  // console.log('events', JSON.stringify(events, null, 2))
  console.log('events', events)
  const navigate = useNavigate()

  // For tasks
  const [newTask, setNewTask] = useState('')
  const [newDueDate, setNewDueDate] = useState('')
  const [newStudyDuration, setNewStudyDuration] = useState(null)
  const [newPriority, setNewPriority] = useState(1)

  // For an event
  const [newEvent, setNewEvent] = useState('')
  const [newEventDate, setNewEventDate] = useState('')
  const [newStartTime, setNewStartTime] = useState('')
  const [newEndTime, setNewEndTime] = useState('')

  const handleTaskSubmit = e => {
    e.preventDefault()

    const taskToAdd = {
      task: newTask,
      // dueDate: newDueDate,
      duration: newStudyDuration,
      priority: newPriority,
    }

    setTasks([...tasks, taskToAdd])

    setNewTask('')
    setNewDueDate('')
    setNewStudyDuration('')
    setNewPriority(1)
  }

  const handleEventSubmit = e => {
    e.preventDefault()

    const date = new Date(newEventDate)
    date.setHours(date.getHours() + 8)

    const eventToAdd = {
      event: newEvent,
      eventDate: getDayOfWeek(date),  
      startTime: newStartTime,
      endTime: newEndTime,
      // eventDuration: newEventDuration,
    }

    setEvents([...events, eventToAdd])

    setNewEvent('')
    setNewEventDate('')
    // setNewEventDuration('')
  }

  const handleGenerate = async () => {
    // Serialize task and event lists to 
    const taskList = tasks.map(task => {
      return new Task(task.task, task.duration, task.priority)
    })

    const eventList = events.map(event => {
      return new Event(event.event, event.startTime, event.endTime, event.eventDate)
    })

    console.log(taskList, eventList)

    let request = new OpenaiRequest(taskList, eventList)
    const res = await generateResponse(request)
    console.log(`GPT's response`, res)
    navigate('/app', { state: { events: res } })

    // console.log('Task submitted:', taskInfo)

    onSubmit(tasks, events)
    setTasks([])
    setEvents([])
  }

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.tables}>
        <div className={styles.tasks}>
          <h2>Tasks</h2>
          <table className={styles.table}>
            {tasks.length > 0 && (
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Due Date</th>
                  <th>Study/Work Duration (hours)</th>
                  <th>Priority</th>
                </tr>
              </thead>
            )}
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <tr key={index}>
                    <td>{task.task}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.studyDuration}</td>
                    <td>{'★'.repeat(task.priority)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className={styles.emptyRow}>
                    No tasks entered.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <h2>Add New Task</h2>
          <form onSubmit={handleTaskSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="task">
                Task Name:
              </label>
              <input
                id="task"
                className={styles.input}
                type="text"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                required
              />
            </div>
            {/* <div className={styles.inputGroup}>
              <label cgetDayOfWeeklassName={styles.label} htmlFor="task">
                Task:
              </label>
              <input
                id="task"
                className={styles.input}
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                required
              />
            </div> */}
            {/* <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="due-date">
                Due date:
              </label>
              <input
                id="due-date"
                className={styles.input}
                type="date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
                required
              />
            </div> */}
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="study-duration">
                Study/Work duration (Minutes):
              </label>
              <input
                id="study-duration"
                className={styles.input}
                type="number"
                step="0.5"
                min="0"
                value={newStudyDuration}
                onChange={e => setNewStudyDuration(parseInt(e.target.value))}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="priority">
                Priority:
              </label>
              <div className={styles.starRating}>
                {[1, 2, 3].map(star => (
                  <span
                    key={star}
                    className={`${styles.star} ${
                      star <= newPriority ? styles.selected : ''
                    }`}
                    onClick={() => {
                      setNewPriority(star)
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <button className={styles.button} type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className={styles.events}>
          <h2>Events</h2>
          <table className={styles.table}>
            {events.length > 0 && (
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Event Day</th>
                  <th>Event Duration (minutes)</th>
                </tr>
              </thead>
            )}
            <tbody>
              {events.length > 0 ? (
                events.map((event, index) => (
                  <tr key={index}>
                    <td>{event.event}</td>
                    <td>{event.eventDate}</td>
                    <td>{event.eventDuration}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className={styles.emptyRow}>
                    No events entered.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <h2>Add New Event</h2>
          <form onSubmit={handleEventSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="event">
                Event Name:
              </label>
              <input
                id="event"
                className={styles.input}
                type="text"
                value={newEvent}
                onChange={e => setNewEvent(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="event-date">
                Start time:
              </label>
              <input
                id="event-start-time"
                className={styles.input}
                type="time"
                value={newStartTime}
                onChange={e => setNewStartTime(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="event-date">
                End time:
              </label>
              <input
                id="event-end-time"
                className={styles.input}
                type="time"
                value={newEndTime}
                onChange={e => setNewEndTime(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="event-date">
                Event Date
              </label>
              <input
                id="event-date"
                className={styles.input}
                type="date"
                value={newEventDate}
                onChange={e => setNewEventDate(e.target.value)}
                required
              />
            </div>

            {/* <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="event-duration">
                Event duration (minutes):
              </label>
              <input
                id="event-duration"
                className={styles.input}
                type="number"
                step="15"
                min="0"
                value={newEventDuration}
                onChange={e => setNewEventDuration(e.target.value)}
                required
              />
            </div> */}
            <button className={styles.button} type="submit">
              Add Event
            </button>
          </form>
        </div>
      </div>
      <button className={styles.generateButton} onClick={handleGenerate}>
        Generate
      </button>
    </div>
  )
}

export default TaskInput
