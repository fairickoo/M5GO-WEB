import React,{Component} from "react"
import  "../Todo/Todo.css"
import TodoItem from "./TodoItem.js";
class TodoList extends Component{
    render(){
        let {items}=this.props
        return(
            <div className="todolisst">
                <ul className="list">
                    {
                        items.map((todo,i) =>
                            <div className="list" kay={i}>
                                <TodoItem className="listItem"
                                text={todo}/>
                            </div>
                        )
                    }
                </ul>
            </div>
        );
    }
}
export default TodoList;
