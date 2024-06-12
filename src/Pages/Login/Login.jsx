import React from 'react';
import './Login.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postLoginData } from './LoginAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{ email: '', password: '', }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().required('Required'),
            })}
            onSubmit={(values) => {
             dispatch(postLoginData(values, navigate));

            }}
        >
            <Form>
                <div className='login-Form-containor'>
                <div className='login-field-containor'>
                    <label className='login-form-label' htmlFor="email">Email Id</label>
                    <Field className='login-form-field' name="email" type="email" />
                    <ErrorMessage name="email" />
                </div>

                <div className='login-field-containor'>
                    <label className='login-form-label' htmlFor="password">Password</label>
                    <Field className='login-form-field' name="password" type="password" />
                    <ErrorMessage name="password" />
                </div>

                <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    );
};
export default Login