import React from "react"
import {connect} from "react-redux"
import Header from "./Header"
let mapStateToProps = (state) => {
    return {
     counter: state
    }
}
let mapDispatchToProps = (dispatch) => {
    return{}
}

const HeaderContainer = connect (mapStateToProps,null) (Header)
export default HeaderContainer