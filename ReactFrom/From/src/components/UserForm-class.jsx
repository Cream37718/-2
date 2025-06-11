import React, {Component} from "react";

class UserForms extends Component{
    state ={
        fullname:'',
        address:''
    }
    onFullName = (e) => {
        this.setState({
            fullname: e.target.value
        })
    }
    onAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    onSubmit = (e)=> {
        alert(this.state.fullname + ' ' + this.state.address);
        e.preventDefault();
    }
    render(){
        const {fullname, address} = this.state
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="txtFullName">ชื่อ-สกุล :</label>
                        <input type="text" name="txtFullName" id="txtFullName" className="form-control" placeholder="ชื่อ-สกุล"
                        value={fullname} onChange={this.onFullName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtAddress">ที่อยู่ :</label>
                        <input type="text" name="txtAddress" id="txtAddress" className="form-control" placeholder="ที่อยู่" 
                        value={address} onChange={this.onAddress}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="cancel" className="btn btn-danger">Cancel</button>
                </form>
            </div>
        )
    }
}
export default UserForms;