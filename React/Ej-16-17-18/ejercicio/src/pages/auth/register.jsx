import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { User } from '../../models/user';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {

    let user = new User();

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
        <div className='register-div'>
            <h2 className='register-text'>Create your account</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
            {({
                values, touched, errors, handleChange, handleBlur
            }) => (
                    <Form className='form'>
                        <div className='username'>
                            <label htmlFor="username">Username</label>
                            <Field id="username" type="text" name="username" placeholder="Write your username"></Field>
                            {
                                errors.username && touched.username && 
                                (
                                    <ErrorMessage name="username" component='div'></ErrorMessage>
                                )
                            }
                        </div>
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type='password'
                            />
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }

                        </div>
                        <div className='confirm'>
                            <label htmlFor="confirm">Password</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder="confirm password"
                                type='password'
                            />
                            {
                                errors.confirm && touched.confirm && 
                                (
                                    <ErrorMessage name="confirm" component='div'></ErrorMessage>
                                )
                            }

                        </div>
                        <button className='register-btn' type='submit'>Register</button>
                    </Form>
                )
            }
            </Formik>
            <p>or</p>
            <Link className='login-btn' to={'/login'}>Login</Link>
        </div>
    );
};

export default Register;
