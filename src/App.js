import './App.css';
import React, {useReducer} from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import gameIcon from './img/game.png' ;

import todoReducer from "./context/reducer";
import { TodoContext } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{todos, dispatch}}>
        <Container fluid>
          <img src={gameIcon} alt="todoAction" className='imgFullpage' />
          <h1 className='setPos'>Todo application with context API</h1>
          <Todos />
          <TodoForm />
        </Container>
    </TodoContext.Provider>
  )
}
export default App;
