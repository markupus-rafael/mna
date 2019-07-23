import React, {Component} from "react";
import PropTypes from 'prop-types';
import passwordIco from "../../../asset/img/password-ico.svg";

export const ToggleVisibilityButton = ({onClick}) =>
    <button type="button" className="mna-btn--ico" onClick={onClick}>
        <img src={passwordIco} width="20" height="17" alt="icon-password" />
    </button>;

ToggleVisibilityButton.propTypes = {
    onClick: PropTypes.func,
};