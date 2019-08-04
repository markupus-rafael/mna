import React, {useState} from 'react';
import PropTypes from "prop-types";
import faker from 'faker'
import {Col, Row} from "react-flexbox-grid";
import clsx from 'clsx';
import _ from 'lodash'
import {Dropdown, Input} from 'semantic-ui-react'
import Switcher from "../Form/Switcher";
import {FormGroup} from "../Form/FormGroup";
import PhoneInput from "../Form/PhoneInput";

const addressDefinitions= faker.definitions.address;
const stateOptions = _.map(addressDefinitions.state.slice(0, 3), (state, index) => ({
    key: addressDefinitions.state_abbr[index],
    text: state,
    value: addressDefinitions.state_abbr[index],
}));
const options = [
    { key: '+44', text: '+44', value: '+44' },
    { key: '+22', text: '+22', value: '+22' },
    { key: '+07', text: '+07', value: '+07' },
];
const Select = ({className, options, placeholder, medium, value, onShowItemsTable, name}) => {
    const [search, setSearchQuery] = useState({
        query: '',
        value: null
    });

    const [number, setNumber] = useState({});



    // const handleChange = (e, { searchQuery, value }) => {
    //     setSearchQuery({ searchQuery, value })
    // };

    const dropdownOnChange = (e, data) => {
        console.log(data);
        setNumber({...number, [e.target.name]: e.target.value, });
    };

    const handleSearchChange = (e, { searchQuery }) => setSearchQuery({ searchQuery });
    return(
        <Row>
                    <Dropdown
                        fluid
                        // multiple
                        onChange={onShowItemsTable}
                        onSearchChange={onShowItemsTable}
                        options={options}
                        name={name}
                        className={`mna-select ${clsx({
                            'mna-select--medium': medium
                        })}`}
                        //placeholder={placeholder}
                        selection
                        value={value}
                    />
        </Row>

    )
};


Select.propTypes = {
    className: PropTypes.string,
    search: PropTypes.bool,
    multiple: PropTypes.bool,
};

export default Select;


