import React from 'react';
import PropTypes from "prop-types";
import Paper from "./Paper";
import {Col, Row} from "react-flexbox-grid";
import Button from "../Form/Button";

const ActionCard = ({title, text, buttonText, onClick, btnClassName}) =>
    <div className={`paper paper--action`}>
        <Row middle="xs">
            <Col lg={10} xs={12}  md={8}>
                <h5 className="title title--collapse">{title}</h5>
                <p>{text}</p>
            </Col>
            <Col lg={2}  xs={12} md={4}  className="text-right">
                <Button text={buttonText}
                        className={btnClassName}
                        onClick={onClick}
                        type="button"
                />
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