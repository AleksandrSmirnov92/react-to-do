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
    // componentDidMount() {
    //     if (localStorage.getItem("todo")) {
    //       this.state = JSON.parse(localStorage.getItem("todo"));
    //       }
    // }
    render () {
    //    console.log(this.state.addMessage)
   return(
       this.state.addMessage.map((p, index)=>{
        if (this.state.addMessage[index].url === "/ALLACTIVE" && this.state.addMessage[index].checked === false) {
            return (
                <div key={p.id} className={`${FooterCSS.add_task_result1} ${p.checked ? FooterCSS.add_task_chacked_color : ""}`}>
                    <span className={`${FooterCSS.add_task_result_text} ${p.checked ? FooterCSS.add_task_result_text_t : ""}`} id={p.id}>{p.massage}{index}</span>
                    <div>
                    <input type ="checkbox"  id={p.id} onClick={() => {this.checked(p.id)}} defaultChecked = {p.checked ? true : false}/>
                    {index}
                    <button onClick={() => {this.remove(p.id)}} className={FooterCSS.add_task_result_text_remove} id={p.id}>удалить {index}</button>
                    </div>
                </div>
               )
        }
        else if (this.state.addMessage[index].url === "/ALLINACTIVE" && this.state.addMessage[index].checked === true) {
            return (
                <div key={p.id} className={`${FooterCSS.add_task_result1} ${p.checked ? FooterCSS.add_task_chacked_color : ""}`}>
                    <span className={`${FooterCSS.add_task_result_text} ${p.checked ? FooterCSS.add_task_result_text_t : ""}`} id={p.id}>{p.massage}{index}</span>
                    <div>
                    <input type ="checkbox"  id={p.id} onClick={() => {this.checked(p.id)}} defaultChecked = {p.checked ? true : false}/>
                    {index}
                    <button onClick={() => {this.remove(p.id)}} className={FooterCSS.add_task_result_text_remove} id={p.id}>удалить {index}</button>
                    </div>
                </div>
               )
        }
        else {
            return (
                <div key={p.id} className={`${FooterCSS.add_task_result1} ${p.checked ? FooterCSS.add_task_chacked_color : ""}`}>
                    <span className={`${FooterCSS.add_task_result_text} ${p.checked ? FooterCSS.add_task_result_text_t : ""}`} id={p.id}>{p.massage}{index}</span>
                    <div>
                    <input type ="checkbox"  id={p.id} onClick={() => {this.checked(p.id)}} defaultChecked = {p.checked ? true : false}/>
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