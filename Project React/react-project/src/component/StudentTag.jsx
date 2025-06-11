import React from "react";
import "./StudentTag.css";

function StudentTag (props) {
    const year = new Date().getFullYear() - props.tagAge;
    const age = props.tagAge;

    let retired = age >22;
    let classYear;

    if(age%4===0){
        classYear = "Blue"
    }
    else if (age%4===1){
        classYear = "Red"
    }
    else if (age%4===2){
        classYear = "Green"
    }
    else{
        classYear = "LightBlue"
    }

    return(
        <div className="AgeGroup">
            <div className={"Tag " + classYear}>{year}</div>
            <div className={retired ? "Tag Retired" : "Tag Working"}>
                {retired ? "Retired" : "Working"}
            </div>
        </div> 
    );
}
export default StudentTag