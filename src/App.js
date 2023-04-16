import React, { useState } from 'react';
import './App.css';
import Task from './models/task';
import TaskListOpenaiRequest from './models/requests/taskRequest';
import TaskInput from './components/TaskInput/TaskInput';
import generateResponse from './api/generateResponse';

function App() {
  const handleTaskSubmit = async (task) => {
    try {
      let taskList = [
        new Task("Feed dog", 15, 1),
new Task("Go to gym", 60, 2),
new Task("Socialize with Joe", 120, 2),
new Task("MATH 61 Homework", 90, 1),
new Task("CS 31 Homework", 120, 3),
new Task("CS 32 Homework", 180, 1),
new Task("CS 33 Homework", 60, 3)
      ];
      let request = new TaskListOpenaiRequest(taskList);
      await generateResponse(request);
    } catch (error) {
      console.error('Error processing task:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <TaskInput onSubmit={handleTaskSubmit} />
      </main>
      <footer>
        <p>Created with love by [Your Name]</p>
      </footer>
    </div>
  );
}

export default App;
