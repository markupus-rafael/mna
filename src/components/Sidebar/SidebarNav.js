import {Link} from "react-router-dom";
import React from "react";

const SidebarNav = ({sidebardData}) => {
    return (
        <nav className="mna-sidebar__nav">
            <ul className="mna-sidebar__list">
                {
                    sidebardData.map((item) =>
                        <li className="mna-sidebar__item" key={item.name}>
                            <Link className="mna-sidebar__link" to={item.path}>
                                {item.icon}
                                {item.title}
                            </Link>
                        </li> )
                }
            </ul>
        </nav>
    )
};

export default SidebarNav