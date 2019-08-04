import React from "react";
import PropTypes from "prop-types";
import AccountRadioButton from "./AccountRadioButttonItem";

const AccountRadioButtonList = ({items}) => {
    return (
            <div className="account-radio-list account-radio-list--column">
                { items.map( item => <AccountRadioButton name={item.name} labelText={item.labelText} value={item.value} />) }
            </div>
    )
};

AccountRadioButtonList.propTypes = {
    items: PropTypes.arrayOf(),
    row: PropTypes.bool,
    column: PropTypes.bool,
}

export default AccountRadioButtonList;

