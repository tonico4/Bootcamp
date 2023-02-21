import React from 'react';
import Form from '../pure/form';
import { useAppContext } from '../../hooks/context/taskContext';


const TaskContainer = () => {

    const {tasks} = useAppContext();

    return (
        <div>
            <h1>Task List</h1>
            <div>
                {
                    tasks.map((task) => {
                        return (
                            <li>{task.name} - {task.description}</li>
                        )
                    })
                }
            </div>
            <Form></Form>
        </div>
    );
};


export default TaskContainer;
