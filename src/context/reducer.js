import {ADD_TODO, REMOVE_TODO} from "./actions.types";



export default(state, action) => {
    switch(action.type) { //action.type = what action we going to do with this application
        case "ADD_TODO": 
            return [...state, action.payload]; //action.payload contains an information
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload); //filter returns a new arry which contains the values when the conditions are true
        default:
            return state;
    }
}