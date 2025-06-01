import React from 'react';
import TodoItem from './todoitem';
import './TodoList.css';

function TodoList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;