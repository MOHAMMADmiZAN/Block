import AppCss from './assets/css/App.module.css'
import Header from "../Component/Ui/Header";
import {CssBaseline} from "@mui/material";
import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
     img{
       object-fit: none!important;
     }
   `

function App() {
    return (
      <div className={AppCss.App}>
          <GlobalStyle/>
          <CssBaseline/>
          <Header/>
      </div>
    )
}

export default App
