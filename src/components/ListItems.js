import React, { useState } from "react";
import TaskListItems from "./TaskListItems";
import style from "./listItems.module.css";

const ListItems = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Nikki", age: 24, status: "single", isMarried: false },
    { id: 2, name: "Ram", age: 24, status: "single", isMarried: false },
    { id: 3, name: "Swathi", age: 25, status: "married", isMarried: true },
    { id: 4, name: "Swetha", age: 25, status: "married", isMarried: true },
    { id: 5, name: "Venky", age: 25, status: "single", isMarried: false },
  ]);

  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setItems(items.filter((task) => task.id !== id));
  };

  return (
    <div className={style.data}>
      <h1 className={style.list}>List Items</h1>
      <button className={style.toggle} onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      <ul>
        {show &&
          items.map((item) => (
            <TaskListItems
              key={item.id}
              tasks={item}
              deleteTask={handleDelete}
            />
          ))}
      </ul>
    </div>
  );
};

export default ListItems;
