import React, {useState} from "react";
import {Link} from 'react-router-dom';
import sidebardData from "./Siderbar.data";
import {Col} from "react-flexbox-grid";
import SidebarNav from "./SidebarNav";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import Input from "../shared/Form/Input";
import Routes from "../../constants/routes";

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
                      <input type="radio" />
                      <input type="radio" />
                      <input type="radio" />
                  </div>
              </div>
              <footer className="mna-popover__footer">

              </footer>
      </div>
  )
};

const SidebarContainer = () => {
    return (
        <div className="mna-sidebar flex-column">
            <button type="button">open close</button>
            <SidebarNav sidebardData={sidebardData}/>
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
