import React from "react";
import style from "./listItems.module.css";
import styling from "./taskListItems.module.css";

const TaskListItems = ({ task, deleteTask }) => {
  return (
    <>
      <li className={task.isMarried ? style.married : style.single}>
        <span className={styling.data}>
          {task.id} - {task.name} - {task.age} - {task.status}{" "}
        </span>{" "}
        <button
          className={style.delete}
          onClick={() => {
            if (window.confirm("Are you sure?")) {
              deleteTask(task.id);
            }
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TaskListItems;
