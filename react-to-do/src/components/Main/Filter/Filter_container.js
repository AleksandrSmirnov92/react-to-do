import React, { useState } from "react";
import { connect } from "react-redux";
import {activeActionCreator} from "../../../redux/addMessageReducer"
import Filter from "./Filter";

// let mapStateToProps = (state) => {
//    return {
//       newMassage:state
//    }
// }
let mapDispatchToProps = (dispatch) => {
   return {
      active:() => {dispatch(activeActionCreator())},
   }
}
const Filtercontainer = connect (null,mapDispatchToProps) (Filter)
export default Filtercontainer