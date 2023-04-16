import React, { useState } from 'react';
import './App.css';
// import Calendar from './components/Calendar';
import TaskInput from './components/TaskInput/TaskInput';
import { callChatGPT } from './api/chatGPT'
import Calendar from './components/Calendar';
import { DATA } from './testData';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [events, setEvents] = useState(DATA.events)
  const [workingHours, setWorkingHours] = useState(DATA.workingHours)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div></div>}></Route>
        <Route path="/app" element={<Calendar events={events} workingHours={workingHours} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
