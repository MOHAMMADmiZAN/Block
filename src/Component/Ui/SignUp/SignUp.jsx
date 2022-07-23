import React from 'react';
import {Box, Button, Container, Grid,} from "@mui/material";
import SignupCss from './css/style.module.css';
import {useContext} from "react";
import {BrowserContextState} from "../../../Context/BrowserContext";
import styled from "styled-components"
import PlusIcon from '../../../App/assets/svg/Icons/plus.svg';
import CloseIcon from '../../../App/assets/svg/Icons/Close.svg';
import CheckIcon from '../../../App/assets/svg/Icons/Check.svg';
import CheckActiveIcon from '../../../App/assets/svg/Icons/checkActive.svg';
import MetaMask from '../../../App/assets/svg/Icons/MetaMask_Fox.svg';
import Google from '../../../App/assets/svg/Icons/google.svg';
import OverLaySection from "../../Shared/Ui/OverLaySection";
import ImageAddBtn from "../../Shared/Form/ImageAddBtn";
import FormInputGroup from "../../Shared/Form/FormInputGroup";
import FormLink from "../../Shared/Form/FormLink";
import Form0Auth from "../../Shared/Form/Form0Auth";
import FormBtnLg from "../../Shared/Form/FormBtnLg";
import {useEffect, useState} from "react";
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

const IconButton = styled.img`
  cursor: pointer;
`

const init = {
    firstName: 'Sama',
    lastName: 'Zain',
    email: 'samazain@gmail.com',
    password: '12345678',
    confirmPassword: '12345678',
}


function SignUp() {

    const {browserState, setBrowserState} = useContext(BrowserContextState);
    const [preview, setPreview] = useState('');
    const [formData, setFormData] = useState(init);
    const [checked, setChecked] = useState(false);
    const [file, setFile] = useState(null);
    const handleOffClick = () => {
        setBrowserState({...browserState, isSignup: false});
        console.log(browserState);
    }
    useEffect(() => {
        if (!file) {
            setPreview('')
            return
        }

        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        console.log(objectUrl)


        return () => URL.revokeObjectURL(objectUrl)
    }, [file])


    const handleImage = (e) => {
        setFile(e.target.files[0])
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.id)
      setFormData({...formData, [e.target.id]: e.target.value})
        console.log(formData);

    }
    const handleCheck = () => {
        setChecked(!checked)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (checked){
            setBrowserState({...browserState, signUpData: {...formData, image: file},isSignup: false ,isSignUpSuccess: true})
            console.log(browserState);
        }
    }

    return (
        <>
            <OverLaySection isOpen={browserState.isSignup}>
                <ContentSection>
                    <TitleText>Welcome to AZAL WEB3 browser!</TitleText>
                    <ContentMainBox>
                        <Grid container={true}>
                            <Grid item={true} xs={6} lg={6} md={6} sm={6} xl={6}>
                                <ContentMainBoxP>Create New Account</ContentMainBoxP>
                            </Grid>
                            <Grid item={true} xs={6} lg={6} md={6} sm={2} xl={6}>
                                <ContentMainBoxClose onClick={handleOffClick}>
                                    <IconButton src={CloseIcon} alt={CloseIcon}/>
                                    <ContentMainBoxP>Cancel</ContentMainBoxP>

                                </ContentMainBoxClose>
                            </Grid>
                        </Grid>

                        <FormBox>
                            <Grid container={true} alignItems={`center`}>
                                <Grid item={true}>
                                    <ImageAddBtn change={handleImage}>
                                        {(preview && file) && <img src={preview} alt={preview} style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '10px',
                                            border: '1px solid #000',
                                        }}/>}
                                    </ImageAddBtn>
                                </Grid>
                                <Grid item={true}><ContentMainBoxP>Add Profile
                                    Photo</ContentMainBoxP></Grid>
                            </Grid>
                            <Grid container={true} alignItems={`center`} spacing={2} style={{marginTop: '20px'}}
                                  rowSpacing={0}>
                                <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                                    <FormInputGroup label={`First Name`} name={`firstName`} type={`text`}
                                                    placeholder={`Your First Name`} onChange={handleChange} value={formData.firstName}/>
                                </Grid>
                                <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                                    <FormInputGroup label={`Last Name`} name={`lastName`} type={`text`}
                                                    placeholder={`Your Last Name`} onChange={handleChange} value={formData.lastName}/>
                                </Grid>
                                <Grid item={true} lg={12} xl={12} md={12} sm={12}>
                                    <FormInputGroup label={`Email Address`} name={`email`} type={`text`}
                                                    placeholder={`example@domain.com`} onChange={handleChange} value={formData.email}/>

                                </Grid>
                                <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                                    <FormInputGroup label={`Password`} name={`password`} type={`password`}
                                                    placeholder={`Your Password`} onChange={handleChange} value={formData.password}/>
                                </Grid>
                                <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                                    <FormInputGroup label={`Confirm Password`} name={`confirmPassword`}
                                                    type={`password`} placeholder={`Confirm Password`}
                                                    onChange={handleChange} value={formData.confirmPassword}/>
                                </Grid>
                            </Grid>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <IconButton src={checked?CheckActiveIcon:CheckIcon} alt={checked?CheckActiveIcon:CheckIcon} onClick={handleCheck}/>
                                <ContentMainBoxP>I agree to the <FormLink>Terms and
                                    Conditions</FormLink> and <FormLink>Privacy Policy</FormLink>.</ContentMainBoxP>
                            </Box>
                            <Form0Auth>
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
                            </Form0Auth>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '20px'
                            }}>
                                <ContentMainBoxP>Do you have an account
                                    already? <FormLink>Login.</FormLink></ContentMainBoxP>
                            </Box>
                        </FormBox>
                    </ContentMainBox>
                    <FormBtnLg onClick={handleSubmit}>Sign UP</FormBtnLg>
                </ContentSection>
            </OverLaySection>

        </>
    );
}

export default SignUp;