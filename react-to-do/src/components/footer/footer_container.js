import React from "react";
import {removeAddTaskActionCreator,changeCheckedActionCreator} from "../../redux/addMessageReducer"
import Footer from "./footer"
import { connect } from "react-redux";
// const FooterContainer = (props) => {

//     let remove = (id) => {
//         props.dispatch(removeAddTaskActionCreator(id))
//     }
//     let checked = (index) => {
//         props.dispatch(changeCheckedActionCreator(index))
//     }
//    return(
//      <Footer removeAddTask = {remove} changeChecked = {checked} addMessage = {props.addMessage.getState()}/>
//    )
// }

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
 
const FooterContainer = connect (mapStateToProps, mapDispatchToProps) (Footer)
export default FooterContainer