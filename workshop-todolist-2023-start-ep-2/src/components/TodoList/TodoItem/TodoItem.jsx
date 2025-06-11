import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const isFinished = props.isFinished;
  const task = props.task;
  const dueDate = props.dueDate;
  const date = dueDate.getDate();
  const month = dueDate.getMonth();
  const year = dueDate.getFullYear();
  console.log(isFinished)

  return (
    <div className="form-control">
      <div className="cb-container">
        <input checked={isFinished} type="checkbox" />
      </div>
      <div className="tn-container">{task}</div>
      <div className="dd-container">{date}/{month}/{year}</div>
    </div>
  );
}

export default TodoItem;
