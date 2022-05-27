import React from 'react';
import './App.css';
import appCSS from "./app.module.css"
import Footer from './components/footer/footer';
import Header from "./components/Header/Header"
import Main from './components/Main/Main';

function App(props) {
 
  return (
    <div className={`${appCSS.wrapper} + ${appCSS._container}`}>
     <Header counter={props.counter.count}/>
     <Main newMassage={props.newMassage} dispatch = {props.dispatch} addTask={props.addTask} apdateNewTaskChange = {props.apdateNewTaskChange}/>
     <Footer addMessage={props.addMessage} dispatch = {props.dispatch} removeAddTask= {props.removeAddTask} changeChecked= {props.changeChecked}/>
    </div>
    
  );
}

export default App;
