import React from "react";
import {Dropdown, Input} from "semantic-ui-react";
import {Col} from "react-flexbox-grid";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";

const PhoneInput = ({options, onChange, dropdownOnChange}) => {
    return (
        <Input
            label={<Dropdown defaultValue="+44"  className="mna-dropdown-phone" name="code" options={options} onChange={dropdownOnChange}/>}
            onChange={onChange}
            name="phone"
            type="number"
            className=""
            labelPosition="left"
            placeholder="Phone"
        />
    );
};

PhoneInput.defaultProps = {
    defaultValue: '+44'
};

PhoneInput.propTypes = {
    onChange: PropTypes.func,
    defaultValue: PropTypes.string,
    dropdownOnChange: PropTypes.func,
};

export default PhoneInput;
