import React from "react";
import { Link } from 'react-router-dom'
import Routes from "../../constants/routes";


const Sidebar = () => {
    return (
        <>
            {Object.keys(Routes).map(item => <Link to={Routes[item]}> </Link>)}
        </>
    )
};
