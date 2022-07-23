import OverLaySection from "../../Shared/Ui/OverLaySection";
import {Box, Grid} from "@mui/material";
import CloseIcon from "../../../App/assets/svg/Icons/close.svg";
import FormInputGroup from "../../Shared/Form/FormInputGroup";
import CheckActiveIcon from "../../../App/assets/svg/Icons/checkActive.svg";
import CheckIcon from "../../../App/assets/svg/Icons/Check.svg";
import FormLink from "../../Shared/Form/FormLink";
import Form0Auth from "../../Shared/Form/Form0Auth";
import MetaMaskIcon from "../../../App/assets/svg/Icons/MetaMask_Fox.svg";
import GoogleIcon from "../../../App/assets/svg/Icons/google.svg";
import FormBtnLg from "../../Shared/Form/FormBtnLg";
import styled from "styled-components";
import {useContext, useEffect, useState} from "react";
import {BrowserContextState} from "../../../Context/BrowserContext";
import TickIcon from "../../../App/assets/svg/Icons/Tick.svg";


const TitleText = styled.h1`
  font-size: 24px;
  color: rgba(250, 250, 251, 0.6);
  font-weight: 600;
  padding-bottom: 30px;
`
const ContentSection = styled.div`
  width: 100%;
  max-width: 1270px;
  height: 60%;
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`
const ContentMainBox = styled.div`
  border: 1px solid #000;
  border-radius: 15px;
  width: 100%;
  padding: 5px;
`
const ContentMainBoxP = styled.p`
  font-size: 16px;
  color: #92929D;
  font-weight: 300;
  padding-left: 15px;
`
const ContentMainBoxSmallP = styled.p`
  font-size: 12px;
  color: #92929D;
  font-weight: 300;
  margin-left: 10px;
`
const ContentMainBoxClose = styled.div`
  font-size: 16px;
  color: #92929D;
  font-weight: 300;
  padding: 0 15px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  align-items: center;
`
const FormBox = styled.div`
  width: 100%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px 50px;
  border-radius: 15px;

`
const IconBtn = styled.img`
  cursor: pointer;
`
const TickContent = styled.div`
 display: flex;
  align-items: center;
`


function Login() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    const [preview, setPreview] = useState('');


    useEffect(() => {
        if (!browserState.loginData.avatar) {
            setPreview(undefined);
            return
        }
        console.log(browserState.loginData);

        const objectUrl = URL.createObjectURL(browserState.loginData.avatar)
        setPreview(objectUrl)


        return () => URL.revokeObjectURL(objectUrl)
    }, [browserState.loginData.avatar])

    const handleOffClick = () => {
        setBrowserState({...browserState, isLogin: false});
    }
    const handleChange = (e) => {
        setBrowserState({...browserState, loginData: {...browserState.loginData, [e.target.name]: e.target.value}})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setBrowserState({...browserState, isAuth: true,isLogin: false});
    }
    return (<OverLaySection isOpen={browserState.isLogin}>
        <ContentSection>
            <TitleText>Welcome to AZAL WEB3 browser!</TitleText>
            <ContentMainBox>
                <Grid container={true}>
                    <Grid item={true} xs={6} lg={6} md={6} sm={6} xl={6}>
                        <ContentMainBoxP>Login</ContentMainBoxP>
                    </Grid>
                    <Grid item={true} xs={6} lg={6} md={6} sm={2} xl={6}>
                        <ContentMainBoxClose onClick={handleOffClick}>
                            <IconBtn src={CloseIcon} alt={CloseIcon}/>
                            <ContentMainBoxP>Cancel</ContentMainBoxP>
                        </ContentMainBoxClose>
                    </Grid>
                </Grid>

                <FormBox>
                    <Grid container={true} alignItems={`center`} justifyContent={`center`}>
                        <Grid item={true}>
                            {preview && <img src={preview} alt={preview} style={{
                                width: '70px', height: '70px', borderRadius: '10px', border: '1px solid #000',
                                marginTop: '30px'
                            }}/>}
                        </Grid>
                    </Grid>
                    <Grid container={true} alignItems={`center`} justifyContent={`center`} spacing={2}
                          style={{marginTop: '20px'}}
                          rowSpacing={0}>
                        <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                            <FormInputGroup label={`Email Address`} name={`loginEmail`} type={`text`}
                                            placeholder={`example@domain.com`} onChange={handleChange}
                                            value={browserState.loginData.loginEmail}/>

                        </Grid>
                    </Grid>
                    <Grid container={true} alignItems={`center`} justifyContent={`center`} spacing={2}>
                        <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                            <FormInputGroup label={`Password`} name={`loginPassword`} type={`password`}
                                            placeholder={`Your Password`} onChange={handleChange}
                                            value={browserState.loginData.loginPassword}/>
                        </Grid>
                    </Grid>
                    <Grid container={true} alignItems={`center`} justifyContent={`center`} spacing={2}>
                        <Grid item={true} lg={6} xl={6} md={6} sm={6} sx={{display:'flex',justifyContent:'space-between'}}>
                            <TickContent>
                                <IconBtn src={TickIcon} alt={TickIcon}/>
                                <ContentMainBoxSmallP>Keep me logged in</ContentMainBoxSmallP>
                            </TickContent>
                            <ContentMainBoxSmallP>Forgot Password? <FormLink>Click Here</FormLink></ContentMainBoxSmallP>
                        </Grid>
                    </Grid>
                    <ContentMainBoxP style={{textAlign:'center',marginTop:'20px'}}>Login with....!</ContentMainBoxP>
                    <Form0Auth>
                        <IconBtn src={MetaMaskIcon} alt={MetaMaskIcon} style={{
                            width: '49px', height: '49px', borderRadius: '50%', background: '#000'
                        }}/>
                        <ContentMainBoxP style={{padding: '0 10px'}}>or</ContentMainBoxP>
                        <IconBtn src={GoogleIcon} alt={GoogleIcon} style={{
                            width: '49px', height: '49px', borderRadius: '50%', background: '#000'
                        }}/>
                    </Form0Auth>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'
                    }}>
                        <ContentMainBoxP>Don't have an account yet?<FormLink> Sign up.</FormLink></ContentMainBoxP>
                    </Box>
                </FormBox>
            </ContentMainBox>
            <FormBtnLg onClick={handleSubmit}>Login</FormBtnLg>
        </ContentSection>
    </OverLaySection>);
}

export default Login;