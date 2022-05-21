
import './App.css';
import appCSS from "./app.module.css"

function App() {

  return (
    <div className={appCSS._container}>
     <header class={appCSS.header}>
        
        <div className={appCSS.header_wrapper}>
           <span class={appCSS.header_span}>Осталось выполнить</span>
           <span class={appCSS.header_span2}></span>
        </div>
     </header>
     <main>
         <div className={appCSS.add_task}>
            <h1 className={appCSS.add_task_text}>Добавить задачу</h1>
            <div className={appCSS.add_task_input_and_button}>
               <input type="text" placeholder="Напишите задачу !" className={appCSS.add_task_input}/>
               <button class={appCSS.button_add}>
                  <span class={appCSS.button_add_text}>Добавить</span>
               </button>
            </div>
         </div>

         <div className={appCSS.filter_block}>
            <select className={appCSS.filter}>
               <option class="t" value="all" selected>Выбрать все </option>
               <option class="t" value="all-active">Выбрать активные</option>
               <option class="t" value="all-inactive">Выбрать законченные</option>
            </select>
         </div>
         <div className={appCSS.wrapper_task}>
            
         </div>
      </main>
      <footer></footer>
    </div>
    
  );
}

export default App;
