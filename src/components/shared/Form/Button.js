import React, {useState} from "react";
import PropTypes from "prop-types";

const Button = ({text, ...rest}) => {
    return <button {...rest}> {text} </button>
};

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
