import React,{Component} from "react"
import "../Time/Time.css"
class TimeInput extends Component{
    constructor(props){
        super(props)
        this.onStart=this.onStart.bind(this)
    }
    onStart(event) {
        event.preventDefault();
        const strSeconds = this.refs.seconds.value;
        if(strSeconds.match(/[0-9]/)) {
          this.refs.seconds.value = '';
          this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
      }
    render(){
        return(
            <div className="TimeInput">
                <form ref="form" onSubmit={this.onStart}>
                    <input className="addtime" type="text" ref="seconds" placeholder="Add Time"/>
                    <button className="ButtonStart" >start</button>
                </form>
        </div>
          
        );
    }
}
export default TimeInput;

