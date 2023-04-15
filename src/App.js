import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput/TaskInput';

function App() {
  const handleTaskSubmit = (taskInfo) => {
    console.log('Task submitted:', taskInfo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
      </header>
      <main>
        <TaskInput onSubmit={handleTaskSubmit} />
      </main>
    </div>
  );
}

export default App; 

