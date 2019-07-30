import React from "react";
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import {debounce} from "lodash";
import PropTypes from "prop-types";

const SearchInput = ({handleSearchChange, delay, value}) => {
    return (
        <Search
            input={{ icon: 'search', iconPosition: 'left' }}
           // loading={isLoading}
            //onResultSelect={this.handleResultSelect}
            onSearchChange={debounce(handleSearchChange, delay, {
                leading: true,
            })}
           // results={results}
            value={value}
        />
    )
};

SearchInput.defaultProps = {
    delay: 800
};

SearchInput.propTypes = {
    handleSearchChange: PropTypes.func,
    delay: PropTypes.number,
};

export default SearchInput;
