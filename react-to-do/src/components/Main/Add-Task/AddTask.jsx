import React, { useState } from "react";
import AddTaskCSS from "../Add-Task/AddTask.module.css";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
  }
  state = this.props.newMassage.addMessageReducer.Message;
  myref = React.createRef();
  addTask = () => {
    this.props.addPost();
    this.myref.current.value = "";
  };
  OnTaskChange = () => {
    let textInput = this.myref.current.value;
    this.props.apdateNewTask(textInput);
  };
  onKeyPressHandler = (event) => {
    if (event.keyCode === 13) {
      this.addTask();
      this.OnTaskChange();
    }
  };
  render() {
    return (
      <div className={AddTaskCSS.add_task}>
        <h1 className={AddTaskCSS.add_task_text}>Добавить задачу</h1>
        <div className={AddTaskCSS.add_task_input_and_button}>
          <input
            ref={this.myref}
            type="text"
            onKeyDown={this.onKeyPressHandler}
            className={AddTaskCSS.add_task_input}
            value={this.state.newMessage}
            onChange={this.OnTaskChange}
          />
          <button onClick={this.addTask} className={AddTaskCSS.button_add}>
            <span className={AddTaskCSS.button_add_text}>Добавить</span>
          </button>
        </div>
      </div>
    );
  }
}
export default AddTask;
