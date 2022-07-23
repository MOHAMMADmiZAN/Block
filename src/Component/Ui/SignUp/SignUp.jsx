import React from 'react';
import {Box, Button, Container, Grid,} from "@mui/material";
import SignupCss from './css/style.module.css';
import {useContext} from "react";
import {BrowserContextState} from "../../../Context/BrowserContext";
import styled from "styled-components"
import PlusIcon from '../../../App/assets/svg/Icons/plus.svg';
import CloseIcon from '../../../App/assets/svg/Icons/Close.svg';
import CheckIcon from '../../../App/assets/svg/Icons/Rectangle.svg';
import MetaMask from '../../../App/assets/svg/Icons/MetaMask_Fox.svg';
import Google from '../../../App/assets/svg/Icons/google.svg';

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
const ProfileAddStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '10px',
    border: '1px solid #000',
}
const IconButton = styled.img`
  cursor: pointer;
`

const FormInputGroup = styled.div`
  position: relative;
  padding: 20px 0;
`
const FormLabel = styled.label`
  font-size: 13px;
  color: #fff;
  font-weight: 300;
  padding: 2px 5px;
  background: #000;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  min-width: 70%;
  position: absolute;
  top: 8px;
`
const FormInput = styled.input`
  width: 100%;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background: transparent;
  outline: none;
`
const FormLink = styled.a`
  color: #0683FF;
`
const FormOAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`
const FormButtonLarge = styled.button`
  width: 100%;
  border-radius: 20px;
  margin-top: 10px;
  background: #0683FF;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px;

`

function SignUp() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    return (
        <>
            <Box className={SignupCss.containerFluid} style={{display: browserState.isSignup ? 'block' : 'none'}}>
                <Container maxWidth={`xl`} sx={{height: '100vh', position: 'relative'}}>
                    <ContentSection>
                        <TitleText>Welcome to AZAL WEB3 browser!</TitleText>
                        <ContentMainBox>
                            <Grid container={true}>
                                <Grid item={true} xs={6} lg={6} md={6} sm={6} xl={6}>
                                    <ContentMainBoxP>Create New Account</ContentMainBoxP>
                                </Grid>
                                <Grid item={true} xs={6} lg={6} md={6} sm={2} xl={6}>
                                    <ContentMainBoxClose>
                                        <IconButton src={CloseIcon} alt={CloseIcon}/>
                                        <ContentMainBoxP>Cancel</ContentMainBoxP>

                                    </ContentMainBoxClose>
                                </Grid>
                            </Grid>

                            <FormBox>
                                <Grid container={true} alignItems={`center`}>
                                    <Grid item={true}>
                                        <Button variant="outlined" component="label" sx={{...ProfileAddStyle}}>
                                            <img src={PlusIcon} alt={PlusIcon}/>
                                            <input hidden accept="image/*" multiple type="file"/>
                                        </Button>
                                    </Grid>
                                    <Grid item={true}><ContentMainBoxP>Add Profile
                                        Photo</ContentMainBoxP></Grid>
                                </Grid>
                                <Grid container={true} alignItems={`center`} spacing={2} style={{marginTop: '20px'}}
                                      rowSpacing={0}>
                                    <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                                        <FormInputGroup>
                                            <FormLabel>First Name</FormLabel>
                                            <FormInput type="text" placeholder="Your First Name..."/>
                                        </FormInputGroup>
                                    </Grid>
                                    <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                                        <FormInputGroup>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormInput type="text" placeholder="Your Last Name..."/>
                                        </FormInputGroup>
                                    </Grid>
                                    <Grid item={true} lg={12} xl={12} md={12} sm={12}>
                                        <FormInputGroup>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormInput type="text" placeholder="example@domain.com"/>
                                        </FormInputGroup>
                                    </Grid>
                                    <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                                        <FormInputGroup>
                                            <FormLabel>Password</FormLabel>
                                            <FormInput type="password" placeholder=" Type PassWord"/>
                                        </FormInputGroup>
                                    </Grid>
                                    <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                                        <FormInputGroup>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormInput type="text" placeholder="Type Confirm PassWord"/>
                                        </FormInputGroup>
                                    </Grid>
                                </Grid>
                                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <IconButton src={CheckIcon} alt={CheckIcon}/>
                                    <ContentMainBoxP>I agree to the <FormLink>Terms and
                                        Conditions</FormLink> and <FormLink>Privacy Policy</FormLink>.</ContentMainBoxP>
                                </Box>
                                <FormOAuth>
                                    <IconButton src={MetaMask} alt={MetaMask} style={{
                                        width: '49px',
                                        height: '49px',
                                        borderRadius: '50%',
                                        background: '#000'
                                    }}/>
                                    <ContentMainBoxP style={{padding: '0 10px'}}>or</ContentMainBoxP>
                                    <IconButton src={Google} alt={Google} style={{
                                        width: '49px',
                                        height: '49px',
                                        borderRadius: '50%',
                                        background: '#000'
                                    }}/>
                                </FormOAuth>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '20px'
                                }}>
                                    <ContentMainBoxP>Do you have an account already? <FormLink>Login.</FormLink></ContentMainBoxP>
                                </Box>
                            </FormBox>
                        </ContentMainBox>
                        <FormButtonLarge>Sign UP</FormButtonLarge>
                    </ContentSection>
                </Container>
            </Box>

        </>
    );
}

export default SignUp;