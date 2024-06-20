import React from "react";

const TaskListItems = ({ tasks, deleteTask }) => {
  return (
    <div>
      <li className={tasks.isMarried ? "married" : "single"}>
        <span>
          {tasks.id} - {tasks.name} - {tasks.age} - {tasks.status}{" "}
        </span>{" "}
        <button className="delete" onClick={
            () => {
                
                if (window.confirm("Are you sure?")) {
                    deleteTask(tasks.id);
                }
            }
        }>
          Delete
        </button>
      </li>
    </div>
  );
};

export default TaskListItems;
