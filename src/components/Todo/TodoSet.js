import React,{Component} from "react"
import TodoHeader from "../Todo/TodoHeader.js"
import  "../Todo/Todo.css"
class TodoSet extends Component{
    render(){
        return(
            <div className="todo">
                <TodoHeader/>
            </div>
             
        );
    }
}
export default TodoSet;
