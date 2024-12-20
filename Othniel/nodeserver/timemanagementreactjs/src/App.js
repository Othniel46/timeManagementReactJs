import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Reports from "./pages/Reports";
import { initialGoals } from "./data";

function App() {
  const [goals, setGoals] = useState(initialGoals);

  const addGoal = (newGoal) => setGoals([...goals, newGoal]);
  const updateGoal = (updatedGoal) =>
    setGoals(goals.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal)));
  const deleteGoal = (goalId) => setGoals(goals.filter((goal) => goal.id !== goalId));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals goals={goals} addGoal={addGoal} updateGoal={updateGoal} deleteGoal={deleteGoal} />} />
        <Route path="/reports" element={<Reports goals={goals} />} />
      </Routes>
    </Router>
  );
}

export default App;
