import { createContext, useContext, useReducer } from "react";

export const TaskContext = createContext();

// Creando un Hook
const useAppContext = () => {
    return useContext(TaskContext);
}

// Reducer
const initialState = {
    tasks: []
}

const taskReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };

        case 'DELETE_TASK':
            return state.tasks.pop();
    
        default:
            return state;
    }
}

const TaskProvider = ({children}) => {

    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{tasks: state.tasks, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export {TaskProvider, useAppContext};