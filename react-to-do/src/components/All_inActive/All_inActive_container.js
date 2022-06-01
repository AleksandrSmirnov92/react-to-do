import React from "react";
import {removeAddTaskActionCreator,changeCheckedActionCreator} from "../../redux/addMessageReducer"
import AllINActive from "./All_inActive" 
import { connect } from "react-redux";
let mapStateToProps = (state) => {
   return {
       addMessage:state
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
       removeAddTask:(id) => { dispatch(removeAddTaskActionCreator(id))},
       changeChecked:(index) => {dispatch(changeCheckedActionCreator(index))}
   }
}

const AllINActiveContainer = connect (mapStateToProps, mapDispatchToProps) (AllINActive)
export default AllINActiveContainer