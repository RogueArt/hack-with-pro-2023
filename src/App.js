import React, { useState} from 'react';
import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import Calendar from './components/Calendar';
import { DATA } from './testData';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MoodPage } from './pages/MoodPage';
import { LandingPage } from './pages/LandingPage';

function App() {
  const [events, setEvents] = useState(DATA.events)
  const [workingHours, setWorkingHours] = useState(DATA.workingHours)

  const handleTaskSubmit = (taskInfo) => {
    console.log('Task submitted:', taskInfo);
  };

  // Add a function to parse the GPT response to extract event data
  const parseGPTResponse = (gptResponse) => {
    // Implement this function based on the expected format of the generated events
    // Example:
    const extractedEvents = [];
    // Extract event data from gptResponse and populate extractedEvents
    return extractedEvents;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/app" element={<Calendar events={events} workingHours={workingHours} />}></Route>
        <Route path="/input" element={<TaskInput onSubmit={handleTaskSubmit} />}></Route>
        <Route path="/mood" element={<MoodPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App; 
