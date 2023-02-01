import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';

const TasksForm = ( {add} ) => {
    
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            titleRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    return (
        <div className="form-control my-3">
            <Formik
                initialValues={{
                title: "",
                description: "",
                level: LEVELS.NORMAL,
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            >
                <Form id="form" onSubmit={addTask} className="d-flex flex-column align-items-center justify-content-center gap-2">
                    <div className="d-flex align-items-center justify-content-start gap-2">
                        <label htmlFor="title">Add a title:</label>
                        <input id="title" name="title" placeholder="Title of the task" ref={titleRef}></input>
                    </div>
                    <div className="d-flex align-items-center justify-content-start gap-2">
                        <label htmlFor="description">Add a description:</label>
                        <input id="description" name="description" placeholder="Description..." ref={descriptionRef}></input>
                    </div>

                    <select name="level" ref={levelRef}>
                        <option value={LEVELS.NORMAL}>normal</option>
                        <option value={LEVELS.URGENT}>urgent</option>
                        <option value={LEVELS.BLOCKING}>blocking</option>
                    </select>
                    <button type="submit" className="btn btn-success">
                        Add task
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

TasksForm.prototype = {
    add: PropTypes.func.isRequired,
}

export default TasksForm;
