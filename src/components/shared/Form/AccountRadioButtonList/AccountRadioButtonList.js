import React from "react";
import AccountRadioButton from "./AccountRadioButttonItem";

const AccountRadioButtonList = ({items}) => {
    return (
            <div className="account-radio-list account-radio-list--column">
                { items.map( item => <AccountRadioButton name={item.name} labelText={item.labelText} value={item.value} />) }
            </div>
    )
};

export default AccountRadioButtonList;

