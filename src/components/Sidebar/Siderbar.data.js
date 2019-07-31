import React, {Component} from 'react';
import Routes from "../../constants/routes";
import opportunitesIco from "../../asset/img/oppor-ico.svg"
import matchesIco from "../../asset/img/matches-ico.svg";
import acquirersIco from "../../asset/img/acquirers-ico.svg";
import acIco from "../../asset/img/ac-ico.svg";

 const sidebardData = [
    {
        title: 'Opportunities',
        path: Routes.OPPORTUNITIES,
        icon: <img src={opportunitesIco} width={20} height={20} alt="Opportunities" />
    },
    {
        title: 'Acquirers',
        path: Routes.ACQUIRERS,
        icon: <img src={acIco} width={20} height={20} alt="Opportunities" />
    },
    {
        title: 'Acquirer Criteria',
        path: Routes.ACQUIRER_CRITERIA,
        icon: <img src={acquirersIco} width={20} height={20} alt="Opportunities" />
    },
     {
         title: 'Matches',
         path: Routes.MATCHES,
         icon: <img src={matchesIco} width={20} height={20} alt="Opportunities" />
     },
];

 export default sidebardData;
