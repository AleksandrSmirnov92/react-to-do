import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import appCSS from "./app.module.css"
import AllTaskContainer from './components/All_TASK/All_Task_Container';
import HeaderContainer from './components/Header/Header_container';
import Main from './components/Main/Main';
import AllActiveContainer from './components/All_Active/All_Active_container';
import AllINActive from './components/All_inActive/All_inActive';
import Filtercontainer from './components/Main/Filter/Filter_container';
function App(props) {
 
  return (
    <BrowserRouter>
    <div className={`${appCSS.wrapper} + ${appCSS._container}`}>
     <HeaderContainer/>
     <Main />
     <Filtercontainer/>
     <Routes>
       <Route path='/ALL' element= {<AllTaskContainer/>}/>
       <Route path="/ALLACTIVE" element={<AllActiveContainer/>}/>
       <Route path="ALLINACTIVE" element={<AllINActive/>}/>
     </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
