import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

let initialState = [];

export const todosReducer = (state=initialState, action) => {
    switch (state) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]

        case TOGGLE_TODO:
            return state.map((todo) => {
                return (todo.id === action.payload.id) ? {...todo, completed: !todo.completed} : todo
            })
    
        default:
            return state;
    }
}