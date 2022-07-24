import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {BrowserContextState} from "../../../Context/BrowserContext";
import {Box, Grid, Typography} from "@mui/material";
import CloseIcon from "../../../App/assets/svg/Icons/close.svg";
import EditIcon from "../../../App/assets/svg/Icons/edit.svg";
import FormInputGroup from "../../Shared/Form/FormInputGroup";
import FormLink from "../../Shared/Form/FormLink";
import FormBtnLg from "../../Shared/Form/FormBtnLg";
import ImageAddBtn from "../../Shared/Form/ImageAddBtn";


const TitleText = styled.h1`
  font-size: 24px;
  color: rgba(250, 250, 251, 0.6);
  font-weight: 300;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
`
const TitleTextP = styled.p`
  font-size: 18px;
  color: rgba(250, 250, 251, 0.6);
  font-weight: 300;
  //padding-bottom: 30px;
  margin-left: 20px;
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
const SettingInitData = {
    avatar: null, firstName: '', lastName: '', email: '', password: '', passwordConfirm: '', phone: '', country: '',
}


function UserSetting() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    const [preview, setPreview] = useState('');
    const [settingData, setSettingData] = useState(SettingInitData);

    useEffect(() => {


        // set data with promise
        const getData = async () => {
            return await browserState.loginData;

        }
        getData().then(r => {
            setSettingData({
                ...settingData,
                avatar: r.avatar,
                firstName: r.firstName,
                lastName: r.lastName,
                email: r.loginEmail,
                password: r.loginPassword
            })
            console.log(`settingData: ${JSON.stringify(settingData)}`)
        });

    },[])








useEffect(() => {
    if (!browserState.loginData.avatar) {
        setPreview(undefined);
        return
    }
    const objectUrl = URL.createObjectURL(browserState.loginData.avatar)
    setPreview(objectUrl)


    return () => URL.revokeObjectURL(objectUrl)
}, [browserState.loginData.avatar])


const handleOffClick = (e) => {
    console.log('close')
}
const handleChange = (e) => {
    setSettingData({...settingData, [e.target.name]: e.target.value})
    console.log(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault();

}


return (<>
    <ContentSection>
        <TitleText>Hi,{browserState.loginData.firstName} <TitleTextP>here’s your account
            settings</TitleTextP></TitleText>
        <ContentMainBox>
            <Grid container={true} alignItems={'center'}>
                <Grid item={true} xs={6} lg={6} md={6} sm={6} xl={6}>
                    <ContentMainBoxP>Setting</ContentMainBoxP>
                </Grid>
                <Grid item={true} xs={6} lg={6} md={6} sm={2} xl={6}>
                    <ContentMainBoxClose onClick={handleOffClick}>
                        <IconBtn src={CloseIcon} alt={CloseIcon}/>
                        <ContentMainBoxP>Cancel</ContentMainBoxP>
                    </ContentMainBoxClose>
                </Grid>
            </Grid>
            <FormBox>
                <Grid container={true} alignItems={`center`} gap={2}>
                    <Grid item={true}>
                        <ImageAddBtn>
                            {(preview) && <img src={preview} alt={preview} style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '10px',
                                border: '1px solid #000',
                            }}/>}
                        </ImageAddBtn>
                    </Grid>
                    <Grid item={true}>
                        <IconBtn src={EditIcon} alt={EditIcon}/>
                    </Grid>
                    <Grid item={true}><Typography paragraph={true} sx={{color: '#92929D', marginBottom: '0',}}>Edit
                        Profile Photo</Typography></Grid>
                </Grid>
                <Grid container={true} alignItems={`center`} spacing={2} style={{marginTop: '20px'}}
                      rowSpacing={0}>
                    <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                        <FormInputGroup label={`First Name`} name={`firstName`} type={`text`}
                                        placeholder={`Your First Name`} onChange={handleChange}
                                        defaultValue={settingData.firstName}/>
                    </Grid>
                    <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                        <FormInputGroup label={`Last Name`} name={`lastName`} type={`text`}
                                        placeholder={`Your Last Name`} onChange={handleChange}
                                        defaultValue={settingData.lastName}/>
                    </Grid>
                    <Grid item={true} lg={12} xl={12} md={12} sm={12}>
                        <FormInputGroup label={`Email Address`} name={`email`} type={`text`}
                                        placeholder={`example@domain.com`} onChange={handleChange}
                                        defaultValue={settingData.email}/>

                    </Grid>
                    <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                        <FormInputGroup label={`Phone Number`} name={`phone`} type={`text`}
                                        placeholder={`Your Password`} onChange={handleChange}
                                        defaultValue={settingData.phone}/>
                    </Grid>
                    <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                        <FormInputGroup label={`Country`} name={`country`} type={`text`}
                                        placeholder={`Your Country`} onChange={handleChange}
                                        defaultValue={settingData.country}/>
                    </Grid>
                    <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                        <FormInputGroup label={`Password`} name={`password`} type={`password`}
                                        placeholder={`Your Password`} onChange={handleChange}
                                        defaultValue={settingData.password}/>
                    </Grid>
                </Grid>
                <Box sx={{
                    display: 'flex', alignItems: 'center', marginTop: '2px'
                }}>
                    <ContentMainBoxP>Change My <FormLink>Password!</FormLink></ContentMainBoxP>
                </Box>
            </FormBox>
        </ContentMainBox>
        <FormBtnLg onClick={handleSubmit}>Save</FormBtnLg>
    </ContentSection>

</>);
}

export default UserSetting;