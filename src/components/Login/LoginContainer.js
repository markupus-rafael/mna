import React, {useState} from "react";
import { FormGroup } from "../Form/FormGroup";
import { Formik } from 'formik'
import Yup from 'yup';
import validate from './validation/validate-spected'
//import getValidationSchema from './getValidationSchema-spected'
function getYupValidationSchema() {
    return Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password: Yup
            .string()
            .required('required')
    })
}


const initialValues = {
    username: '',
    password: '',
}

const LoginContainer = () => {
    const [form, setValues] = useState(initialValues);
    // const updateField = e => {
    //     setValues({
    //         ...form,
    //         [e.target.name]: e.target.value
    //     });
    // };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={getYupValidationSchema}
            onSubmit={(values, actions) => {
                console.log(actions);
                actions.setSubmitting(true);
                setTimeout(() => {
                    actions.resetForm(initialValues);
                    actions.setSubmitting(false);
                }, 2000);
            }}
            render={SignUp}
        />
    )
};

const SignUp = ({ isSubmitting, values, errors, handleChange, handleSubmit, dirty }) => (
    <form className="form-login" onSubmit={handleSubmit}>
        <FormGroup type="text"
                   labelText="Username"
                   onChange={handleChange}
                   value={values.username}
                   name="username"/>
        <FormGroup type="password"
                   onChange={handleChange}
                   value={values.password}
                   labelText="Password"
                   name="password"/>

        <button  disabled={!dirty}>{isSubmitting ? 'Loading' : 'Login'}</button>
    </form>
);



export default LoginContainer;
