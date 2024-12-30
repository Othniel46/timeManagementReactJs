import React, { useState, useEffect } from "react";
import data from './data/data';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Reports from "./pages/Reports";
import { initialGoals } from "./data";
import './styles/style.css';

const App = () => {
  // Timer States
  const [time, setTime] = useState(0); // Timer in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Alarm Clock States
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState('');
  const [isAlarmTriggered, setIsAlarmTriggered] = useState(false);

  // Timer Functions
  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    if (isRunning) {
      const timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    }
  }, [isRunning]);

  // Alarm Clock Functions
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Check if alarm matches the current time
    if (
      alarmTime &&
      `${currentTime.getHours()}:${currentTime.getMinutes()}` === alarmTime &&
      !isAlarmTriggered
    ) {
      alert('Alarm ringing!'); // You can replace this with a sound or notification
      setIsAlarmTriggered(true);
    }

    return () => clearInterval(clockInterval);
  }, [currentTime, alarmTime, isAlarmTriggered]);

  const handleAlarmSet = (event) => {
    setAlarmTime(event.target.value);
    setIsAlarmTriggered(false);
  };

  return (
    <div className="app">
      <h1>Time Management App</h1>

      {/* Timer Section */}
      <div className="timer-section">
        <h2>Timer</h2>
        <p>{`${Math.floor(time / 60)}:${time % 60}`}</p>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      {/* Alarm Clock Section */}
      <div className="alarm-section">
        <h2>Alarm Clock</h2>
        <p>Current Time: {currentTime.toLocaleTimeString()}</p>
        <label>
          Set Alarm (HH:MM 24-hour format):
          <input
            type="time"
            value={alarmTime}
            onChange={handleAlarmSet}
            required
          />
        </label>
        <p>{isAlarmTriggered && 'Alarm was triggered!'}</p>
      </div>
    </div>
  );
};

  const [goals, setGoals] = useState(initialGoals);

  const addGoal = (newGoal) => setGoals([...goals, newGoal]);
  const updateGoal = (updatedGoal) =>
    setGoals(goals.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal)));
  const deleteGoal = (goalId) => setGoals(goals.filter((goal) => goal.id !== goalId));
  console.log(data); // Use the data as needed
  return (
    <><Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals goals={goals} addGoal={addGoal} updateGoal={updateGoal} deleteGoal={deleteGoal} />} />
        <Route path="/reports" element={<Reports goals={goals} />} />
      </Routes>
    </Router><div>
        <h1>Welcome to My App</h1>
      </div></>
  );

export default App;