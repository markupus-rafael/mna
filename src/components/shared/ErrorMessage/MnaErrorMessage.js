import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from 'formik';

const MnaErrorMessage = ({ name, className }) => {
    return (
        <ErrorMessage name={name} render={msg => <span className={`mna-error-msg text-uppercase ${className || ''}`}>{msg} {console.log(name)}</span>} />
    );
};

MnaErrorMessage.propTypes = {
    name: PropTypes.string,
    className: PropTypes.func,
};

export default MnaErrorMessage;
