import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
    const todoList = props.todoList;

    return (
    <div className="tdl-container">
      <TodoItem task={todoList[0].task} isFinished={todoList[0].isFinished} dueDate={todoList[0].dueDate} />
      <TodoItem task={todoList[1].task} isFinished={todoList[1].isFinished} dueDate={todoList[1].dueDate} />
      <TodoItem task={todoList[2].task} isFinished={todoList[2].isFinished} dueDate={todoList[2].dueDate} />
      <TodoItem task={todoList[3].task} isFinished={todoList[3].isFinished} dueDate={todoList[3].dueDate} />
    </div>
  );
}

export default TodoList;
