import React, {createContext, useState} from 'react';

export const BrowserContextState = createContext();

function BrowserContext({children}) {
    const [browserState, setBrowserState] = useState({
        isLoading: false,
        isError: false,
        isSuccess: false,
        isWarning: false,
        isInfo: false,
        isErrorMessage: '',
        isSuccessMessage: '',
        isWarningMessage: '',
        isInfoMessage: '',
        demoSite: 'https://www.facebook.com',
        demoSiteUniqueId: '#helloWorld',


    });
    return (
        <BrowserContextState.Provider value={{browserState, setBrowserState}}>
            {children}
        </BrowserContextState.Provider>
    );
}

export default BrowserContext;