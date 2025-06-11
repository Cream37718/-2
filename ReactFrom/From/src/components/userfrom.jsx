import React, {useState} from "react";

function UserForm() {
    const [data, setData] = useState({fullname:'',address:''})
    return(
        <div className="container">
            <form>
                <div className = "form-group">
                    <label htmlFor="txtFullName">ชื่อ-นามสกุล :</label>
                    <input type="text" name="txtFullName" id = "txtFullName" className="form-control" placeholder="ชื่อ-นามสกุล"
                    value={data.fullname} onChange={e => setData({...data, fullname: e.target.value})}/>
                </div>
                <div className = "form-group">
                    <label htmlFor="txtAddress">ที่อยู่ :</label>
                    <input type="text" name="txtAddress" id="txtAddress" className="form-control" placeholder="ที่อยู่" 
                    value={data.address} onChange={e => setData({...data, address:e.target.value})} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger">Cancel</button>
            </form>
            <p>
                ชื่อ-สกุล : {data.fullname} <br />
                ที่อยู่ : {data.address}
            </p>
        </div>
    )
}
export default UserForm;