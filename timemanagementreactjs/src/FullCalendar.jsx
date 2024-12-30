import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css"; // Import the default styles
import "@fullcalendar/daygrid/main.css";

const FullCalendarView = ({ tasks }) => {
  const events = tasks.map((task) => ({
    title: task.title,
    date: task.date,
  }));

  return (
    <div className="full-calendar">
      <h2>Task Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

export default FullCalendarView;