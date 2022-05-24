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
    let newTask = {id:6, massage:store.state.Message.newMessage,checked: false}
    store.state.Message.addMessage.push(newTask)
    store.state.counter.count++
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
      
      renderEntireTree()
    }
  }
  
  
  renderEntireTree()
}
export let changeChecked = (index) => {
  for (let item of store.state.Message.addMessage) {
    if (item.id === index) {
      item.checked = !item.checked
      if(store.state.counter.count > 0 && !item.checked) {
        store.state.counter.count++
      }
      else {
        store.state.counter.count--
        }
      break
    }
  }
  renderEntireTree()
  
}
  export const subscribe = (observe) => {
      renderEntireTree = observe
  }
  export default store