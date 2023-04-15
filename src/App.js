import React, { useState } from 'react';
import './App.css';
import Task from './models/task';
import TaskListOpenaiRequest from './models/requests/taskRequest';
import TaskInput from './components/TaskInput/TaskInput';
import generateResponse from './api/generateResponse';

function App() {
  const handleTaskSubmit = async (task) => {
    try {
      let taskList = [new Task('feed dog', 'Monday', '2 hours'), new Task('lift', 'Monday', '5 hours')];
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
