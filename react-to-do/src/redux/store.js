import React from "react"
let renderEntireTree = () => {}
let store = {
    state: {
      Message:{
        addMessage:[
          // { id: 1, massage: "hi" ,checked: false},
          // { id: 2, massage: "How are you" ,checked: false},
          // { id: 3, massage: "you" , checked: false},
          // { id: 4, massage: "yo" ,checked: false},
          // { id: 5, massage: "yo",checked: false },
        ],
        newMessage:""
      },
      counter:{
        count:0
      },
      filterValue:{
        value:null
      } 
    },
  }
  
  export let AddTask = () => { 
    if (store.state.Message.newMessage.trim() !==""){
    let newTask = {id:"", massage:store.state.Message.newMessage,checked: false}
    store.state.Message.addMessage.push(newTask)
    store.state.counter.count++
    console.log(store.state.Message.addMessage)
    renderEntireTree()
    }
    else {
      alert("Вы ничего не ввели")
    }
  }
  export let apdateNewTaskChange = (newText) => {
  store.state.Message.newMessage = newText
  renderEntireTree()
}
export let removeAddTask = (index) => {
  for (let item of store.state.Message.addMessage) {
    if (item.id === index) {
      if (store.state.counter.count > 0 && !item.checked) {
      store.state.counter.count--
    
      }
      store.state.Message.addMessage.splice(index,1)
     break
    }
  }
  
  
  renderEntireTree()
}
export function changeChecked (index) {
 for (let item of store.state.Message.addMessage) {
   
     item.checked = !item.checked
     console.log(item.checked + "меняет checkbox")
   
 }
  
  
  renderEntireTree()
  
}
  export const subscribe = (observe) => {
      renderEntireTree = observe
  }
  export default store