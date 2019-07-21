import React,{Component} from "react"
import  "../Todo/Todo.css"
class TodoItem extends Component{
    constructor(props){
        super(props)
        this.state={
            done:false
            ,remove:false
        }
        this.addDone=this.addDone.bind(this)
        this.removeItem=this.removeItem.bind(this)
    }
    addDone(){
        this.setState({
            done:!this.state.done
        })
    }
    removeItem(){
        this.setState({
            remove:!this.state.remove
        })
    }   
    
    render(){
        let {text}=this.props
        if(this.state.remove)
        {
            return null
        }
        return(
            <div className="TodoItem">
                <input className="box"
                    type="checkbox"
                    value={this.state.done}
                    onClick={this.addDone}
                />
                {this.state.done ? <s>{text}</s>:text}
                <button className="Buttonmove"
                 value={this.state.remove}
                 onClick={this.removeItem}
                >
                </button>
            </div>
        );
    }
}
export default TodoItem;
