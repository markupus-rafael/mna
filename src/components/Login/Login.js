import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {FormGroup} from "../shared/Form/FormGroup";
import MnaErrorMessage from "../shared/ErrorMessage/MnaErrorMessage";
import MnaButton from "../shared/Form/MnaButton";
import Input from "../shared/Form/Input";
import {ToggleVisibilityButton} from "../shared/Form/ToggleVisibilityButton";

const Login = ({ handleChange, handleSubmit, inputType, onIconCLick, values, errors, touched, isSubmitting, setFieldTouched }) => (

    <form className="form-login" onSubmit={handleSubmit}>
        <FormGroup type="email"
                   labelText="Email"
                   value={values.email}
                   errors={errors}
                   displayError={touched.email && errors.email}
                   name="email">
            <Input type="email"
                   name="email"
                   value={values.email}
                   onChange={handleChange}
                   onKeyUp={() => setFieldTouched("email", true)}
                   displayError={touched.email && errors.email}
                   error={errors && errors.email} />
        </FormGroup>
        {console.log(errors)}
        <FormGroup errors={errors}
                   dispayError={touched.password && errors.password}
                   labelText="Password"
                   name="password">
            <div className="form-group__inner">
                <Input type={inputType}
                       name="password"
                       value={values.password}
                       onChange={handleChange}
                       onKeyUp={() => setFieldTouched("password", true)}
                       displayError={touched.password && errors.password}
                       error={errors && errors.password} />
                <ToggleVisibilityButton onClick={onIconCLick} />
            </div>
        </FormGroup>

        <Link to="/forgotPassword" className="mna-link text-right accent" title="Forgot Password">Forgot Password</Link>
        <MnaButton text="Log in" type="submit" className="mna-btn mna-btn--success mna-btn--login" disabled={isSubmitting} />
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
