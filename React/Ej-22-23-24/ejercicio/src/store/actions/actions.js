/**
 * Id for todos. It's incremental
 */
let nextTodoID = 0;

// Sync action types
/**
 * Type ADD_TODOddddddddddddddddddd
 */
export const ADD_TODO = 'ADD_TODO';
/**
 * Type TOGGLE_TODO
 */
export const TOGGLE_TODO = 'TOGGLE_TODO';
/**
 * Type SET_VISIBILITY_FILTER
 */
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * This method adds a new todo
 * 
 * @param {string} text 
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID ++,
            text
        }
    }
}

/**
 * This method changes the completed state of a todo
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

/**
 * This method sets the option of visibility to filter todos
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}