import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
  todo: [{ id: '1', content: 'Write report' }, { id: '2', content: 'Fix bugs' }],
  inProgress: [{ id: '3', content: 'Build Kanban UI' }],
  done: [{ id: '4', content: 'Set up project' }]
};

function KanbanBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceList = [...tasks[source.droppableId]];
    const destList = [...tasks[destination.droppableId]];
    const [movedTask] = sourceList.splice(source.index, 1);
    destList.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList
    });
  };

  return (
    <div className="kanban">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(tasks).map((column) => (
          <Droppable droppableId={column} key={column}>
            {(provided) => (
              <div className="kanban-column" {...provided.droppableProps} ref={provided.innerRef}>
                <h3>{column.toUpperCase()}</h3>
                {tasks[column].map((task, index) => (
                  <Draggable draggableId={task.id} index={index} key={task.id}>
                    {(provided) => (
                      <div
                        className="kanban-card"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default KanbanBoard;
