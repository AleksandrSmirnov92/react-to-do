import React from "react";
import AddTask from "./Add-Task/AddTask";
import Filter from "./Filter/Filter";
// import appCSS from "../../app.module.css"
import AddTaskContainer from "./Add-Task/AddTask_Container";
const Main = (props) => {
 
   
   return (
      <main>
         <AddTaskContainer newMassage = {props.newMassage} dispatch = {props.dispatch} />
         <Filter/>
      </main>
   )
}
export default Main