import React, {useEffect, useRef} from 'react';
import {useContext} from "react";
import {BrowserContextState} from "../../Context/BrowserContext";


function Frame() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    const refFrame = useRef(null);

    useEffect(() => {
        setBrowserState({...browserState, isFrameReloading: refFrame.current})
    }, [browserState.isLoading])


    return (
        <>
            {browserState.isLoading &&
                <iframe ref={refFrame} src={browserState.demoSite} width="100%" height="100%"
                        id={browserState.demoSiteUniqueId}/>}
        </>


    );
}

export default Frame;