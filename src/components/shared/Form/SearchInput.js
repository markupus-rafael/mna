import React from "react";
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import debounce from "lodash/debounce";
import PropTypes from "prop-types";
import searchIco from "../../../asset/img/search-ico.svg";

const SearchInput = ({onChange, debounceDelay, ...rest}) => {
    return (
       <div className="mna-search-block">

           <img src={searchIco} alt="search icon" className="mna-search-block__ico"/>
           <input type="search" className="mna-input" onChange={debounce(onChange, debounceDelay)} {...rest}/>
       </div>
    )
};

SearchInput.defaultProps = {
    debounceDelay: 800
};

SearchInput.propTypes = {
    handleSearchChange: PropTypes.func,
    value: PropTypes.string,
    debounceDelay: PropTypes.number,
};

export default SearchInput;
