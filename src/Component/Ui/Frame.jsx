import React from 'react';
import Iframe from "react-iframe";
import {useContext} from "react";
import {BrowserContextState} from "../../Context/BrowserContext";


function Frame() {
    const {browserState} = useContext(BrowserContextState);
    return (
        <>
            {browserState.isLoading && <Iframe url={browserState.demoSite}
                                               width="100%"
                                               height="100%"
                                               id={browserState.demoSiteUniqueId}/>}
        </>


    );
}

export default Frame;