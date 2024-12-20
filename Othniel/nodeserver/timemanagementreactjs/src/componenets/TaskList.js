import React from "react";

function TaskList({ tasks, goalId, updateGoal }) {
  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    updateGoal({ id: goalId, tasks: updatedTasks });
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskToggle(task.id)}
          />
          {task.name}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
