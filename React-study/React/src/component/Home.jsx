import React,{Component, component} from "react";

class Home extends Component{
    render(){
        return(
            <div>
                <h2>ข้อมูลของ Home Component</h2>
                <p>{this.props.name}</p>
                <p>{this.props.address}</p>
            </div>
        )
    }
}
export default Home