import React, { useState } from "react";
import { NavLink,Link,useNavigate} from 'react-router-dom';
import FilterCSS from "../Filter/Filter.module.css"
const Filter = (props) => {
  
 let url = props.url.addMessageReducer.url
   let navigate = useNavigate()
   let [value,setValue] = useState()
   let text = React.createRef()
   let Nav = () => {
      
      setValue(text.current.value)
      navigate(text.current.value)
     
      props.active(text.current.value)
   }
   
   return (
      <div className={FilterCSS.filter_block}>
            <select ref={text} value={value} className={FilterCSS.filter} onChange={Nav} defaultValue={'DEFAULT'} >
               <option  value="all" selected>Выбрать все </option>
               <option  value={"/ALLACTIVE"} > Выбрать активные </option>
               <option  value={"/ALLINACTIVE"} >Выбрать законченные</option>
            </select>
            
         </div>
   )
}
export default Filter