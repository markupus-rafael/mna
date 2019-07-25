import React, {useState} from "react";
import {bindActionCreators, compose} from 'redux';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import Login from "./Login";
import { login } from "../../actions/login/loginsActions";
import LoginValidation from "./validation/LoginShema";

const initialValues = {
    email: '',
    password: '',
};

const LoginContainer = (props) => {
    const [form, setValues] = useState(initialValues);
    const [inputPassword, setHidden] = useState({
        hidden: true
    });

    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const initLogin = (e) => {
        e.preventDefault();
        props.loginUser(form);
    };

    const toggleVisibilityPassword = () => setHidden({hidden: !inputPassword.hidden});

    const inputType = inputPassword.hidden ? 'password' : 'text';

        const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            setFieldTouched,
            handleBlur,
            handleSubmit,
            handleReset
        } = props;
    return (
        <Login handleChange={handleChange}
               handleSubmit={handleSubmit}
               errors={errors}
               touched={touched}
               values={values}
               isSubmitting={isSubmitting}
               setFieldTouched={setFieldTouched}
               formSubmit={initLogin}
               inputType={inputType}
               onIconCLick={toggleVisibilityPassword}
        />
    );
};

const mapStateToProps = store => ({
    email: store.logins.email,
    password: store.logins.password,
    token: store.logins.token,
    myTestValue: store.logins.myTestValue
});

const mapDispatchToProps = dispatch => ({
    loginUser: data => dispatch(login(data)),
});

export default compose(
                            connect(
                                mapStateToProps,
                                mapDispatchToProps
                            ),
                            withRouter,
                            withFormik({
                            //enableReinitialize: true,
                            mapPropsToValues: () => ({
                                email: '',
                                password: ''
                            }),
                            handleSubmit: (values, {props, setSubmitting}) => {
                                console.log("Submitted Email:", values.email);
                                console.log("Submitted Password:", values.password);
                                // Simulates the delay of a real request
                                console.log(props);
                                const payload = {
                                    ...values,
                                };
                                props.loginUser(payload);
                                // test
                                setTimeout(() => setSubmitting(false), 3 * 1000);
                            },
                            validationSchema: LoginValidation
                        }))(LoginContainer);
