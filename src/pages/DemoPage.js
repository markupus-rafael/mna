import React from "react";
import Collapse from "../components/shared/Collapse/Collapse";
import ActionCard from "../components/shared/Paper/ActionCard";
import SearchInput from "../components/shared/Form/SearchInput";
import matchesIco from "../asset/img/matches-ico.svg";
import TableMNA from "../components/shared/Table/TableMNA";
import KeywordInput from "../components/shared/Form/KeywordInput/KeywordInput";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
const DemoPage = () => {
    return (
        <div className="demo">
            <div className="main-wrap">
                <Collapse defaultOpen={false} title="Financial Data">
                    Financial Data
                    <img src={matchesIco} alt=""/>
                    <KeywordInput />
                </Collapse>

                <Collapse defaultOpen={false} title="Financial Data">
                    Table

                    <TableMNA />

                </Collapse>

                <Collapse defaultOpen={true} title="Details">
                    <SearchInput onChange={()=> 'as'} debounceDelay={400} value="" placeholder="Search by name or company" />
                </Collapse>

                <ActionCard title="Clone"
                            text="Make a duplicate of this Acquirer Criteria with all its settings."
                            buttonText="Clone"
                            btnClassName="mna-btn mna-btn--success-without-bg"
                            onClick={null}
                />

                <ActionCard title="Delete"
                            text="Once you delete an Acquirer Criteria, all Matches will also be deleted. This cannot be undone"
                            buttonText="Delete"
                            btnClassName="mna-btn mna-btn--danger"
                            onClick={null}
                />
            </div>


        </div>
    )
};

export default DemoPage;
