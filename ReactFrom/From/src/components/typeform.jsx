import React from "react";

function TypeForm() {
    return(
        <div>
            <form >
                <div className="Form-Group">
                    <label htmlFor="txtFullName">text :</label>
                    <input type="text" name="txtFullName" id="txtFullName" className="form-control" placeholder="ข้อความธรรมดา" />
                </div>
                <div className="Form-Group">
                    <label htmlFor="txtPassword">password :</label>
                    <input type="password" name="txtPassword" id="txtPassword" className="form-control" placeholder="รหัส password" />
                </div>
                <div className="Form-Group">
                    <label htmlFor="txtNumber">number :</label>
                    <input type="number" name="txtNumber" id="txtNumber" className="form-control" placeholder="ตัวเลข" />
                </div>
                <div className="Form-Group">
                    <label htmlFor="txtTel">Tel :</label>
                    <input type="tel" name="txtTel" id="txtTel" className="form-control" placeholder="เบอร์โทรศัพท์" />
                </div>
                <div className="Form-Group">
                    <label htmlFor="txtSearch">ค้นหา :</label>
                    <input type="Search" name="txtSearch" id="txtSearch" className="form-control" placeholder="Search" />
                </div>
                <div className="Form-Group">
                    <label htmlFor="txtEmail">e-mail :</label>
                    <input type="email" name="txtEmail" id="txtEmail" className="form-control" placeholder="E-mail" />
                </div>
            </form>
        </div>
    )
}
export default TypeForm