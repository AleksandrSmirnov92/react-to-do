import React from "react";
import addMessageReducer from "../redux/addMessageReducer"

// let b = 0;
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
 
  this._state = addMessageReducer(this._state,action)
  this.renderEntireTree();



  
}
}




export default store;
