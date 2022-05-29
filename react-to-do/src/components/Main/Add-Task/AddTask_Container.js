import React, { useState } from "react";
import { connect } from "react-redux";
import {addPostActionCreator,apdateNewTaskChangeActionCreator} from "../../../redux/addMessageReducer"
import AddTask from "./AddTask";
// const AddTaskContainer = (props) => {
//    let addTask = () => {
//       props.dispatch(addPostActionCreator()) 
//    }
//    let OnTaskChange = (textInput) => {
//       props.dispatch(apdateNewTaskChangeActionCreator(textInput))
//    }
//    return(
//       <AddTask addPost = {addTask} apdateNewTask = {OnTaskChange} newMassage = {props.newMassage.getState()}/>
//    )
// }

let mapStateToProps = (state) => {
   return {
      newMassage:state
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addPost:() => {dispatch(addPostActionCreator())},
      apdateNewTask: (textInput) => {dispatch(apdateNewTaskChangeActionCreator(textInput))}
   }
}
const AddTaskContainer = connect (mapStateToProps,mapDispatchToProps) (AddTask)
export default AddTaskContainer