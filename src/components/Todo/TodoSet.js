import React,{Component} from "react"
import TodoHeader from "../Todo/TodoHeader.js"
import  "../Todo/Todo.css"
import TodoInput from "./TodoInput.js";
import TodoList from "../Todo/TodoList.js"
class TodoSet extends Component{
    constructor(props){
        super(props)
        this.state={
            todoitem:[]
        }
        this.addTodo = this.addTodo.bind(this)
    }
    addTodo(newTodo){
        this.setState({
            todoitem:this.state.todoitem.concat([newTodo])
        })
        
    }
    render(){
        let {todoitem}=this.state
        return(
            <div className="todo">
                <TodoHeader/>
                <TodoInput onAddTodo={this.addTodo}/>
                <TodoList  items={todoitem}/>
            </div>
             
        );
    }
}
export default TodoSet;
