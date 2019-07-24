import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {FormGroup} from "../shared/Form/FormGroup";
import ErrorMessage from "../shared/ErrorMessage/ErrorMessage";

const Login = ({ handleChange, handleSubmit, inputType, onIconCLick, values, errors, touched, isSubmitting }) => (
    <form className="form-login" onSubmit={handleSubmit}>
        <FormGroup type="email"
                   labelText="Email"
                   onChange={handleChange}
                   value={values.email}
                   errors={errors}
                   dispayError={Object.values(errors).length > 0}
                   inputError={errors && errors.email}
                   name="email"
        />

        <FormGroup type={inputType}
                   onChange={handleChange}
                   onIconCLick={onIconCLick}
                   value={values.password}
                   errors={errors}
                   dispayError={Object.values(errors).length > 0}
                   inputError={errors && errors.password}
                   labelText="Password"
                   name="password"
        />

        <Link to="/forgotPassword" className="mna-link text-right accent" title="Forgot Password">Forgot Password</Link>
        <button type="submit" className="mna-btn mna-btn--success mna-btn--login" disabled={isSubmitting}>Log in</button>
    </form>
);

Login.propTypes = {
    handleChange: PropTypes.func,
    formSubmit: PropTypes.func,
    handleSubmit: PropTypes.func,
    inputType: PropTypes.string,
    onIconCLick: PropTypes.func,
};

export default Login;
