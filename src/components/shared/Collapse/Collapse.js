import React, { useState } from 'react';
import PropTypes from "prop-types";
import {Col, Row} from "react-flexbox-grid";
import Paper from "../Paper/Paper";
import  Open from "../../../asset/img/open.svg";
import  Close from "../../../asset/img/close.svg";

const Collapse = ({defaultOpen, title, children}) => {
    const [collapse, setCollapse] = useState({
        isVisible: defaultOpen
    });

    const onOpen = () => {
        setCollapse({
            isVisible: !collapse.isVisible
        })
    };
    const { isVisible } = collapse;

    const buttonContent = isVisible ? <img src={Close} alt=""/> : <img src={Open} alt=""/>;

    return (
        <Paper>
            <div className="mna-collapse">
                <Row between="xs" className="mna-collapse__header">
                    <Col xs={6}>
                        <h5 className="title title--collapse">
                            {title}
                        </h5>
                    </Col>
                    <Col xs={6} className="text-right">
                        <button className="mna-btn--icon mna-btn--default" type="button" onClick={onOpen}>
                            {buttonContent}
                        </button>
                    </Col>
                </Row>
                <Row>
                    { collapse.isVisible && children }
                </Row>
            </div>

        </Paper>
    )
};

Collapse.propTypes = {
    children: PropTypes.node.isRequired,
    defaultOpen: PropTypes.bool,
    title: PropTypes.string,
};

export default Collapse;
