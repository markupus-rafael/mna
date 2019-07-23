import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import loginImg from "./login.svg";
import LoginContainer from "../../components/Login/LoginContainer";
import './login.scss';

const Login = () => {
    return (
        <div className="login">

                <Row>
                    <Col xs={6} md={6}>
                        <div className="login__left">
                            <h1>Log in to your account</h1>
                            <LoginContainer />
                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className="login__block-img">
                            <img src={loginImg} className="App-logo" alt="logo mna" />
                        </div>
                    </Col>
                </Row>

        </div>
    );
};

export default Login;
