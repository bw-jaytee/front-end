import React, { useState, useEffect } from 'react';
import { Col, Button, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const RegistrationForm = ({status}) => {
    const [setUser] = useState([]);

    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status]);

    return (
        <Formik 
            initialValues={{email:'', password:''}} 
            validationSchema={SignupSchema} 
            onSubmit={FormSubmit}
            >
                {props => (
            <Form className='form' onSubmit={props.handleSubmit}>
                <FormGroup row>
                    <Label for="inputEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Field type={"email"} name="email" id="inputEmail" placeholder="Enter Email" component={customInput} />
                    </Col>
                </FormGroup>
                    <FormGroup row>
                    <Label for="inputPassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Field type={"password"} name="password" id="inputPassword" placeholder="Enter Password" component={customInput} />
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
    email: Yup.string().email('Invalid Email').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').max(25, 'This is much too long, keep it under 25').required('Required')
});
const FormSubmit = (values, {setStatus, resetForm}) => {
    axios
    .post('https://reqres.in/api/users', values)
    .then(res => {
        setStatus(res.data);
        console.log(setStatus)
    })
    .catch(err => console.log(err.res))
    .finally(() =>{
        resetForm({})
    })
}

export default RegistrationForm