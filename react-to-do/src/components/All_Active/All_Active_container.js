import React from "react";
import {removeAddTaskActionCreator,changeCheckedActionCreator} from "../../redux/addMessageReducer"
import AllActive from "./All_Active"
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
 
const AllActiveContainer = connect (mapStateToProps, mapDispatchToProps) (AllActive)
export default AllActiveContainer