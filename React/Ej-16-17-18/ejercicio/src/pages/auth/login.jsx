import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import './login.css';
import {Link} from 'react-router-dom';


const Login = () => {

    const logingSchema = Yup.object().shape(
        {
            email: Yup.string()
                        .email('Invalid email format')
                        .required('Email is required'),
            password: Yup.string()
                            .min(8,'Too short')
                            .required('Insert a valid password')
        }
    )

    const credentials = {
        email: '',
        password: ''
    }

    return (
        <div className='login-div'>
            <h2 className='login-text'>Login</h2>
            <Formik
                initialValues={credentials}
                validationSchema={logingSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // We save the data in the localstorage
                    await localStorage.setItem('credentials', values);
                }}
            >
                {({
                    values, touched, errors, handleChange, handleBlur
                }) => (
                        <Form className='form'>
                            <div className='email'>
                                <label htmlFor="email">Email:</label>
                                <Field id="email" type="email" name="email" placeholder="example@email.com" />
                                {
                                    errors.email && touched.email && 
                                    (
                                        <ErrorMessage name="email" component='div'></ErrorMessage>
                                    )
                                }
                            </div>
                            <div className='password'>
                                <label htmlFor="password">Password:</label>
                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="Create a password"
                                    type='password'
                                />
                                {
                                    errors.password && touched.password && 
                                    (
                                        <ErrorMessage name="password" component='div'></ErrorMessage>
                                    )
                                }
                            </div>
                            <button className='login-btn' type='submit'>Login</button>
                        </Form>
                    )
                }
            </Formik>
            <p>or</p>
            <Link className='register-btn' to={'/register'}>Register now</Link>
        </div>
    );
};

export default Login;
