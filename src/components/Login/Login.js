import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {FormGroup} from "../shared/Form/FormGroup";
import MnaErrorMessage from "../shared/ErrorMessage/MnaErrorMessage";

const Login = ({ handleChange, handleSubmit, inputType, onIconCLick, values, errors, touched, isSubmitting, setFieldTouched }) => (
    <form className="form-login" onSubmit={handleSubmit}>
        <FormGroup type="email"
                   labelText="Email"
                   onChange={handleChange}
                   setFieldTouched={setFieldTouched}
                   value={values.email}
                   errors={errors}
                   dispayError={touched.email && errors.email}
                   inputHasError={errors && errors.email}
                   name="email"
        />

        <FormGroup type={inputType}
                   onChange={handleChange}
                   onIconCLick={onIconCLick}
                   setFieldTouched={setFieldTouched}
                   value={values.password}
                   errors={errors}
                   dispayError={touched.password && errors.password}
                   inputHasError={errors && errors.password}
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
