import React, { useState } from "react";
import Home from "./Home.js";
import Counter from "./Counter.js";
import ListItems from "./ListItems.js";
import Calculator from "./Calculator.js";
import Logo from "../assets/logo.png";
import style from "./header.module.css";

const Header = () => {
  const [menu, setMenu] = useState("Home");
  const renderComponent = () => {
    switch (menu) {
      case "Home":
        return <Home />;
      case "Counter":
        return <Counter />;
      case "Task":
        return <ListItems />;
      case "Calculator":
        return <Calculator />;
      default:
        return null;
    }
  };
  return (
    <>
      <img className={style.headerLogo} src={Logo} alt="Header logo" />
      <form>
        <label htmlFor="Menu"></label>
        <select
          name="Menu"
          id="Menu"
          value={menu}
          onChange={(e) => setMenu(e.target.value)}
          className={style.dropdown}
        >
          <option value="Home">Home</option>
          <option value="Counter">Counter</option>
          <option value="Task">Task</option>
          <option value="Calculator">Calculator</option>
        </select>
      </form>
      <div>{renderComponent()}</div>
    </>
  );
};

export default Header;
