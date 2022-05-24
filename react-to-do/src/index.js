import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store.js"
import { AddTask,subscribe,apdateNewTaskChange,removeAddTask } from './redux/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = () => {
root.render(
  <React.StrictMode>
    <App props={store} addTask = {AddTask} apdateNewTaskChange = {apdateNewTaskChange} removeAddTask ={removeAddTask}/>
  </React.StrictMode>
);
}
renderEntireTree()
subscribe(renderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
