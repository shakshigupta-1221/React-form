import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CalendarPage from '../pages/CalendarPage';
import KanbanBoard from '../pages/KanbanBoard';
import Charts from '../pages/Charts';
import TablePage from '../pages/TablePage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/calendar" element={<CalendarPage />} />
    <Route path="/kanban" element={<KanbanBoard />} />
    <Route path="/charts" element={<Charts />} />
    <Route path="/table" element={<TablePage />} />
  </Routes>
);

export default AppRoutes;
