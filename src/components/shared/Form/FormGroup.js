import React, { Component } from "react";
import PropTypes from 'prop-types';
import Input from "./Input";
import { ToggleVisibilityButton } from "./ToggleVisibilityButton";
import MnaErrorMessage from "../ErrorMessage/MnaErrorMessage";

export const FormGroup = ({
                              children,
                              name,
                              labelText,
                              displayError,
                              inputHaError,
                              errors,
                              className,
                                inline,
                              withLabel,
}) => {
    inline = inline ? 'form-group--inline' : '';
    const label = withLabel ? <label className={`form-group__label `} htmlFor={name}>{labelText}</label> : null;
    return (
        <div className={`form-group ${inline}`}>
            {!displayError ? label : <MnaErrorMessage name={name} /> }
            {children}
        </div>
    )
};

FormGroup.defaultProps = {
    withLabel: true
};

FormGroup.propTypes = {
    type: PropTypes.string,
    labelText: PropTypes.string,
    dispayError: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
};
