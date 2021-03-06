import React from "react";
let ADD_POST = "ADD_POST";
let APDATE_NEW_TASK_CHANGE = "APDATE_NEW_TASK_CHANGE";
let REMOVE_ADD_TASK = "REMOVE_ADD_TASK";
let CHANGE_CHECKED = "CHANGE_CHECKED";
let ACTIVE = "ACTIVE";
let UPDATESTATE = "UPDATESTATE";
let CHEKEDCOLOR = "CHEKEDCOLOR";
let id = 0;
let initialState = {
  Message: {
    addMessage: [],
    // [
    // { id: 1, massage: "hi" ,checked: false},
    // { id: 2, massage: "How are you" ,checked: false},
    // { id: 3, massage: "you" , checked: false},
    // { id: 4, massage: "yo" ,checked: false},
    // { id: 5, massage: "yo",checked: false },
    // ]
    newMessage: "",
  },
  counter: {
    count: 0,
  },
  url: null,
};
if (localStorage.getItem("todo")) {
  initialState.Message.addMessage = JSON.parse(localStorage.getItem("todo"));
}
if (localStorage.getItem("count")) {
  initialState.counter.count = JSON.parse(localStorage.getItem("count"));
}

if (localStorage.getItem("active")) {
  if (initialState.counter.count > 0) {
    initialState.url = JSON.parse(localStorage.getItem("active"));
  }
}
const addMessageReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case ADD_POST:
      if (stateCopy.Message.newMessage.trim() !== "") {
        let newTask = {
          id: id,
          massage: stateCopy.Message.newMessage,
          checked: false,
          url: stateCopy.url,
          chekedColor: false,
        };
        id++;
        stateCopy.Message.addMessage.push(newTask);
        stateCopy.Message.newMessage = "";
        stateCopy.counter.count++;
        localStorage.setItem(
          "todo",
          JSON.stringify(stateCopy.Message.addMessage)
        );
        localStorage.setItem("count", JSON.stringify(stateCopy.counter.count));
        console.log("все работает");
        return stateCopy;
      } else {
        alert("Вы ничего не ввели");
        return stateCopy;
      }
    case APDATE_NEW_TASK_CHANGE:
      stateCopy.Message.newMessage = action.newText;
      return stateCopy;

    case REMOVE_ADD_TASK:
      let result = stateCopy.Message.addMessage.filter(
        (item) => item.id !== action.id
      );
      for (let item of stateCopy.Message.addMessage) {
        if (item.checked === false && item.id === action.id && stateCopy.counter.count > 0) {
          stateCopy.counter.count--;
          localStorage.setItem(
            "count",
            JSON.stringify(stateCopy.counter.count)
          );

          break;
        }
      }
      stateCopy.Message.addMessage = result;
      localStorage.setItem(
        "todo",
        JSON.stringify(stateCopy.Message.addMessage)
      );
      return stateCopy;
    case CHANGE_CHECKED:
      for (let item of stateCopy.Message.addMessage) {
        if (item.id === action.index) {
          item.checked = !item.checked;
          localStorage.setItem(
            "todo",
            JSON.stringify(stateCopy.Message.addMessage)
          );
        }
      }
      return stateCopy;

    case ACTIVE:
      stateCopy.url = action.navigate;
      for (let item of stateCopy.Message.addMessage) {
        item.url = stateCopy.url;
      }
      localStorage.setItem("active", JSON.stringify(stateCopy.url));
      localStorage.setItem(
        "todo",
        JSON.stringify(stateCopy.Message.addMessage)
      );
      return stateCopy;

    case UPDATESTATE:
      if (localStorage.getItem("todo")) {
        stateCopy.Message.addMessage = JSON.parse(localStorage.getItem("todo"));
        console.log(state);
      }
      if (localStorage.getItem("count")) {
        stateCopy.counter.count = JSON.parse(localStorage.getItem("count"));
      }
      break;
    case CHEKEDCOLOR:
      for (let item of stateCopy.Message.addMessage) {
        if (item.id === action.index) {
          item.chekedColor = !item.chekedColor;
          localStorage.setItem(
            "todo",
            JSON.stringify(stateCopy.Message.addMessage)
          );
          if (item.chekedColor && stateCopy.counter.count > 0) {
            stateCopy.counter.count--;
          } else {
            stateCopy.counter.count++;
          }
          localStorage.setItem(
            "count",
            JSON.stringify(stateCopy.counter.count)
          );
          break;
        }
      }
      return stateCopy;
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
export const activeActionCreator = (navigate) => {
  return {
    type: ACTIVE,
    navigate: navigate,
  };
};
export const updateStateActionCreator = () => {
  return {
    type: UPDATESTATE,
  };
};
export const chakedColorActionCreator = (index) => {
  return {
    type: CHEKEDCOLOR,
    index: index,
  };
};
export default addMessageReducer;
// localStorage.clear()
