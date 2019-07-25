import React, {Component} from 'react';
import Routes from "../../constants/routes";
import opportunitesIco from "../../asset/img/opportunites-ico.svg"

 const sidebardData = [
    {
        title: 'Opportunities',
        path: Routes.OPPORTUNITIES,
        icon: <img src={opportunitesIco} width={20} height={20} alt="Opportunities" />
    },
    {
        title: 'Acquirers',
        path: Routes.ACQUIRERS,
        icon: null
    },
    {
        title: 'Acquirer Criteria',
        path: Routes.ACQUIRER_CRITERIA,
        icon: null
    },
     {
         title: 'Matches',
         path: Routes.MATCHES,
         icon: null
     },
];

 export default sidebardData;
