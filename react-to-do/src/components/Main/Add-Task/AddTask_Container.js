import React, { useState } from "react";
import {addPostActionCreator,apdateNewTaskChangeActionCreator} from "../../../redux/addMessageReducer"
import AddTask from "./AddTask";
const AddTaskContainer = (props) => {
   let addTask = () => {
      props.dispatch(addPostActionCreator()) 
   }
   let OnTaskChange = (textInput) => {
      props.dispatch(apdateNewTaskChangeActionCreator(textInput))
   }
   return(
      <AddTask addPost = {addTask} apdateNewTask = {OnTaskChange}/>
   )
}
export default AddTaskContainer