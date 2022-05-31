import React from "react";
import FooterCSS from "./All_Task.module.css"
class AllTask extends React.Component  {

    state = this.props.addMessage.addMessageReducer.Message
     remove = (id) => {
        this.props.removeAddTask(id)
    }
     checked = (index) => {
        this.props.changeChecked(index)
    }
    
    render () {
        
   return(
       this.state.addMessage.map((p, index)=>{
           debugger
           return (
            <div key={p.id} className={`${FooterCSS.add_task_result} ${p.checked ? FooterCSS.add_task_chacked_color : ""}`}>
                <span className={`${FooterCSS.add_task_result_text} ${p.checked ? FooterCSS.add_task_result_text_t : ""}`} id={p.id}>{p.massage}{index}</span>
                <div>
                <input type ="checkbox"  id={p.id} onClick={() => {this.checked(p.id)}} defaultChecked = {p.checked ? true : false}/>
                {index}
                <button onClick={() => {this.remove(p.id)}} className={FooterCSS.add_task_result_text_remove} id={p.id}>удалить {index}</button>
                </div>
            </div>
            
           )
       })
   )
    }
}
export default AllTask