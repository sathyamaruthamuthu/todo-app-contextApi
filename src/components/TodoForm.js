import React, {useState, useContext} from "react";
import {Form, FormGroup, Input, InputGroup, Button} from "reactstrap";

import {v4} from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/actions.types";

const TodoForm = () => {
    const [todoString, setTodoString ] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if(todoString === ""){
            return alert("Please enter a todo");
        }

        const todo = {
            todoString,
            id : v4()
        }
        dispatch ({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("")
    }

    
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo" placeholder="Your next todo" value={todoString} onChange={e => setTodoString(e.target.value)} 
                    /> 
                    <Button color="warning" //Todo: onClick={}
                    >Add</Button>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}


export default TodoForm;