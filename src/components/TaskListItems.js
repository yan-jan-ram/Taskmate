import React from "react";
import style from "./listItems.module.css";
import styling from "./taskListItems.module.css";

const TaskListItems = ({ tasks, deleteTask }) => {
  return (
    <>
      <li className={tasks.isMarried ? style.married : style.single}>
        <span className={styling.data}>
          {tasks.id} - {tasks.name} - {tasks.age} - {tasks.status}{" "}
        </span>{" "}
        <button
          className={style.delete}
          onClick={() => {
            if (window.confirm("Are you sure?")) {
              deleteTask(tasks.id);
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
