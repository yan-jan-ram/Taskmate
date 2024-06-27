import React, { useState } from "react";
import TaskListItems from "./TaskListItems";
import AddTask from "./AddTask.js";
import style from "./listItems.module.css";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setItems(items.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1 className={style.dataHeading}>Add Task</h1>
      <AddTask tasks={items} setTasks={setItems} />
      <h1 className={style.listHeading}>Task List</h1>
      <button className={style.toggle} onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      <ul>
        {show &&
          items.map((item) => (
            <TaskListItems
              key={item.id}
              task={item}
              deleteTask={handleDelete}
            />
          ))}
      </ul>
    </div>
  );
};

export default ListItems;
