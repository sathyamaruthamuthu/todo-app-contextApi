import React, {useContext} from "react"
import {ListGroup, ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"
import { TodoContext } from "../context/TodoContext"
import { REMOVE_TODO } from "../context/actions.types"


const Todos = () => {
    const {todos, dispatch} = useContext(TodoContext);
   
    return (
        <ListGroup className="mb-2 mt-5 items">
            {todos.map( (todo, index) => (
                <ListGroupItem className={( index % 2 === 0 ) ? 'evenrow' : 'oddRow'} key={todo.id}>
                    {todo.todoString} 
                <span className="pull-right" onClick={() => {
                    dispatch({
                        type: REMOVE_TODO,
                        payload: todo.id
                    })
                }}>
                    <FaCheckDouble />
                </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )

}

export default Todos;