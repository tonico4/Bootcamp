import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, Field } from 'formik';


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
        <div>
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
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" placeholder="example@email.com" />
                    <label htmlFor="password">Password</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="password"
                        type='password'
                    />
                    <button type='submit'>Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;
