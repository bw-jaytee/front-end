import React, { useState, useEffect } from 'react';
import { Col, Button, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const RegistrationForm = ({status, setUser}) => {
    const [setUser] = useState([]);

    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status]);

    return (
        <Formik 
            initialValues={{email:'', password:'', children:0}} 
            validationSchema={SignupSchema} 
            onSubmit={(values, {setStatus, resetForm}) => {
                axios
                .post('https://reqres.in/api/users', values)
                .then(response => {
                    console.log(response.data);
                    setStatus(response.data)
                })
                .catch(error => console.log(error.response))
                .finally(() => {resetForm({})})
                }}>
            <Form>
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
                    <FormGroup row>
                    <Label for="childrenSelect" sm={2}>Number of Children</Label>
                    <Col sm={10}>
                        <Field type={"select"} name="children" id="childrenSelect" component={customInput}>
                        <option>Select Number of Children</option>
                        <option>1</option>
                        <option>2</option>
                        </Field>
                    </Col>
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
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
    password: Yup.string().min(6, 'Must be at least 6 characters').max(25, 'This is much too long, keep it under 25').required('Required'),
    children: Yup.number().required('This is for kids!')
})

export default RegistrationForm