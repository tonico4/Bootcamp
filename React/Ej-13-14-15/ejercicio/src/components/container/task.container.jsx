import React from 'react';
import TableTasks from './table.tasks';

const TaskContainer = () => {

    return (
        <div className='col-8'>
            <div className='card'>
                <div className='card-header p-3'>
                    <h1 style={{'color':'black'}}>Your Tasks:</h1>
                </div>
                <div className='card-body'>
                    <TableTasks></TableTasks>
                </div>
            </div>
        </div>
    );
}

export default TaskContainer;
