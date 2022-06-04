import React from "react";
import FooterCSS from "./All_Task.module.css"
class AllTask extends React.Component  {
    
    Message = this.props.addMessage.addMessageReducer.Message
   
     remove = (id) => {
        this.props.removeAddTask(id)
    }
     checked = (index) => {
       
         setTimeout(()=> {this.props.changeChecked(index)},2000)
        // this.props.changeChecked(index)
    } 
    checkedColorr = (index) => {
        this.props.chakedColor(index)
    }
  
    render () {
   
   return(
       this.Message.addMessage.map((p, index) => {
        if (p.url === "all" || p.url === null) {
  
            return (
                <div key={p.id} className={`${FooterCSS.add_task_result1} ${p.chekedColor ? FooterCSS.add_task_chacked_color : ""}`}>
                    <span className={`${FooterCSS.add_task_result_text} ${p.chekedColor ? FooterCSS.add_task_result_text_t : ""}`} id={p.id}>{p.massage}{index}</span>
                    <div>
                    <input type ="checkbox"  id={p.id} onClick={() => {this.checked(p.id);this.checkedColorr(p.id)}} defaultChecked = {p.checked ? true : false}/>
                    {index}
                    <button onClick={() => {this.remove(p.id)}} className={FooterCSS.add_task_result_text_remove} id={p.id}>удалить {index}</button>
                    </div>
                </div>
               )
        }
        if (p.url === "/ALLACTIVE" && p.checked === false) {
            return (
                <div key={p.id} className={`${FooterCSS.add_task_result1} ${p.chekedColor ? FooterCSS.add_task_chacked_color : ""}`}>
                    <span className={`${FooterCSS.add_task_result_text} ${p.chekedColor ? FooterCSS.add_task_result_text_t : ""}`} id={p.id}>{p.massage}{index}</span>
                    <div>
                    <input type ="checkbox"  id={p.id} onClick={() => {this.checked(p.id);this.checkedColorr(p.id)}} defaultChecked = {p.checked ? true : false}/>
                    {index}
                    <button onClick={() => {this.remove(p.id)}} className={FooterCSS.add_task_result_text_remove} id={p.id}>удалить {index}</button>
                    </div>
                </div>
               )
               
        }
        if (p.url === "/ALLINACTIVE" && p.checked === true) {
            return (
                <div key={p.id} className={`${FooterCSS.add_task_result1} ${p.chekedColor ? FooterCSS.add_task_chacked_color : ""}`}>
                    <span className={`${FooterCSS.add_task_result_text} ${p.chekedColor ? FooterCSS.add_task_result_text_t : ""}`} id={p.id}>{p.massage}{index}</span>
                    <div>
                    <input type ="checkbox"  id={p.id} onClick={() => {this.checked(p.id);this.checkedColorr(p.id)}} defaultChecked = {p.checked ? true : false}/>
                    {index}
                    <button onClick={() => {this.remove(p.id)}} className={FooterCSS.add_task_result_text_remove} id={p.id}>удалить {index}</button>
                    </div>
                </div>
               )
        }
        }
    
           
           
       )
   
   )
        
        }
    }

export default AllTask