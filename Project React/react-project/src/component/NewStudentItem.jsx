import React from "react";
import { useState } from "react"
import "./NewStudentItem.css"

const NewStudentItem = (props) => {

    const [currentName , setcurrentName] = useState("");
    const [currentSurname , SetcurrentSurname] = useState("");
    const [currentAge , SetcurrentAge] = useState("");


    const NameChangeHandler = (event) => {
        setcurrentName(event.target.value)
    };

    const SurnameChangeHandle = (event) => {

        SetcurrentSurname(event.target.value)
    };

    const AgeChahgHandler = (event) => {
        SetcurrentAge(event.target.value)
    };

    const SubmitContainer = (event) => {
        event.preventDefault ();

        const newStudent = {
            Name: currentName,
            surname: currentSurname,
            age: Number(currentAge),
        }
        
        props.onAddStudent(newStudent)
        
        setcurrentName ("")
        SetcurrentSurname("")
        SetcurrentAge("")
    }
    return(
        <form onSubmit={SubmitContainer}>
            <div className="NewStudentContainer">
                <div className="StudentInput">
                    <label>Name</label>
                    <input onChange={NameChangeHandler} type="text" value={currentName}/>
                </div>
                <div className="StudentInput">
                    <label>Surname</label>
                    <input onChange={SurnameChangeHandle} type="text" value={currentSurname} />
                </div>
                <div className="StudentInput">
                    <label>Age</label>
                    <input  onChange={AgeChahgHandler} type="number" min="0 " max="100" step="1" value={currentAge}/>
                </div>
                <div className="SubmitButton">
                    <button type="Submit">Add Student</button>
                </div>
            </div>
        </form>
    )     
}
export default NewStudentItem