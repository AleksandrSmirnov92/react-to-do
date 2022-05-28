import React from "react"
import HeaderCSS from "../Header/header.module.css"
const Header = (props) => {
let state = props.counter.addMessageReducer.counter
   return(
      <header className={HeaderCSS.header}>
        
      <div className={HeaderCSS.header_wrapper}>
         <span className={HeaderCSS.header_span}>Осталось выполнить</span>
   
         <span className={HeaderCSS.header_span2}>{state.count}</span>
      </div>
   </header>

   )
}
export default Header