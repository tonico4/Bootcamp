import React, { useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TableTasks = () => {

    const exampletask1 = new Task('Lectura', 'Leer un libro', false, LEVELS.NORMAL);
    const exampletask2 = new Task('Gym', 'Ir al gym por la tarde', false, LEVELS.URGENT);

    const [tasks, setTasks] = useState([exampletask1, exampletask2]);

    function completeTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    return (
        <table className='table'>
            <thead className='fs-3'>
                <th>Title</th>
                <th>Description</th>
                <th>Level</th>
                <th>Completed</th>
            </thead>
            <tbody className='table-group-divider'>
                {tasks.map((task, index) => {
                    return (
                        <TaskComponent
                            key={index}
                            task={task}
                            complete={completeTask}
                            remove={deleteTask}
                        >
                        </TaskComponent>
                    )
                })}
            </tbody>
        </table>
    );
};

export default TableTasks;
