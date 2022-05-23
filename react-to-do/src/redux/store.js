import React from "react"
let renderEntireTree = () => {}
let store = {
    state: {
      Message:{
        addMessage:[
          { id: 1, massage: "hi" },
          { id: 2, massage: "How are you" },
          { id: 3, massage: "you" },
          { id: 4, massage: "yo" },
          { id: 5, massage: "yo" },
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
    let newTask = {id:6, massage:store.state.Message.newMessage}
    store.state.Message.addMessage.push(newTask)
    store.state.counter.count++
    renderEntireTree()
  }
  export let apdateNewTaskChange = (newText) => {
  store.state.Message.newMessage = newText
  renderEntireTree()
}
export let removeAddTask = (index) => {
    if (store.state.Message.addMessage.id === index) (
        alert ("hai")
    )
}
  export const subscribe = (observe) => {
      renderEntireTree = observe
  }
  export default store