import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../../store/actions/actions';
import TodoList from '../pure/todoList';

const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;

        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);

        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);

        default:
            return filterTodos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;
