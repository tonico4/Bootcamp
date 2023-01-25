import React from 'react';
import { Formik, Form, Field } from 'formik';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';

const TasksForm = ( {add} ) => {

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            
        );
    }

    return (
        <div className='form-control my-3'>
            <Formik
            >
                <Form className='d-flex flex-column align-items-center justify-content-center gap-2'>
                    <div className='d-flex align-items-center justify-content-start gap-2'>
                        <label>Add a title:</label>
                        <Field></Field>
                    </div>
                    <div className='d-flex align-items-center justify-content-start gap-2'>
                        <label>Add a description:</label>
                        <Field></Field>
                    </div>

                    <select>
                        <option value={LEVELS.NORMAL}>
                            normal
                        </option>
                        <option value={LEVELS.URGENT}>
                            urgent
                        </option>
                        <option value={LEVELS.BLOCKING}>
                            blocking
                        </option>
                    </select>
                    <button type='submit' className='btn btn-success'>
                        Add task
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default TasksForm;
