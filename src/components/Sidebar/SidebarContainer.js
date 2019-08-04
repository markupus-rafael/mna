import React, {useState} from "react";
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import sidebardData from "./Siderbar.data";
import {Col} from "react-flexbox-grid";
import SidebarNav from "./SidebarNav";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import Input from "../shared/Form/Input";
import Routes from "../../constants/routes";
import AccountRadioButtonList from "../shared/Form/AccountRadioButtonList/AccountRadioButtonList";
import menuIco from "../../asset/img/menu-ico.svg";

const items = [
    {
        name: "accountUser",
        value: "allData",
        labelText: "All Data",
    },
    {
        name: "accountUser",
        value: "lancliffe",
        labelText: "Lancliffe",
    },
    {
        name: "accountUser",
        value: "partnerName",
        labelText: "Partner name",
    }
];

const Content = ({className, name='Nathan Thompson'}) => {
  return (
      <div className={`${className}`}>
          <header className="mna-popover__header flex">
              <div className="mna-popover__header-avatar">
                  <img src="https://via.placeholder.com/75" alt=""/>
              </div>
              <div className="mna-popover__header-info flex-column">
                  <h5 className="">{name}</h5>
                  <Link to={Routes.ACCOUNT}
                        className="mna-btn mna-btn--success text-center"
                        title="Account">
                      My Account
                  </Link>
              </div>
          </header>
              <div className="mna-popover__body">
                  <div className="mna-popover__body-inputs">
                      <AccountRadioButtonList items={items} />
                  </div>
              </div>
              <footer className="mna-popover__footer">

              </footer>
      </div>
  )
};

const SidebarContainer = () => {
    const [open, setOpen] = useState(true);

    const toggleSidebar = () => {
        setOpen(!open)
    };

    return (
        <div className={`mna-sidebar flex-column ${clsx({
            'mna-sidebar--open': open
        })}`}>
            <SidebarNav sidebardData={sidebardData} toggleSidebar={toggleSidebar}/>
            <div className="mna-sidebar__account">
                <Popover content={<Content className="mna-popover__content"/>}
                         popoverClassName="mna-popover"
                         position={Position.TOP_LEFT}
                         target={ <button className="mna-sidebar__account-btn">
                                     All Data
                                 </button>} />

                {/*<button className="mna-sidebar__account-btn">*/}
                    {/*All Data*/}
                {/*</button>*/}

            </div>
        </div>
    );
};


export default SidebarContainer;
