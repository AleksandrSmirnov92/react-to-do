import React from "react";
import {removeAddTaskActionCreator,changeCheckedActionCreator} from "../../redux/addMessageReducer"
import Footer from "./footer"
const FooterContainer = (props) => {

    let remove = (id) => {
        props.dispatch(removeAddTaskActionCreator(id))
    }
    let checked = (index) => {
        props.dispatch(changeCheckedActionCreator(index))
    }
   return(
     <Footer removeAddTask = {remove} changeChecked = {checked} addMessage = {props.addMessage}/>
   )
}
export default FooterContainer