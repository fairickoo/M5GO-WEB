import React,{Component} from "react"
import './App.css'
import Bg from "../Bg/Bg.js"
import Dayheader from "../Day/Dayheader.js";

class App extends Component {
  render(){
    return (
      <div className="AppStyle">
        <Dayheader/>
        <Bg/>
        
      </div>
        
    );
  }
  
}

export default App;
