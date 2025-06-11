import React,{Component} from "react";

class Fullname extends Component{
    constructor(props){
        super(props);
        this.state={fullname:''};
        this.fullnameChange = this.fullnameChange.bind(this);
    }
    fullnameChange(e){
        this.setState({fullname: e.target.value});
    }
    render(){
        const {fullname} = this.state
        return(
            <div>
                <p>ชื่อ-นามสกุล : {fullname}</p>
                <input type="text" value={fullname} onChange={this.fullnameChange} />
            </div>
        )
    }
}
export default Fullname;