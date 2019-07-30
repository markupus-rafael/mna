import React from 'react';
import PropTypes from "prop-types";
import Paper from "./Paper";
import {Col, Row} from "react-flexbox-grid";

const ActionCard = ({title, text, buttonText, onClick, btnClassName}) =>
    <div className={`paper paper--action`}>
        <Row middle="xs">
            <Col lg={11} xs={12}  md={6}>
                <h5 className="title title--collapse">{title}</h5>
                <p>{text}</p>
            </Col>
            <Col lg={1}  xs={12} md={6}  className="text-right">
                <button className={`mna-btn ${btnClassName}`} type="button" onClick={onClick}>{buttonText}</button>
            </Col>
        </Row>
    </div>;

ActionCard.propTypes = {
    buttonText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    btnClassName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ActionCard;

