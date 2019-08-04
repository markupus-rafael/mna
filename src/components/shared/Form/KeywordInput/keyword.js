import React from "react";
import PropTypes from "prop-types";

const Keyword = ({item, index, removeItem}) => (
    <div>
        <div className="mna-keyword__item">
            {item}
            <button type="button" onClick={removeItem(index)}>X</button>
        </div>
    </div>
);

Keyword.propTypes = {
    item: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired,
};


export default Keyword;