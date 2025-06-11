import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
    const todoList = props.todoList;
    const currentYaer = props.currentYaer;
    const filteredTodos = todoList.filter(t => t.dueDate.getFullYear() === Number(currentYaer));

    return (
    <div className="tdl-container">
      {filteredTodos.map(e =>  <TodoItem 
        editHandler = {props.editHandler}
        deleteHandler = {props.deleteHandler}
        id = {e.id}
        task = {e.task}
        isFinished = {e.isFinished}
        dueDate = {e.dueDate}
        key = {e.id}/>)}
    </div>
  );
}

export default TodoList;
