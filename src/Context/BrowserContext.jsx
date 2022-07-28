import React, {createContext, useState} from 'react';

export const BrowserContextState = createContext();
const initial = {
    isLoading: false,
    isBarActive: false,
    isFrameReloading: " ",
    demoSiteUniqueId: '#helloWorld',
    currentPage: " ",
    recentSessionPages: [],
    searchHistory: ['www.google.com', 'www.facebook.com', 'www.youtube.com'],
    isHistory: false,
    isShowWallet: false,
    walletAddress: "",
    isAuth: false,
    isLogin: false,
    isSignup: false,
    isSettings: false,
    isClose: true,
    signUpData: {},
    isSignUpSuccess: false,
    loginData: {},
    isSideBarOpen: false,
    isPublish: false,
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