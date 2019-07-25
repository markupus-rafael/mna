import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SidebarContainer from "../Sidebar/SidebarContainer";

const Container = () => {
    return (
        <Row fluid className="full-height">
            <Col xs={12} sm={3} md={2} lg={2}>
                <SidebarContainer />
            </Col>
            <Col xs={12} sm={6} md={10} lg={10}>

            </Col>
        </Row>
    );
};

export default Container;
