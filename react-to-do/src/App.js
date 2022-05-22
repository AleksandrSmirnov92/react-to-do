import React from 'react';
import './App.css';
import appCSS from "./app.module.css"
import Header from "./components/Header/Header"
import Main from './components/Main/Main';

function App() {

  return (
    <div className={`${appCSS.wrapper} + ${appCSS._container}`}>
     <Header/>
     <Main/>
      <footer></footer>
    </div>
    
  );
}

export default App;
