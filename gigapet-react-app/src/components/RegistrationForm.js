import React, { useState, useEffect } from 'react';
import { Col, Button, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const RegistrationForm = (props) => {

    const FormSubmit = (values, {setStatus}) => {
        axios
        .post('https://stilljack-gigapetbackend.herokuapp.com/createnewuser', values)
        .then(res => {
            setStatus(res.data);
            console.log(res.data)
            props.history.push(`/login`)
        })
        .catch(err => console.log(err.res))
    }

    return (
        <Formik 
            initialValues={{username:'', fullname:'', password:''}} 
            validationSchema={SignupSchema} 
            onSubmit={FormSubmit}
            >
                {props => (
            <Form className='form' onSubmit={props.handleSubmit}>
                <Label>Create Account</Label>
                <FormGroup row>
                    <Label for="inputUsername" sm={2}>Username</Label>
                    <Col sm={10}>
                        <Field type="text" name="username" id="username" placeholder="Create Username" component={customInput} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="inputFullname" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Field type="text" name="fullname" id="fullname" placeholder="Enter Full Name" component={customInput} />
                    </Col>
                </FormGroup>
                    <FormGroup row>
                    <Label for="inputPassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Field type="password" name="password" id="password" placeholder="Enter Password" component={customInput} />
                    </Col>
                </FormGroup>
                <Button className='submitButton' type='submit'>Create</Button>
            </Form>
                )}
        </Formik>
    )
};

const customInput = ({field, form: {touched, errors}, ...props}) => (
    <div>
        <Input invalid={!!(touched[field.name] && errors[field.name])} {...field} {...props} />
        {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback>}
    </div>
);
const SignupSchema = Yup.object().shape({
    username: Yup.string().min(5, 'Username must be at least 5 characters').max(20, 'Username cannot exceed 20 characters').required('Required'),
    fullname: Yup.string().required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').max(25, 'Password cannot exceed 25 characters').required('Required')
});

export default RegistrationForm