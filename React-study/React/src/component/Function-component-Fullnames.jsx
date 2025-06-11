import React , {useState}from "react";

function Fullnames(){
    const [fullname , setFullname] = useState('');

    function fullnameChange(e){
        setFullname(e.target.value);
    }
    return(
        <div>
            <p>ชื่อ-นามสกุล:{fullname}</p>
            <input type="text" onChange={fullnameChange} value={fullname}/>
        </div>
    )
}
export default Fullnames;
