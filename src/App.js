import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <h1>Taskmate</h1>
      <Counter />
      <Footer />
    </>
  );
};

export default App;
