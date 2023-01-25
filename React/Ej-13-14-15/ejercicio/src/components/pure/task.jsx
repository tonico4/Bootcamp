import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ( {task, complete, remove} ) => {

    const completedIcon = <i onClick={() => complete(task)} className='bi-toggle-on' style={{color: 'green'}}></i>
    const notCompletedIcon = <i onClick={() => complete(task)} className='bi-toggle-off' style={{color: 'grey'}}></i>

    const completedTaskStyles = {
        color: 'grey',
        textDecoration: 'line-through'
    }

    const badgeCompletedStyle = 'badge bg-secondary mb-0';

    function setBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className={ task.completed ? badgeCompletedStyle : 'badge bg-primary mb-0'}>
                        {task.level}
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className={ task.completed ? badgeCompletedStyle : 'badge bg-warning mb-0'}>
                        {task.level}
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className={ task.completed ? badgeCompletedStyle : 'badge bg-danger mb-0'}>
                        {task.level}
                    </h6>
                )
            default:
                break;
        }
    }

    function isCompleted() {
        if (task.completed) {
            return completedIcon;
        } else {
            return notCompletedIcon;
        }
    }

    return (
        <tr className='fs-5' style={task.completed ? completedTaskStyles : null}>
            <td>
                { task.name }
            </td>
            <td>
                { task.description }
            </td>
            <td>
                { setBadge() }
            </td>
            <td className='d-flex justify-content-center gap-3'>
                { isCompleted() }
                <i className='bi-trash'
                    style={{color: 'red'}}
                    onClick={remove}
                >
                </i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default TaskComponent;