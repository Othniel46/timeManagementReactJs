import React, { useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";

function Goals({ goals, addGoal, updateGoal, deleteGoal }) {
  const [newGoal, setNewGoal] = useState("");

  const handleAddGoal = () => {
    const goal = {
      id: Date.now(),
      name: newGoal,
      tasks: [],
      deadline: "",
    };
    addGoal(goal);
    setNewGoal("");
  };

  return (
    <div>
      <h1>Manage Goals</h1>
      <input
        type="text"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        placeholder="New Goal Name"
      />
      <button onClick={handleAddGoal}>Add Goal</button>

      {goals.map((goal) => (
        <div key={goal.id}>
          <h3>{goal.name}</h3>
          <button onClick={() => deleteGoal(goal.id)}>Delete Goal</button>
          <TaskList tasks={goal.tasks} goalId={goal.id} updateGoal={updateGoal} />
        </div>
      ))}
    </div>
  );
}

export default Goals;
