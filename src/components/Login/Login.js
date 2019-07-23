import React from "react";
import {FormGroup} from "../shared/Form/FormGroup";
import { Link } from 'react-router-dom'

//const test = {isSubmitting, values, errors, handleChange,touched, handleSubmit, dirty}
const Login = ({handleChange, formSubmit, inputType, onIconCLick }) => (
    <form className="form-login" onSubmit={formSubmit}>
        <FormGroup type="email"
                   labelText="Email"
                   onChange={handleChange}
                  // value={values.username}
                   name="email"/>

        <FormGroup type={inputType}
                   onChange={handleChange}
                   onIconCLick={onIconCLick}
                  // value={values.password}
                   labelText="Password"
                   name="password"/>

        <Link to="/forgotPassword" className="mna-link text-right accent" title="Forgot Password">Forgot Password</Link>

        <button className="mna-btn mna-btn--success mna-btn--login" disabled={null}>Log in</button>
    </form>
);




export default Login;
