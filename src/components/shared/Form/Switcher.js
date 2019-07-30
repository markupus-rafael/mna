import { Checkbox } from 'semantic-ui-react'
import React, {useState} from 'react';
import PropTypes from "prop-types";

const Switcher = ({name, value, onChange, ...rest}) => {
    return (
        <Checkbox className="mna-switcher"
                  value={value}
                  name={name}
                  onChange={onChange}
                  toggle
                  {...rest} />
    )
};

Switcher.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
};

export default Switcher;
