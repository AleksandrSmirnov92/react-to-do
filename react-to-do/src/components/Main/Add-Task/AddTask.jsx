import React from "react";
import AddTaskCSS from "../Add-Task/AddTask.module.css"
const AddTask = () => {
   return(
         <div className={AddTaskCSS.add_task}>
            <h1 className={AddTaskCSS.add_task_text}>Добавить задачу</h1>
            <div className={AddTaskCSS.add_task_input_and_button}>
               <input type="text" placeholder="Напишите задачу !" className={AddTaskCSS.add_task_input}/>
               <button class={AddTaskCSS.button_add}>
                  <span class={AddTaskCSS.button_add_text}>Добавить</span>
               </button>
            </div>
         </div>
   )
}
export default AddTask