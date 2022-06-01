import React from "react";
// import {removeAddTaskActionCreator,changeCheckedActionCreator,updateStateActionCreator} from "../../redux/addMessageReducer"
import { connect } from "react-redux";
import App from "./App"
let mapStateToProps = (state) => {
    return {
        stateUpdate:state
    }
}

 
const AppContainer = connect (mapStateToProps, null) (App)
export default AppContainer