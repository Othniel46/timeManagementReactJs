import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles

const TaskCalendar = ({ tasks }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filter tasks based on the selected date
  const tasksForSelectedDate = tasks.filter((task) =>
    task.date === selectedDate.toISOString().split("T")[0]
  );

  return (
    <div className="task-calendar">
      <h2>Task Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date, view }) => {
          if (view === "month") {
            const isTaskDate = tasks.some(
              (task) => task.date === date.toISOString().split("T")[0]
            );
            return isTaskDate ? <span className="task-indicator">●</span> : null;
          }
        }}
      />
      <div className="task-list">
        <h3>Tasks for {selectedDate.toDateString()}</h3>
        {tasksForSelectedDate.length > 0 ? (
          <ul>
            {tasksForSelectedDate.map((task, index) => (
              <li key={index}>{task.title}</li>
            ))}
          </ul>
        ) : (
          <p>No tasks for this date.</p>
        )}
      </div>
    </div>
  );
};

export default TaskCalendar;