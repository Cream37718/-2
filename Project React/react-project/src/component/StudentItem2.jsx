import "./StudentItem.css";
import React from "react";
import StudentTag from "./StudentTag";
import { useState } from "react";

function StudentItem (props) {
    const lastname = props.surname;
    const age = props.age;
    const [name, setname] = useState(props.name)
   
    const nameHandler = () => {
        setname("Changed")
    }
    return(
        <div className="StudentItem">
            <div>{name}</div>
            <div>{lastname}</div>
            <div>{age}</div>
            <StudentTag tagAge = {age}/>
            <button onClick={nameHandler}>Click</button>
        </div>  
    );
}

export default StudentItem;