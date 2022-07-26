import styled from "styled-components";
import {useContext} from "react";
import {BrowserContextState} from "../../../../Context/BrowserContext";
import {Button, Typography} from "@mui/material";
import WhiteIcon from '../../../../App/assets/svg/Icons/whitePlus.svg';
import ProgressBar from '../../../../App/assets/svg/Icons/Progress Bar.svg';





const TitleText = styled.h1`
  font-size: 24px;
  color: rgba(250, 250, 251, 0.6);
  font-weight: 300;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
`
const UploaderP = styled.p`
  font-size: 14px;
  color: rgba(250, 250, 251, 0.6);
  font-weight: 300;
  margin-left: 20px;
`

const UploadContainer = styled.div`
  border: 1px solid rgba(146, 146, 157, 0.4);
  width: 100%;
  border-radius: 15px;
  margin-top: 30px;
  padding: ${props=>props.large ? '30px 5px' : '5px'};
  position: relative;
`

const WebCount = styled.div`
  margin-top: 30px;
`

const UploaderBtnStyle = {
    border: "1px dashed rgba(146, 146, 157, 0.4)",
    padding: "40px 80px",
    marginTop: "20px",
    color: "rgba(250, 250, 251, 0.6)",
    borderRadius: "15px",


}
const Img = styled.img`

`;


function Upload() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);

    return (
        <>
            <TitleText>Hi {browserState.loginData.firstName},   <UploaderP>here’s your current sites</UploaderP></TitleText>
            <UploadContainer>
                <UploaderP>Web3 Sites</UploaderP>
                <Button sx={{...UploaderBtnStyle}} component="label">
                    <Img src={WhiteIcon} alt={WhiteIcon}/>
                   <Typography paragraph={true} sx={{marginBottom:'0',marginLeft:'10px'}}> Create New Web3 Site</Typography>
                </Button>
            </UploadContainer>
            <WebCount>
                <UploaderP>
                    Stats
                </UploaderP>
                <Img src={ProgressBar}/>
                <Typography paragraph={true} sx={{color:'white',marginLeft:'20px',fontSize:'14px'}}>Available WEB3 Sites  1</Typography>
            </WebCount>

            <Button variant={`contained`} sx={{borderRadius:'20px', padding:'15px', width:'80%',maxWidth:'610px',position:'absolute', bottom:'70px',left:'50%',transform: "translateX(-50%)"}}>
                <Typography paragraph={true} sx={{color:'white',fontSize:'14px',marginBottom:'0'}}>Upgrade</Typography>
            </Button>
            <UploaderP style={{ width:'100%',position:'absolute', bottom:'40px',left:'50%',transform: "translateX(-50%)",textAlign:'center'}}>You are limited to create one web3 website only with regular account, kindly upgrade your account to add more!</UploaderP>


        </>
    );
}

export default Upload;