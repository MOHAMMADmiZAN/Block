import React from "react";
import AppCss from './assets/css/App.module.css'
import Header from "../Component/Ui/Header";
import {CssBaseline} from "@mui/material";
import {createGlobalStyle} from "styled-components";

import BrowserContext from "../Context/BrowserContext";
import Frame from "../Component/Ui/Frame";


const GlobalStyle = createGlobalStyle`
     img{
       object-fit: none!important;
     }
   `

function App() {
    return (
        <BrowserContext >
      <div className={AppCss.App}>
          <GlobalStyle/>
          <CssBaseline/>
          <Header/>
          <Frame/>
      </div>
        </BrowserContext>
    )
}

export default App
