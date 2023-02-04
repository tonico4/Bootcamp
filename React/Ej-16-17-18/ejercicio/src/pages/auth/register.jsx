import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { User } from '../../models/user';

const Register = () => {

    let user = new User()

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                            .min(4, 'Too short')
                            .max(12, 'Too long')
                            .required('Username not valid'),
            email: Yup.string()
                        .email('Invalid email format')
                        .required('Email is required'),
            password: Yup.string()
                            .min(8,'Too short')
                            .required('Insert a valid password'),
            confirm: Yup.string()
                            .when('password', {
                                is: value => (value && value.length > 0 ? true : false),
                                then: Yup.string().oneOf(
                                    [Yup.ref('password')],
                                    'Passwords must match'
                                )
                            })
                            .required('Please, confirm the password!')
        }
    )

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: ''
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}

            >
                <Form>
                    <label htmlFor="username">Username</label>
                    <Field id="username" type="text" name="username" placeholder="Write your username"></Field>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" placeholder="example@email.com" />
                    <label htmlFor="password">Password</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="password"
                        type='password'
                    />
                    <label htmlFor="confirm">Password</label>
                    <Field
                        id="confirm"
                        name="confirm"
                        placeholder="confirm passsword"
                        type='password'
                    />
                    <button type='submit'>Sign In</button>
                </Form>
            </Formik>
        </div>
    );
};


Register.propTypes = {

};


export default Register;
