import React, {useState} from "react";
import PropTypes from "prop-types";

const MnaButton = ({text, ...rest}) => {
    return <button {...rest}> {text} </button>
};

MnaButton.propTypes = {
  text: PropTypes.string
};

export default MnaButton;
