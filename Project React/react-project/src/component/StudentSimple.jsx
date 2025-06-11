import React from "react";

function StudentSimple(props){
    console.log("children", props.children)
    return(
       <div>
        StudentSimple = {" "}
        {React.Children.map(props.children,(child) => 
        React.cloneElement(child,{style:{color : "green", fontSize : "30px"}}))}
       </div>
    )
}
export default StudentSimple