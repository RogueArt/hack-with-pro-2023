import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import TaskInput from './components/TaskInput/TaskInput';
import { callChatGPT } from './api/chatGPT'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [events, setEvents] = useState([]);

  const handleTaskSubmit = async (task) => {
    const apiKey = 'your-api-key'; // Replace with your actual API key
    const prompt = `Given a task "${task}", generate events for a calendar.`;
    try {
      const gptResponse = await callChatGPT(prompt, apiKey);
      // Parse the GPT response to extract event data
      // This will depend on the format of the generated events in the response
      const generatedEvents = parseGPTResponse(gptResponse);

      setEvents((prevEvents) => [...prevEvents, ...generatedEvents]);
    } catch (error) {
      console.error('Error processing task:', error);
    }
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
        <Route path="/" element={<div></div>}></Route>
        <Route path="/app" element={<Calendar/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
  