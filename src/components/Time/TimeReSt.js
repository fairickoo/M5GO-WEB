import React,{Component} from "react"
import "../Time/Time.css"
class TimeReSt extends Component{
   
    render(){
        let {time}= this.props
        return(
                <button className="StopReset" onClick={this.props.onClickHandler}>{this.props.label}</button>     
        );
    }
}
export default TimeReSt;

