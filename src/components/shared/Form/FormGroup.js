import React, { Component } from "react";
import PropTypes from 'prop-types';
import Input from "./Input";
import { ToggleVisibilityButton } from "./ToggleVisibilityButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const isPasswordI = (name) => name === 'password';

// TODO REFACTOR FormGroup, REMOVE withIconBlock from component

export const FormGroup = ({type, name, labelText, value, dispayError, onChange, onIconCLick, inputError, errors}) => {

    const isPassword = isPasswordI(name);
    const withIconBlock =  <div className="form-group__inner">
                                <Input type={type}
                                       name={name}
                                       value={value}
                                       onChange={onChange}
                                       error={inputError} />
                                <ToggleVisibilityButton onClick={onIconCLick} />
                            </div>;

    return (
        <div className="form-group">
            {!dispayError ? <label className="form-group__label" htmlFor={name}>{labelText}</label> : <ErrorMessage text={errors[name]} /> }

            {isPassword ? withIconBlock : <Input type={type}
                                                 onChange={onChange}
                                                 name={name}
                                                 error={inputError}
                                                 value={value}
            />}
        </div>
    )
};

FormGroup.propTypes = {
    type: PropTypes.string,
    labelText: PropTypes.string,
    dispayError: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    onChange: PropTypes.func,
    onIconCLick: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
};
