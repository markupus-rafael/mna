import React, {useState} from 'react';
import PropTypes from "prop-types";
import faker from 'faker'
import _ from 'lodash'
import {Dropdown, Input} from 'semantic-ui-react'
import {Col, Row} from "react-flexbox-grid";

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
const Select = ({className}) => {
    const [search, setSearchQuery] = useState({
        query: '',
        value: null
    });

    const [number, setNumber] = useState({});



    const handleChange = (e, { searchQuery, value }) => {
        setSearchQuery({ searchQuery, value })
    };

    const inputChange = (e, data) => {
        console.log(data);
        console.log(e);

    };

    const dropdownOnChange = (e, data) => {
        console.log(data);
        setNumber({...number, [e.target.name]: e.target.value, });
    };
    console.log(number);

    const handleSearchChange = (e, { searchQuery }) => setSearchQuery({ searchQuery });
    console.log(search);
    return(
        <Row>
                <Col xs={6} md={6}>
                    <Dropdown
                        fluid
                        // multiple
                        onChange={handleChange}
                        onSearchChange={handleSearchChange}
                        options={stateOptions}
                        className="mna-select"
                        placeholder='Status'
                        search
                        searchQuery={search.query}
                        selection
                        value={search.value}
                    />
                </Col>

            <Col>
                <Input
                    label={<Dropdown defaultValue='+44'  className="" name="code" options={options} onChange={dropdownOnChange}/>}
                    onChange={dropdownOnChange}
                    name="phone"
                    type="number"
                    className="mna-input"
                    labelPosition='left'
                    placeholder='Phone'
                />

            </Col>

        </Row>

    )
};


Select.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Select;

