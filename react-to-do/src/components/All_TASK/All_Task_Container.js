import React from "react";
import {removeAddTaskActionCreator,changeCheckedActionCreator,updateStateActionCreator,activeActionCreator} from "../../redux/addMessageReducer"
import AllTask from "./All_TAsk"
import { connect } from "react-redux";
let mapStateToProps = (state) => {
    return {
        addMessage:state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        removeAddTask:(id) => { dispatch(removeAddTaskActionCreator(id))},
        changeChecked:(index) => {dispatch(changeCheckedActionCreator(index))},
        apdateState:() => {dispatch(updateStateActionCreator())},
        active:() => {dispatch(activeActionCreator())}
    }
}
 
const AllTaskContainer = connect (mapStateToProps, mapDispatchToProps) (AllTask)
export default AllTaskContainer