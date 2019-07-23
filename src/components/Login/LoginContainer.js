import React, {useState} from "react";
import {bindActionCreators, compose} from 'redux';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { FormGroup } from "../shared/Form/FormGroup";
import { withFormik } from 'formik'
import Yup from 'yup';
import Login from "./Login";
import {login} from "../../actions/login/loginsActions"; // for everything

const initialValues = {
    username: '',
    password: '',
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Required email'),
    password: Yup.string()
        .required('Required password'),
});

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
        props.loginUser(form)
    };

    const toggleVisibilityPassword = () => {
        setHidden({hidden: !inputPassword.hidden})
        console.log(inputPassword);
    };
    console.log(inputPassword);
    const inputType = inputPassword.hidden ? 'password' : 'text';
    return (
        <Login handleChange={updateField}
               formSubmit={initLogin}
               inputType={inputType}
               onIconCLick={toggleVisibilityPassword}
        />
    )
};

const mapStateToProps = store => ({
    email: store.logins.email,
    password: store.logins.password,
    token: store.logins.token
});

const mapDispatchToProps = dispatch => ({
    loginUser: data => dispatch(login(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginContainer));
