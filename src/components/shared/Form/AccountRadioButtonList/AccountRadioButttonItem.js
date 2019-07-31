import React from "react";

const AccountRadioButtonItem = ({labelText, name, value}) => {
    return (
            <div className="account-radio-list__item">
                <input type="radio" name={name} value={value} />
                <label htmlFor="test">
                    {labelText}
                </label>
            </div>
    )
};

export default AccountRadioButtonItem;

