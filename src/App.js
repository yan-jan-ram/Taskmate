import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import ListItems from "./components/ListItems";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <h1 className="taskmate">Taskmate</h1>
      <Counter />
      <ListItems />
      <Footer />
    </>
  );
};

export default App;
