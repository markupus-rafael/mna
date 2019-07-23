import React, {Component} from "react";
import PropTypes from 'prop-types';
import Input from "./Input";

export const FormGroup = ({type, name, labelText, value, dispayError, onChange}) => {
    return (
        <div className="form-group">
            <label className={'form-group__label'} htmlFor={name}>{labelText}</label>
            <Input type={type} name={name} value={value} onChange={onChange}/>
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
    value: PropTypes.string,
};