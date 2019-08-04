import React from 'react';
import {NavLink} from "react-router-dom";
import {Col, Row} from "react-flexbox-grid";
import PageHeader from "../../components/PageHeader/PageHeader";
import Routes from "../../constants/routes";
import TableContainer from "../../components/PageContent/TableContainer";

const Opportunities = () => {
    return (
        <>
            <PageHeader title="Opportunities"
                        linkText="Add opportunity"
                        path={`${Routes.OPPORTUNITIES}/test`}
            />
            <TableContainer />
        </>
    )
};

export default Opportunities;