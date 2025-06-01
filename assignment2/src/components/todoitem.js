import React from 'react';
import './TodoItem.css';

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
