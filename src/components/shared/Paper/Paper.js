import React from 'react';
import PropTypes from "prop-types";

const Paper = ({className, children}) =>
            <div className={`paper ${className}`}>
                {children}
            </div>;

Paper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Paper;
