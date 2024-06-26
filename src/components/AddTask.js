import React, { useState } from "react";
import style from "./addTask.module.css";

const AddTask = () => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.length > 25) {
      alert("The character length exceeded 25");
      return;
    }
    setText(e.target.value);
  };

  const handleReset = (e) => {
    setText("");
    setProgress(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      taskName: text,
      status: Boolean(progress),
    };
    handleReset();
    console.log(task);
  };

  return (
    <div>
      <section className={style.addTask}>
        <form onSubmit={handleSubmit}>
          <input
            className={style.textInput}
            onChange={handleChange}
            type="text"
            name="task"
            id="task"
            value={text}
            autoComplete="off"
            placeholder="Task Name"
          />{" "}
          &nbsp;&nbsp;
          <select
            className={style.progress}
            onChange={(e) => setProgress(e.target.value)}
            value={progress}
          >
            <option value={true}>Completed</option>
            <option value={false}>Pending</option>
          </select>{" "}
          <button className={style.addBtn} type="submit">
            Add
          </button>{" "}
          <button className={style.reset} type="button" onClick={handleReset}>
            Reset
          </button>
          <p>Text: {text}</p>
          <p>Text-Length: {text.length}</p>
        </form>
      </section>
    </div>
  );
};

export default AddTask;
