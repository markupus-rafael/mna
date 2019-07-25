import React, {useState} from "react";
import {Link} from 'react-router-dom';
import sidebardData from "./Siderbar.data";
import {Col} from "react-flexbox-grid";


const SidebarContainer = () => {
    return (
        <div className="mna-sidebar">
            <nav className="mna-sidebar__nav">
               <ul className="mna-sidebar__list">
                   {
                       sidebardData.map((item) =>
                           <li className="mna-sidebar__item" key={item.name}>
                               <Link className="mna-sidebar__link" to={item.path}>
                                   {item.icon}
                                   {item.title}
                               </Link>
                           </li>)
                   }
               </ul>
            </nav>
            <div className="account">
                aaa
            </div>
        </div>
    );
};



export default SidebarContainer;
