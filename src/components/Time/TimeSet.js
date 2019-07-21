import React,{Component} from "react"
import "../Time/Time.css"
import TimeDisplay from "../Time/TimeDisplay.js"
import TimeInput from "../Time/TimeInput.js"
import TimeReSt from "../Time/TimeReSt.js";
class TimeSet extends Component{
    constructor(props) {
        super(props);
        this.state = {
          count:0,
          running: false,
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.running !== prevState.running){
          switch(this.state.running) {
            case true:
              this.handleStart();
          }
        }
      }
      
      handleStart() {
        this.timer = setInterval(() => {
          const newCount = this.state.count - 1;
          this.setState(
            {count: newCount >= 0 ? newCount : 0}
          );
        }, 1000);
      }
      
      handleStop() {
        if(this.timer) {
          clearInterval(this.timer);
          this.setState(
            {running:false}
          );
        }
      }
      
      handleReset() {
        this.setState(
          {count:0}
        );
      }
      
      handleCountdown(seconds) {
        this.setState({
          count: seconds,
          running: true
        })
      }
    render(){
        let {count} = this.state;
        return(
            <div className="TimeSet">
            <TimeDisplay time={count}/>
            <TimeInput onSetCountdown={this.handleCountdown.bind(this)}/>
            <TimeReSt className="stop" label="stop" onClickHandler={this.handleStop.bind(this)}/>
            <TimeReSt className="reset" label="reset" onClickHandler={this.handleReset.bind(this)}/>
            </div>
        );
    }
}
export default TimeSet;

