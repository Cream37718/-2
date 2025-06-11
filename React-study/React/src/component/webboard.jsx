import React from "react";
function webboard({match}){
    return(
        <div>
            <h1>หน้า Webboard</h1>
            <p>
                กระทู้ปัจจุบัน : {match.params.cat}
            </p>
        </div>
    )
}
export default webboard;