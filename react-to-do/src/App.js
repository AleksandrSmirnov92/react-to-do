import React from 'react';
import {BrowserRouter, Route, Routes,Switch} from "react-router-dom";
import './App.css';
import appCSS from "./app.module.css"
import AllTaskContainer from './components/All_TASK/All_Task_Container';
import HeaderContainer from './components/Header/Header_container';
import Main from './components/Main/Main';
import AllActiveContainer from './components/All_Active/All_Active_container';
import AllInActiveContainer from "../src/components/All_inActive/All_inActive_container";
import Filtercontainer from './components/Main/Filter/Filter_container';
// import addMessageReducer from './redux/addMessageReducer';
// import {updateStateActionCreator} from "./redux/addMessageReducer"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("todo"));
  }
 componentDidMount() {
  if (localStorage.getItem("todo")) {
    this.state =JSON.parse(localStorage.getItem("todo"))
    }
 }
 
  render() {
  return (
    <BrowserRouter>
    <div className={`${appCSS.wrapper} + ${appCSS._container}`}>
     <HeaderContainer/>
     <Main />
     <Filtercontainer/>
     <Routes>
       <Route path='/ALL' element= {<AllTaskContainer/>}/>
       <Route path="/ALLACTIVE" element={<AllActiveContainer/>}/>
       <Route path="ALLINACTIVE" element={<AllInActiveContainer/>}/>
     </Routes>
    </div>

    </BrowserRouter>
  );
  }
}

export default App;
