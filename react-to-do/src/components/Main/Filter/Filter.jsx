import React from "react";
import FilterCSS from "../Filter/Filter.module.css"
const Filter = () => {
   return (
      <div className={FilterCSS.filter_block}>
            <select className={FilterCSS.filter}>
               <option class="t" value="all" selected>Выбрать все </option>
               <option class="t" value="all-active">Выбрать активные</option>
               <option class="t" value="all-inactive">Выбрать законченные</option>
            </select>
         </div>
   )
}
export default Filter