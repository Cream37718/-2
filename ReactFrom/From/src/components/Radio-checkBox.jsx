import React from "react";

function Tick() {
    return(
        <div>
            <form>
                <div className="form-control">
                    <label className="check-radio-label">
                        <input type="radio" className="form-check-input" name="optRadio" id="optRadio" value="checkedValue" checked />
                        ข้อความกำกับ Radio
                    </label>
                </div>
                <div className="form-control">
                    <label htmlFor="form-check-label">
                        <input type="checkbox" className="form-check-input" name="chkCheckBox" id="chkCheckBox" value="checkedValue" checked/>
                        ข้อความกำกับ checkbox
                    </label>
                </div>
            </form>
        </div>
    )
}
export default Tick