import React from "react"
import HeaderCSS from "../Header/header.module.css"
const Header = () => {

   return(
      <header class={HeaderCSS.header}>
        
      <div className={HeaderCSS.header_wrapper}>
         <span class={HeaderCSS.header_span}>Осталось выполнить</span>
         <span class={HeaderCSS.header_span2}></span>
      </div>
   </header>

   )
}
export default Header