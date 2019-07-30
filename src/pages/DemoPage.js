import React from 'react';
import Collapse from "../components/shared/Collapse/Collapse";
import ActionCard from "../components/shared/Paper/ActionCard";

const DemoPage = () => {
    return (
        <div>
            <Collapse defaultOpen={false} title="Financial Data">
                Financial Data
            </Collapse>

            <Collapse defaultOpen={true} title="Details">
                Details content
            </Collapse>
            <ActionCard title="Clone"
                        text="Make a duplicate of this Acquirer Criteria with all its settings."
                        buttonText="Clone"
                        btnClassName="mna-btn--success-without-bg"
            />

            <ActionCard title="Delete"
                        text="Once you delete an Acquirer Criteria, all Matches will also be deleted. This cannot be undone"
                        buttonText="Delete"
                        btnClassName="mna-btn--danger"
            />

        </div>
    )
};

export default DemoPage;
