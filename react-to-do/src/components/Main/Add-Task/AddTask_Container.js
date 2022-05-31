import React, { useState } from "react";
import { connect } from "react-redux";
import {addPostActionCreator,apdateNewTaskChangeActionCreator} from "../../../redux/addMessageReducer"
import AddTask from "./AddTask";
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