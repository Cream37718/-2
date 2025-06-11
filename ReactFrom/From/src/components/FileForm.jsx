import React from "react";

function File(){
    return(
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="cmdFile">file :</label>
                    <input type="file" name="txtFile" id="txtFile" className="form-control" />
                </div>
            </form>
        </div>
    )
}
export default File