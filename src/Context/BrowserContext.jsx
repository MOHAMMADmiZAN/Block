import React, {createContext, useState} from 'react';

export const BrowserContextState = createContext();
const initial = {
    isLoading: false,
    isBarActive: false,
    isFrameReloading: '',
    isError: false,
    isSuccess: false,
    isWarning: false,
    isInfo: false,
    isErrorMessage: '',
    isSuccessMessage: '',
    isWarningMessage: '',
    isInfoMessage: '',
    demoSite: 'https://rattan-house.store/rattan-house-vtour/',
    demoSiteUniqueId: '#helloWorld',


}

function BrowserContext({children}) {
    const [browserState, setBrowserState] = useState(initial);
    return (
        <BrowserContextState.Provider value={{browserState, setBrowserState}}>
            {children}
        </BrowserContextState.Provider>
    );
}

export default BrowserContext;