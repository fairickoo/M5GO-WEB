import React,{Component} from "react"
import  "../Todo/Todo.css"
class TodoInput extends Component{
    constructor(props){
        super(props)
        this.state={
            newTodo:""
        }
        this.addClick=this.addClick.bind(this)
    }
    addClick(){
        let {onAddTodo}=this.props
        onAddTodo(this.state.newTodo)
        this.setState({
            newTodo:""
        })
    }
    render(){
        let {newTodo}= this.state
        return(
            <div className="TodoInput">
                <input className="InputBox"
                    maxLength="30"
                    value={newTodo}
                    placeholder="add a new todo..."
                    onChange ={
                        (e)=> this.setState({
                            newTodo: e.target.value
                        })
                    }
                />
                <button className="ButtonInput"
                    onClick={this.addClick}>
                    Add
                </button>
            </div>
            
        );
    }
}
export default TodoInput;
