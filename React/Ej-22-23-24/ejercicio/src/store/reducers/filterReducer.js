import { SET_VISIBILITY_FILTER } from "../actions/actions";

let initialState = 'SHOW ALL';

export const filterReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
    
        default:
            return state;
    }
}