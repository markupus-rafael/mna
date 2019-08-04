import {NavLink} from "react-router-dom";
import React from "react";
import menuIco from "../../asset/img/menu-ico.svg";

const SidebarNav = ({sidebardData, toggleSidebar}) => {
    return (
        <nav className="mna-sidebar__nav">
            <ul className="mna-sidebar__list">
                <li className="mna-sidebar__item">
                    <button type="button"
                            className="mna-btn--icon"
                            onClick={toggleSidebar}>
                        <img src={menuIco} alt="" />
                    </button>
                </li>
                {
                    sidebardData.map((item) =>
                        <li className="mna-sidebar__item" key={item.name}>
                            <NavLink className="mna-sidebar__link" to={item.path} activeClassName="mna-sidebar__link--active">
                                {item.icon}
                                {item.title}
                            </NavLink>
                        </li> )
                }
            </ul>
        </nav>
    )
};

export default SidebarNav