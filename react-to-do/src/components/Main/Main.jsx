import React from "react";
import AddTask from "./Add-Task/AddTask";
import Filter from "./Filter/Filter";
import appCSS from "../../app.module.css"
const Main = () => {
   return (
      <main>
         <AddTask/>
         <Filter/>
         <div className={appCSS.wrapper_task}>
            
         </div>
      </main>
   )
}
export default Main