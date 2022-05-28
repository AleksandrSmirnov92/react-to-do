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
     <Main newMassage={props.newMassage} dispatch = {props.dispatch} />
     <Footer addMessage={props.addMessage} dispatch = {props.dispatch} />
    </div>
    
  );
}

export default App;
