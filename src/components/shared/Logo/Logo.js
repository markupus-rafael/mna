import React from 'react';
import PropTypes from "prop-types";
import logo from '../../../asset/img/logo.svg';

const Logo = ({className}) => {
    return (
        <>
            <img src={logo} alt="logo" className={className}/>
        </>
    );
};

Logo.propTypes = {
    className: PropTypes.string
}

export default Logo;
