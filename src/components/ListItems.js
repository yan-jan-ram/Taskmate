import React, { useState } from "react";
import "./listItems.css";

const ListItems = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Nikki", age: 24, status: "single", isMarried: false },
    { id: 2, name: "Ram", age: 24, status: "single", isMarried: false },
    { id: 3, name: "Swathi", age: 25, status: "married", isMarried: true },
    { id: 4, name: "Swetha", age: 25, status: "married", isMarried: true },
    { id: 5, name: "Venky", age: 25, status: "single", isMarried: false },
  ]);

  const [show, setShow] = useState(true)

  const handleDelete = (id) => [
setItems(items.filter((task) => (task.id !== id)))
  ]

  return (
    <div className="data">
      <h1 className="list">List Items</h1>
      <button className="toggle" onClick={() => setShow(!show)}>Toggle</button>
      <ul>
        {show && 
        items.map((item) => (
          <li key={item.id} className={item.isMarried ? "married" : "single"} >
            <span>
              {item.id} - {item.name} - {item.age} - {item.status} {" "}
            </span>{" "}
            &nbsp;&nbsp;
            <button className="delete" onClick={() => (handleDelete(item.id))}>Delete</button>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default ListItems;
