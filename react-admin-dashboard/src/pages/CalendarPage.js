import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function CalendarPage() {
  return (
    <div className="page">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[{ title: 'Meeting', date: '2025-06-12' }]}
      />
    </div>
  );
}

export default CalendarPage;
