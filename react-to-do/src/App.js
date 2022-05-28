import React from 'react';
import './App.css';
import appCSS from "./app.module.css"
import FooterContainer from './components/footer/footer_container';
import Header from "./components/Header/Header"
import Main from './components/Main/Main';

function App(props) {
 
  return (
    <div className={`${appCSS.wrapper} + ${appCSS._container}`}>
     <Header counter={props.store.getState()}/>
     <Main newMassage={props.newMassage} dispatch = {props.dispatch} />
     <FooterContainer addMessage={props.addMessage} dispatch = {props.dispatch} />
    </div>
    
  );
}

export default App;
