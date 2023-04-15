import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import TaskInput from './components/TaskInput/TaskInput';
import { callChatGPT } from './api/chatGPT';

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
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <TaskInput onSubmit={handleTaskSubmit} />
        <Calendar events={events} />
      </main>
      <footer>
        <p>Created with love by [Your Name]</p>
      </footer>
    </div>
  );
}

export default App;
