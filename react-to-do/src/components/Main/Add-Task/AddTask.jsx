import React, { useState } from "react";
import AddTaskCSS from "../Add-Task/AddTask.module.css"

const AddTask = (props) => {
   let state = props.newMassage.addMessageReducer.Message
   let myref = React.createRef()
   let addTask = () => {
      props.addPost()
     myref.current.value = ""
     
   }
   let OnTaskChange = () => {
      let textInput = myref.current.value
      props.apdateNewTask(textInput)
   }
   return(
         <div className={AddTaskCSS.add_task}>
            <h1 className={AddTaskCSS.add_task_text}>Добавить задачу</h1>
            <div className={AddTaskCSS.add_task_input_and_button}>
               <input ref={myref} type="text"  className={AddTaskCSS.add_task_input} value={state.newMessage} onChange={OnTaskChange} />
               <button onClick={addTask} className={AddTaskCSS.button_add}>
                  <span className={AddTaskCSS.button_add_text}>Добавить</span>
               </button>
            </div>
            
         </div>
         
   )
}
export default AddTask