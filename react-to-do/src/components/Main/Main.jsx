import React from "react";
import AddTask from "./Add-Task/AddTask";
import Filter from "./Filter/Filter";
// import appCSS from "../../app.module.css"

const Main = (props) => {
 
   
   return (
      <main>
         <AddTask newMassage = {props.newMassage} addTask = {props.addTask} apdateNewTaskChange ={props.apdateNewTaskChange}/>
         <Filter/>
      </main>
   )
}
export default Main