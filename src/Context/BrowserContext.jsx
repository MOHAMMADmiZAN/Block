import React, {createContext, useState} from 'react';

export const BrowserContextState = createContext();
const initial = {
    isLoading: false,
    isBarActive: false,
    isFrameReloading: " ",
    demoSiteUniqueId: '#helloWorld',
    currentPage: " ",
    previousPage: " ",
    nextPage: " ",
    searchHistory: ['www.google.com', 'www.facebook.com', 'www.youtube.com'],
    isHistory: false,
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