import React from "react";
import "./NewTodoTask.css"
import { useState } from "react";

function NewTodoTask (props) {

    const [task,settask] = useState("")
    const [Date,setDate] = useState("")

    const clickHandler = () =>{
        const newTodo = {
            task: task,
            Date: Date,
        }
        props.addNewTodo(newTodo);

        settask("")
        setDate("")
    }

    return(
        <div className="add-container">
            <div className="input-container">
                <label>Task</label>
                <input value={task} onChange={(event) =>settask(event.target.value)} type="text"/>
            </div>
            <div className="add-button">
                <label>Due Date</label>
                <input value={Date} onChange={(event)=> setDate(event.target.value)}type="Date"/>
            </div>
            <div className="add-button">
                <button onClick={clickHandler}>Add</button>
            </div>
        </div>
    );
}
export default NewTodoTask;