import React from 'react';
import {NavLink} from "react-router-dom";


const PageHeader = ({title, path, linkText}) => (
        <div className="header-page">
            <h2 className="title title-page">{title}</h2>
            <NavLink to={path} className="mna-btn mna-btn--success mna-btn--medium">{linkText}</NavLink>
        </div>
);

export default PageHeader;