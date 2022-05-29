import React from 'react';
import './App.css';
import appCSS from "./app.module.css"
import FooterContainer from './components/footer/footer_container';
// import Header from "./components/Header/Header"
import HeaderContainer from './components/Header/Header_container';
import Main from './components/Main/Main';

function App(props) {
 
  return (
    <div className={`${appCSS.wrapper} + ${appCSS._container}`}>
     <HeaderContainer/>
     <Main />
     <FooterContainer />
    </div>
    
  );
}

export default App;
