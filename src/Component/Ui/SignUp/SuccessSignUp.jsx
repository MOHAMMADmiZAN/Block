import React, {useEffect, useState} from 'react';
import {useContext} from "react";
import {BrowserContextState} from "../../../Context/BrowserContext";
import OverLaySection from "../../Shared/Ui/OverLaySection";
import styled from "styled-components";
import {Grid} from "@mui/material";
import SuccessImg from '../../../App/assets/svg/Icons/Success.svg';
import FormBtnLg from "../../Shared/Form/FormBtnLg";

const ContentSection = styled.div`
  width: 100%;
  max-width: 1270px;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`
const ContentBox = styled.div`
  width: 100%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px 100px;
  border-radius: 40px;
  height: 100%;


`
const ImgPreview = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  margin-top: 50px;
`
const TitleText = styled.h1`
  font-size: 24px;
  color: rgba(250, 250, 251, 0.6);
  font-weight: 600;
  padding-bottom: 30px;
`
const SuccessfulMessage = styled.h6`
  font-size: 20px;
  color: #fff;
`
const SuccessfulMessageP = styled.p`
  font-size: 12px;
  color: #92929D;
  font-weight: 300;
  padding-top: 10px;

`
const SuccessfulImage = styled.img`
  margin-top: 50px;
`


function SuccessSignUp() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    const [preview, setPreview] = useState('');

    useEffect(() => {
        if (!browserState.signUpData.image) {
            setPreview(undefined);
            return
        }

        const objectUrl = URL.createObjectURL(browserState.signUpData.image)
        setPreview(objectUrl)
        console.log(objectUrl)


        return () => URL.revokeObjectURL(objectUrl)
    }, [browserState.signUpData.image])

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('login')
        setBrowserState({
            ...browserState,
            isSignUpSuccess: false,
            isLogin: true,
            loginData: {
                ...browserState.loginData,
                loginEmail: browserState.signUpData.email,
                loginPassword: browserState.signUpData.password,
                avatar: browserState.signUpData.image,
                firstName: browserState.signUpData.firstName,
            }
        });
    }

    return (
        <OverLaySection isOpen={browserState.isSignUpSuccess}>
            <ContentSection>
                <ContentBox>
                    <Grid container spacing={2} justifyContent={`center`}>
                        <Grid item xl={12} lg={12} sx={{textAlign: 'center'}}>
                            <ImgPreview src={preview} alt={preview}/>
                            <TitleText>{browserState.signUpData.firstName + '' + browserState.signUpData.lastName}</TitleText>
                            <SuccessfulMessage>Your account has been created successfully</SuccessfulMessage>
                            <SuccessfulMessageP>Kindly check your email to verify</SuccessfulMessageP>
                            <SuccessfulImage src={SuccessImg} alt={SuccessImg}/>
                        </Grid>
                    </Grid>
                </ContentBox>
                <FormBtnLg onClick={handleLogin}>Login</FormBtnLg>
            </ContentSection>
        </OverLaySection>
    );
}

export default SuccessSignUp;