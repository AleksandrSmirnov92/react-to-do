import React from "react";
let ADD_POST = "ADD_POST";
let APDATE_NEW_TASK_CHANGE = "APDATE_NEW_TASK_CHANGE";
let REMOVE_ADD_TASK = "REMOVE_ADD_TASK";
let CHANGE_CHECKED = "CHANGE_CHECKED";
let b = 0;
let initialState = {
  
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
  
};

const addMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.Message.newMessage.trim() !== "") {
        let newTask = {
          id: b,
          massage: state.Message.newMessage,
          checked: false,
        };
        b++;
        state.Message.addMessage.push(newTask);
        state.Message.newMessage = "";
        state.counter.count++;
        console.log("все работает");
        return state;
      } else {
        alert("Вы ничего не ввели");
      }
    case APDATE_NEW_TASK_CHANGE:
      state.Message.newMessage = action.newText;
      return state;

    case REMOVE_ADD_TASK:
      let result = state.Message.addMessage.filter(
        (item) => item.id !== action.id
      );
      state.Message.addMessage = result;
      return state;
    case CHANGE_CHECKED:
      for (let item of state.Message.addMessage) {
        if (item.id === action.index) {
          item.checked = !item.checked;
          break;
        }
      }
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const apdateNewTaskChangeActionCreator = (newText) => {
  return {
    type: APDATE_NEW_TASK_CHANGE,
    newText: newText,
  };
};
export const removeAddTaskActionCreator = (id) => {
  return {
    type: REMOVE_ADD_TASK,
    id: id,
  };
};
export const changeCheckedActionCreator = (index) => {
  return {
    type: CHANGE_CHECKED,
    index: index,
  };
};

export default addMessageReducer;
