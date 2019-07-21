import React,{Component} from "react"
import './App.css'
import Bg from "../Bg/Bg.js"
import Dayheader from "../Day/Dayheader.js"
import Graph from "../Graph/Graph"
import TodoSet from "../Todo/TodoSet.js"
import TimeSet from"../Time/TimeSet.js"

class App extends Component {
  render(){
    return (
      <div className="AppStyle">
          <Dayheader/>
          <Bg/>
          <TodoSet/>
          <div className ="graph">
            <Graph/>
            <TimeSet/>
          </div>
            
            
        
      </div>

        
    );
  }
  
}

export default App;
