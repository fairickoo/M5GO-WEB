import React,{Component} from "react"
import "../Buttons/Button.css"
class ButtonPc extends Component{
    container = React.createRef();
    state = {
      open: false,
    };
    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = event => {
      if (this.container.current && !this.container.current.contains(event.target)) {
        this.setState({
          open: true,
        });
      }
    };
    handleButtonClick = () => {
      this.setState(state => {
        return {
          open: !state.open,
        };
      });
    };
    handleClickClose = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
      };
    render(){
        return(
            <div className="ButtonPc">
                <div className="container"  ref={this.container}>
                    <button className="BControl"
                        onClick={this.handleButtonClick}
                    >
                       Control 
                    </button>
                </div>
                {this.state.open && (
                    <div class="container">
                        <ul>
                            <div className="HeadCon">Control Your Pc
                            <button className="Bclose" onClick={this. handleClickClose}></button>
                            </div>
                            <div className="con">
                                <button className="Bvoice">voice</button>
                            </div>
                            <div className="con">
                                <button className="Bsample">1</button>   
                                <button className="Bsample">2</button> 
                                <button className="Bsample">3</button>
                                </div>
                            <div className="con">
                                <button className="Bsample">4</button> 
                                <button className="Bsample">5</button> 
                                <button className="Bsample">6</button>
                                </div>
                         </ul>
                    </div>
                )}
             
            </div>
        );
    }
}
export default ButtonPc;