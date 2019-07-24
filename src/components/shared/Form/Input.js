import React from "react";

const Input = ({error, ...props}) => {
    return (
        <input className={`mna-input ${error && 'mna-input--error'}`}
               {...props}
        />
    );
};

export default Input;
