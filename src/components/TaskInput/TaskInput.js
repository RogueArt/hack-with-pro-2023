import React, { useState } from 'react';
import styles from './TaskInput.module.css';

const TaskInput = ({ onSubmit }) => {
  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newStudyDuration, setNewStudyDuration] = useState('');
  const [newEvent, setNewEvent] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventDuration, setNewEventDuration] = useState('');

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    const taskToAdd = {
      task: newTask,
      dueDate: newDueDate,
      studyDuration: newStudyDuration,
    };

    setTasks([...tasks, taskToAdd]);

    setNewTask('');
    setNewDueDate('');
    setNewStudyDuration('');
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();

    const eventToAdd = {
      event: newEvent,
      eventDate: newEventDate,
      eventDuration: newEventDuration,
    };

    setEvents([...events, eventToAdd]);

    setNewEvent('');
    setNewEventDate('');
    setNewEventDuration('');
  };

  const handleGenerate = () => {
    onSubmit(tasks, events);
    setTasks([]);
    setEvents([]);
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.tables}>
        <div className={styles.tasks}>
          <h2>Tasks</h2>
          <table className={styles.table}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
              <th>Study/Work Duration (hours)</th>
            </tr>
          </thead>

          <tbody>
            {tasks.length > 0 ? (
             tasks.map((task, index) => (
              <tr key={index}>
             <td>{task.task}</td>
           <td>{task.dueDate}</td>
           <td>{task.studyDuration}</td>
              </tr>
           ))
           ) : (
            <tr>
              <td colSpan="3" className={styles.emptyRow}>
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
            </div>
            <div className={styles.inputGroup}>
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
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="study-duration">
                Study/Work duration (hours):
              </label>
              <input
                id="study-duration"
                className={styles.input}
                type="number"
                step="0.5"
                min="0"
                value={newStudyDuration}
                onChange={(e) => setNewStudyDuration(e.target.value)}
                required
              />
            </div>
            <button className={styles.button} type="submit">
                            Add Task
            </button>
          </form>
        </div>
        <div className={styles.events}>
          <h2>Events</h2>
          <table className={styles.table}>

          <thead>
  <tr>
    <th>Event</th>
    <th>Event Date</th>
    <th>Event Duration (minutes)</th>
  </tr>
</thead>
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
                Event:
              </label>
              <input
                id="event"
                className={styles.input}
                type="text"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="event-date">
                Event date:
              </label>
              <input
                id="event-date"
                className={styles.input}
                type="date"
                value={newEventDate}
                onChange={(e) => setNewEventDate(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
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
                onChange={(e) => setNewEventDuration(e.target.value)}
                required
              />
            </div>
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
  );
};

export default TaskInput;

