import React from "react";

const Input = ({className, ...props}) => {
    return (
        <input className={`mna-input ${className}`}
               {...props}
        />
    )
};

export default Input;