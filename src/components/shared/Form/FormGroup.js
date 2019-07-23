import React, {Component} from "react";
import PropTypes from 'prop-types';
import Input from "./Input";
import { ToggleVisibilityButton } from "./ToggleVisibilityButton";

const isPasswordI = (name) => name === 'password';

export const FormGroup = ({type, name, labelText, value, dispayError, onChange, onIconCLick}) => {

    const isPassword = isPasswordI(name);
    const withIconBlock =  <div className="form-group__inner">
                                <Input type={type} name={name} value={value} onChange={onChange}/>
                                <ToggleVisibilityButton onClick={onIconCLick} />
                            </div>;

    return (
        <div className={`form-group`}>
            <label className={'form-group__label'} htmlFor={name}>{labelText}</label>
            {isPassword ? withIconBlock : <Input type={type} name={name} value={value} onChange={onChange}/>}
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