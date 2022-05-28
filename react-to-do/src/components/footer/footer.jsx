import React from "react";
import FooterCSS from "./footer.module.css"
import {removeAddTaskActionCreator,changeCheckedActionCreator} from "../../redux/addMessageReducer"
const Footer = (props) => {

    let remove = (id) => {
        props.removeAddTask(id)
    }
    let checked = (index) => {
        props.changeChecked(index)
    }
   return(
       props.addMessage.map((p, index)=>{
           return (
            <div key={p.id} className={`${FooterCSS.add_task_result} ${p.checked ? FooterCSS.add_task_chacked_color : ""}`}>
                <span className={`${FooterCSS.add_task_result_text} ${p.checked ? FooterCSS.add_task_result_text_t : ""}`} id={p.id}>{p.massage}{index}</span>
                <div>
                <input type ="checkbox"  id={p.id} onClick={() => {checked(p.id)}}/>
                {index}
                <button onClick={() => {remove(p.id)}} className={FooterCSS.add_task_result_text_remove} id={p.id}>удалить {index}</button>
                </div>
            </div>
            
           )
       })
   )
}
export default Footer