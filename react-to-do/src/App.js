import React from 'react';
import './App.css';
import appCSS from "./app.module.css"
import Footer from './components/footer/footer';
import Header from "./components/Header/Header"
import Main from './components/Main/Main';

function App(props) {

  return (
    <div className={`${appCSS.wrapper} + ${appCSS._container}`}>
     <Header counter={props.props.state.counter}/>
     <Main props={props} addTask={props.addTask} apdateNewTaskChange = {props.apdateNewTaskChange}/>
     <Footer addMessage={props.props.state.Message.addMessage} removeAddTask= {props.removeAddTask}/>
    </div>
    
  );
}

export default App;
