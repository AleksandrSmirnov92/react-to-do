import React from "react";
let ADD_POST = "ADD_POST"
let APDATE_NEW_TASK_CHANGE = "APDATE_NEW_TASK_CHANGE"
let REMOVE_ADD_TASK = "REMOVE_ADD_TASK"
let CHANGE_CHECKED = "CHANGE_CHECKED"
let b = 0;
let store = {
  _state: {
    Message: {
      addMessage: [
        // { id: 1, massage: "hi" ,checked: false},
        // { id: 2, massage: "How are you" ,checked: false},
        // { id: 3, massage: "you" , checked: false},
        // { id: 4, massage: "yo" ,checked: false},
        // { id: 5, massage: "yo",checked: false },
      ],
      newMessage: "",
    },
    counter: {
      count: 0,
    },
  },
  renderEntireTree() {},
  getState () {
    return this._state
  },
  subscribe(observe) {
    this.renderEntireTree = observe;
  },
 dispatch (action) {
  
   if (action.type === ADD_POST) {
    if (this._state.Message.newMessage.trim() !== "") {
      let newTask = {
        id: b,
        massage: this._state.Message.newMessage,
        checked: false,
      };
      b++;
      this._state.Message.addMessage.push(newTask);
      this._state.Message.newMessage= ""
      this._state.counter.count++;
      console.log("все работает")
      this.renderEntireTree();
     
    } else {
      alert("Вы ничего не ввели");
    }
   }
   else if (action.type === APDATE_NEW_TASK_CHANGE) {
    
    this._state.Message.newMessage = action.newText;
    this.renderEntireTree();
   }
   else if (action.type === REMOVE_ADD_TASK) {
    let result = this._state.Message.addMessage.filter((item) => item.id !== action.id);
    this._state.Message.addMessage = result;
    this.renderEntireTree();
   }
   else if (action.type === CHANGE_CHECKED) {
    for (let item of this._state.Message.addMessage) {
      if (item.id === action.index) {
        item.checked = !item.checked;
        break;
      }
    }
    this.renderEntireTree();
   }
 },



  // AddTask() {
  //   if (this._state.Message.newMessage.trim() !== "") {
  //     let newTask = {
  //       id: b,
  //       massage: this._state.Message.newMessage,
  //       checked: false,
  //     };
  //     b++;
  //     this._state.Message.addMessage.push(newTask);
  //     this._state.Message.newMessage= ""
  //     this._state.counter.count++;
  //     this.renderEntireTree();
  //   } else {
  //     alert("Вы ничего не ввели");
  //   }
  // },
  // apdateNewTaskChange(newText) {
  //   this._state.Message.newMessage = newText;
  //   this.renderEntireTree();
   
  // },
  // removeAddTask(id) {
  //   let result = this._state.Message.addMessage.filter((item) => item.id != id);
  //   this._state.Message.addMessage = result;
  //   this.renderEntireTree();
  // },
  // changeChecked(index) {
  //   for (let item of this._state.Message.addMessage) {
  //     if (item.id === index) {
  //       item.checked = !item.checked;
  //       break;
  //     }
  //   }
  //   this.renderEntireTree();
  // },

  
};

export default store;
