import React from "react";
import AppCss from './assets/css/App.module.css'
import Header from "../Component/Ui/Header/Header";
import {CssBaseline} from "@mui/material";
import {createGlobalStyle} from "styled-components";
import BrowserContext from "../Context/BrowserContext";
import Frame from "../Component/Ui/Frame/Frame";
import SignUp from "../Component/Ui/SignUp/SignUp";

const GlobalStyle = createGlobalStyle`
  img {
    object-fit: none !important;
  }
`

function App() {
    return (
        <BrowserContext>
            <div className={AppCss.App}>
                <CssBaseline/>
                <GlobalStyle/>
                <Header/>
                <Frame/>
                <SignUp/>

            </div>
        </BrowserContext>
    )
}

export default App
