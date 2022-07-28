import React, {useEffect, useRef} from 'react';
import {useContext} from "react";
import {BrowserContextState} from "../../../Context/BrowserContext";
import FrameWindow from '../../../App/assets/svg/Icons/Shape.svg';



function Frame() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    const refFrame = useRef(null);

    useEffect(() => {
        setBrowserState({...browserState, isFrameReloading: refFrame.current})
    }, [browserState.isLoading])


    return (
        <>
            {browserState.isLoading &&
                <iframe ref={refFrame} src={browserState.currentPage} width="100%" height="100%"
                        id={browserState.demoSiteUniqueId}/>}

            {browserState.isPublish &&
                <img src={FrameWindow} alt={FrameWindow}/>

            }


        </>


    );
}

export default Frame;