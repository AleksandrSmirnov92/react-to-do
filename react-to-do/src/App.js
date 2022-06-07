import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import appCSS from "./app.module.css";
import AllTaskContainer from "./components/All_TASK/All_Task_Container";
import HeaderContainer from "./components/Header/Header_container";
import Main from "./components/Main/Main";
import Filtercontainer from "./components/Main/Filter/Filter_container";
const App = () => {
  return (
    <BrowserRouter>
      <div className={`${appCSS.wrapper} + ${appCSS._container}`}>
        <HeaderContainer />
        <Main />
        <Filtercontainer />
        <AllTaskContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
