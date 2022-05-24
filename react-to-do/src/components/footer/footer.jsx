import React from "react";
import FooterCSS from "./footer.module.css"
const Footer = (props) => {
   
    let remove = (index) => {
        props.removeAddTask(index)
        
    }
    let checked = (index) => {
        props.changeChecked(index)
    }
   return(
       props.addMessage.map((p, index)=>{
           return (
            <div key={index} className={`${FooterCSS.add_task_result} ${p.checked ? FooterCSS.add_task_chacked_color : ""}`}>
                <span className={`${FooterCSS.add_task_result_text} ${p.checked ? FooterCSS.add_task_result_text_t : ""}`} id={index}>{p.massage}{index}</span>
                <div>
                <input type ="checkbox"  id={p.id} onClick={() => {checked(index)}}/>
                {index}
                <button onClick={() => {remove(index)}} className={FooterCSS.add_task_result_text_remove} id={p.id}>удалить {index}</button>
                </div>
            </div>
            
           )
       })
   )
}
export default Footer