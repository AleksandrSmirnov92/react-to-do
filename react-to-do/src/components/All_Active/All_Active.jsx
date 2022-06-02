import React from "react";
import FooterCSS from "../All_TASK/All_Task.module.css"
class AllActive extends React.Component  {
   state = this.props.addMessage.addMessageReducer.Message
   chek = false
    remove = (id) => {
       this.props.removeAddTask(id)
   }
    checked = (index) => {
      setTimeout( () => {
        this.props.changeChecked(index)
      },
      2000)
   }
   
   render () {
  return(
      this.state.addMessage.map((p, index)=>{
         if (p.checked === false) {
          return (
           <div key={p.id} className={`${FooterCSS.add_task_result} ${p.cheked ? FooterCSS.add_task_chacked_color : ""}`}>
               <span className={`${FooterCSS.add_task_result_text} ${p.checked ? FooterCSS.add_task_result_text_t : ""}`} id={p.id}>{p.massage}{index}</span>
               <div>
               <input type ="checkbox"   id={p.id} onClick={() => {
                   this.checked(p.id)
                 
            }}/>
               {index}
               <button onClick={() => {this.remove(p.id)}} className={FooterCSS.add_task_result_text_remove} id={p.id}>удалить {index}</button>
               </div>
           </div>
           
          )
         }
      })
  )
   }
}


export default AllActive