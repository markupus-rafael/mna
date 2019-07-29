import React from "react";

const Input = ({displayError, ...props}) => {
    return (
        <input className={`mna-input ${displayError && 'mna-input--error'}`}
               {...props}
        />
    );
};

export default Input;
