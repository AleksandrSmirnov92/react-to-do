import React, { useState } from "react";
import { connect } from "react-redux";
import {activeActionCreator} from "../../../redux/addMessageReducer"
import Filter from "./Filter";

let mapStateToProps = (state) => {
   return {
      url:state
   }
}
let mapDispatchToProps = (dispatch) => {
   
   return {
      active:(navigate) => {dispatch(activeActionCreator(navigate))},
   }
}
const Filtercontainer = connect (mapStateToProps,mapDispatchToProps) (Filter)
export default Filtercontainer