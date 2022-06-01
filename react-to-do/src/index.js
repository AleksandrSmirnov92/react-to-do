import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContainer from './app_container';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store"
// import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
// import { AddTask,subscribe,apdateNewTaskChange,removeAddTask,changeChecked} from './redux/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  
  root.render(
  
    
  <React.StrictMode>
  <Provider store = {store}>
    <AppContainer/>
    </Provider>
  </React.StrictMode>
  
  
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
