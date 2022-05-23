import React from "react";
import FooterCSS from "./footer.module.css"
const Footer = (props) => {
   
    let remove = (index) => {
        alert(`я тебя удалю ${index}`)
    }
   return(
       props.addMessage.map((p, index)=>{
           return (
            <div className={FooterCSS.add_task_result}>
                <span className={FooterCSS.add_task_result_text} id={p.id=index}>{p.massage}{index}</span>
                <div>
                <input type ="checkbox" className={FooterCSS.checkbox_task} id={index}/>
                {index}
                <button onClick={() => {remove(index)}} className={FooterCSS.add_task_result_text_remove} id={index}>удалить {index}</button>
                </div>
            </div>
            
           )
       })
   )
}
export default Footer