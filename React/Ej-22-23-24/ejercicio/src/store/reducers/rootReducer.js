import {combineReducers} from 'redux';
import {todosReducer} from './todosReducer';
import { userReducer } from './userReducer';
import {filterReducer} from './filterReducer';

export const rootReducer = combineReducers(
    {
        todosState: todosReducer,
        filterState: filterReducer,
        userState: userReducer
    }
)