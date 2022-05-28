import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom"
// import { AddTask,subscribe,apdateNewTaskChange,removeAddTask,changeChecked} from './redux/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  debugger
  root.render(
    <BrowserRouter>
  <React.StrictMode>
    <App 
    counter={state.addMessageReducer.counter} 
    addMessage={state.addMessageReducer.Message.addMessage} 

    newMassage={state.addMessageReducer.Message.newMassage} 

   
    dispatch = {store.dispatch.bind(store)}

    />
  </React.StrictMode>
  </BrowserRouter>,
);
}
store.subscribe(() => {
  let state = store.getState()
  renderEntireTree(state);
});
renderEntireTree(store.getState());
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
