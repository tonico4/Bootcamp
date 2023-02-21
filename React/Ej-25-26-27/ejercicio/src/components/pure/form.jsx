import React, { useState, useRef } from 'react';
import { useAppContext } from '../../hooks/context/taskContext';

const Form = () => {

    const nameRef = useRef();
    const descriptionRef = useRef();

    const [name, setName] = useState();
    const [description, setDescription] = useState();

    const {dispatch} = useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addTaks = () => {
        const task = {
            name: name,
            description: description
        }
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
    }

    const deleteTask = () => {
        dispatch({
            type: 'DELETE_TASK'
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type='text' name='name' ref={nameRef} onChange={(e) => setName(e.target.value)}/>
            <label>Description: </label>
            <input type='text' name='description' ref={descriptionRef} onChange={(e) => setDescription(e.target.value)}/>
            <button type='submit' onClick={() => addTaks()}>Enviar</button>
            <button type='submit' onClick={() => deleteTask()}>Borrar</button>
        </form>
    );
};

export default Form;
