import React from "react";
import TaskCalendar from "./TaskCalendar";
import FullCalendarView from "./FullCalendarView";

const App = () => {
    const tasks = [
      { title: "Complete React project", date: "2024-12-30" },
      { title: "Submit report", date: "2024-12-31" },
    ];
  
    return (
      <div className="app">
        <TaskCalendar tasks={tasks} />
        <FullCalendarView tasks={tasks} />
      </div>
    );
  };
  
  export default App;