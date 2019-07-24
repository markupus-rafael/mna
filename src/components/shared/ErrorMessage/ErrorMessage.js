import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({text, className}) => {
    return (
        <span className={`mna-error-msg text-uppercase ${className}`}>
              {text}
        </span>
    );
};

ErrorMessage.propTypes = {
    text: PropTypes.string,
    className: PropTypes.func,
};

export default ErrorMessage;
