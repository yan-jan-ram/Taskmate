import React from "react";
import Logo from "../assets/logo.png";
import style from "./header.module.css";

const Header = () => {
  return (
    <>
      <img className={style.headerLogo} src={Logo} alt="Header logo" />
    </>
  );
};

export default Header;
