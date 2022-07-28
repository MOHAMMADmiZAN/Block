import styled from "styled-components";
import React, {useContext, useEffect, useState} from "react";
import {BrowserContextState} from "../../../../Context/BrowserContext";
import {Box, Button, Grid, Typography} from "@mui/material";
import WhiteIcon from '../../../../App/assets/svg/Icons/whitePlus.svg';
import ProgressBar from '../../../../App/assets/svg/Icons/Progress Bar.svg';
import CloseIcon from "../../../../App/assets/svg/Icons/close.svg";
import PlusIcon from "../../../../App/assets/svg/Icons/plus.svg";
import SearchIcon from '../../../../App/assets/svg/Icons/SearchIcon.svg';
import PlusIconOverlay from '../../../../App/assets/svg/Icons/PlusWhiteOverlay.svg';
import SiteHomeIcon from '../../../../App/assets/svg/Icons/SiteHome.svg';
import FilePathImg from '../../../../App/assets/images/filePath.png';
import BackIcon from '../../../../App/assets/svg/Icons/Back.svg';
import Site from '../../../../App/assets/svg/Icons/Site.svg';
import SuccessImg from '../../../../App/assets/svg/Icons/Success.svg';


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
  padding: ${props => props.large ? '30px 5px' : '5px'};
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
const UploaderOverLay = styled.div`
  width: 100%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px 50px;
  border-radius: 15px;
`;
const UploaderInput = styled.input`
  border: 1px solid rgba(146, 146, 157, 0.4);
  width: 100%;
  border-radius: 20px;
  padding: 10px 10px 10px 40px;
  background: transparent;
  outline: none;
  color: rgba(146, 146, 157, 0.4);

`
const SuccessFullText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  padding: 30px;
`;

function Upload() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    const [uploadStep, setUploadStep] = useState({
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
    });
    const [uploadFile, setUploadFile] = useState(null);
    const [siteName, setSiteName] = useState('');
    const [keyUp, setKeyUp] = useState({})

    const handleOffClick = () => {
        setBrowserState({...browserState, isSignup: false});
        console.log(browserState);
    }


    const dragOver = (e) => {
        e.preventDefault();
    }
    const dragLeave = (e) => {
        e.preventDefault();
    }
    const drop = (e) => {
        e.preventDefault();
        setUploadFile(e.dataTransfer.files[0]);
        console.log(e.dataTransfer.files[0]);

    }
    const handleFileUploadClick = (e) => {
        console.log(e.target.files[0]);
        // setUploadFile(e.target.files[0]);

    }
    const handleChange = (e) => {
        setSiteName(e.target.value);

    }
    const handleStep = (e) => {
        if (uploadStep.step2) {
            setUploadStep({
                ...uploadStep,
                step2: false,
                step3: true,
            })
            return;
        }
        if (uploadStep.step3) {
            setUploadStep({
                ...uploadStep,
                step3: false,
                step4: true,
            })
        }
        if (uploadStep.step4) {
            setUploadStep({
                ...uploadStep,
                step4: false,
                step5: true,
            })
            setBrowserState({...browserState, isSideBarOpen: false, isPublish: true});
        }
        if (uploadStep.step5) {
            setUploadStep({
                ...uploadStep,
                step5: false,
                step1: true,
            })
        }


    }
    useEffect(() => {
        if (siteName.trim().length > 0) {
            if (siteName.trim() !== '@sama') {
                console.log(' valid')
                setKeyUp(
                    {
                        msg: 'This address is available!',
                        type: true,
                    }
                )
            }
            if (siteName.trim() === '@sama') {
                setKeyUp(
                    {
                        msg: 'This address is used, kindly choose another site name',
                        type: false,
                    }
                )
            }

        }
        return () => {
            setKeyUp(
                {}
            )
        }


    }, [siteName])


    return (
        <>
            {!uploadStep.step5 && <Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <TitleText>Hi {browserState.loginData.firstName}, <UploaderP>{uploadStep.step3 ? `${siteName}` : `here’s your current
                sites`}</UploaderP> </TitleText>
                    {uploadStep.step3 && <Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                        <Img src={BackIcon} alt={BackIcon}/>

                        <UploaderP style={{marginLeft: '5px'}}>{`Back`}</UploaderP>
                    </Box>}
                </Box>
                {(uploadStep.step1 || uploadStep.step2) && <UploadContainer>
                    {/*<UploaderP>Web3 Sites</UploaderP>*/}
                    <Grid container={true}>
                        <Grid item={true} xs={6} lg={6} md={6} sm={6} xl={6}>
                            <UploaderP>{uploadStep.step1 && 'Web3 Sites'}</UploaderP>
                            <UploaderP>{uploadStep.step2 && 'Create New Web3 Site'}</UploaderP>
                        </Grid>
                        <Grid item={true} xs={6} lg={6} md={6} sm={2} xl={6}>
                            {!uploadStep.step1 && <ContentMainBoxClose onClick={handleOffClick}>
                                <Img src={CloseIcon} alt={CloseIcon}/>

                                <UploaderP>{`Cancel`}</UploaderP>

                            </ContentMainBoxClose>}
                        </Grid>
                    </Grid>

                    {uploadStep.step1 && <Button sx={{...UploaderBtnStyle}} component="label"
                                                 onClick={() => setUploadStep({
                                                     ...uploadStep,
                                                     step1: false,
                                                     step2: true
                                                 })}>
                        <Img src={WhiteIcon} alt={WhiteIcon}/>
                        <Typography paragraph={true} sx={{marginBottom: '0', marginLeft: '10px'}}> Create New Web3
                            Site</Typography>
                    </Button>}
                    {uploadStep.step2 && <UploaderOverLay>
                        <Grid container={true} alignItems={`center`} gap={1}>
                            <Grid item={true}>
                                <Button sx={{
                                    width: '52px',
                                    height: '52px',
                                    border: '1px solid rgba(146, 146, 157, 0.4)',
                                    borderRadius: '10px'
                                }}>
                                    <Img src={(keyUp.type && uploadFile ? SiteHomeIcon : PlusIcon)}
                                         alt={(keyUp.type && uploadFile ? SiteHomeIcon : PlusIcon)}/>
                                </Button>
                            </Grid>
                            <Grid item={true}>
                                <UploaderP>Web3 Site Name</UploaderP>
                            </Grid>
                        </Grid>
                        <Grid container={true} alignItems={`center`} gap={1} justifyContent={"center"}>
                            <Grid item={true} lg={10} xl={10} md={10} sm={10} sx={{position: 'relative'}}>
                                <UploaderInput type="text" placeholder="@example" onChange={handleChange}/>
                                <Img src={SearchIcon} style={{
                                    position: 'absolute',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    left: '10px'
                                }}></Img>
                            </Grid>
                            <Grid item={true}>
                                <UploaderP
                                    style={!keyUp.type ? {color: '#FF0000'} : {color: '#03AC1F'}}>{keyUp.msg}</UploaderP>
                            </Grid>
                        </Grid>
                    </UploaderOverLay>}

                </UploadContainer>}
                {uploadStep.step1 && <WebCount>
                    <UploaderP>
                        Stats
                    </UploaderP>
                    <Img src={ProgressBar}/>
                    <Typography paragraph={true} sx={{color: 'white', marginLeft: '20px', fontSize: '14px'}}>Available
                        WEB3
                        Sites 1</Typography>
                </WebCount>}
                {(!uploadStep.step3 && !uploadStep.step4) &&
                    <Grid container={true} justifyContent={`center`} alignItems={`center`}>
                        <Grid item={true}>
                            <TitleText style={{fontSize: '16px', textAlign: 'center', marginTop: '10px'}}>Available WEB3
                                Sites</TitleText>
                        </Grid>

                    </Grid>}
                {(uploadStep.step2) && <UploadContainer style={{marginTop: '0'}}>
                    <UploaderP>Site Files</UploaderP>

                    {!uploadFile && <Grid container={true} justifyContent={`center`} alignItems={`center`}>
                        <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                            <Button sx={{
                                border: '1px dashed rgba(146, 146, 157, 0.4)', width: '100%',
                                textAlign: 'center',
                                padding: '100px',
                                margin: '50px 0',
                                borderRadius: '15px'

                            }} component="label" onDragOver={dragOver} onDragLeave={dragLeave} onDrop={drop}>
                                <input hidden={true} type={`file`} onChange={handleFileUploadClick}/>
                                <Grid container={true} justifyContent={`center`} alignItems={`center`}>
                                    <Grid item={true}>
                                        <Img src={PlusIconOverlay} alt={PlusIconOverlay}/>
                                    </Grid>
                                    <Grid item={true}>
                                        <UploaderP style={{marginBottom: '0', textTransform: 'capitalize'}}>Drag and
                                            Drop
                                            Files</UploaderP>
                                        <UploaderP style={{
                                            marginBottom: '0',
                                            textTransform: 'capitalize',
                                            fontSize: '11px'
                                        }}>Zip,Rar</UploaderP>
                                    </Grid>
                                </Grid>

                            </Button>
                        </Grid>
                    </Grid>}
                    {(uploadFile && !uploadStep.step3 && !uploadStep.step4) &&
                        <Grid container={true} justifyContent={`start`} alignItems={`center`}>
                            <Grid item={true} lg={6} xl={6} md={6} sm={6}>
                                <Box sx={{width: '100%'}}>
                                    <Img src={FilePathImg} alt={FilePathImg}/>
                                </Box>
                                }
                            </Grid>
                            <Grid item={true} sx={{
                                position: 'absolute',
                                bottom: '10px',
                                right: '10px',
                                cursor: 'pointer',
                                marginLeft: '0',
                                display: 'flex'
                            }} onClick={(e) => setUploadFile(null)}>
                                <Img src={CloseIcon} alt={CloseIcon}/>
                                <UploaderP>Delete</UploaderP>
                            </Grid>
                        </Grid>
                    }

                </UploadContainer>}
                {
                    (uploadStep.step3 || uploadStep.step4) && <Box style={{
                        marginTop: '0',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        maxHeight: '600px',
                        position: 'relative'
                    }}>
                        <Img src={Site}/>
                        {uploadStep.step4 && <Box sx={{
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.6)',
                            position: 'absolute',
                            top: '0',
                            left: '0'
                        }}>

                        </Box>}
                        {uploadStep.step4 && <Box sx={{
                            width: '70%',
                            height: '300px',
                            background: 'rgba(0, 0, 0, 0.6)',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            borderRadius: '20px'
                        }}>
                            <SuccessFullText>
                                <Typography variant={`h5`} sx={{color: 'white', fontSize: '20px', textAlign: 'center'}}>
                                    Your Web3 Site has been created successfully!
                                </Typography>
                                <UploaderP style={{fontSize: '20px', padding: '20px'}}>{siteName}</UploaderP>
                                <Img src={SuccessImg}/>
                            </SuccessFullText>
                        </Box>}
                    </Box>
                }

                <Button variant={`contained`} sx={{
                    borderRadius: '20px',
                    padding: '15px',
                    width: '80%',
                    maxWidth: '610px',
                    position: 'absolute',
                    bottom: '70px',
                    left: '50%',
                    transform: "translateX(-50%)"
                }} onClick={handleStep}>
                    <Typography paragraph={true}
                                sx={{
                                    color: 'white',
                                    fontSize: '14px',
                                    marginBottom: '0'
                                }}
                    >{uploadStep.step1 ? 'Submit' : uploadStep.step2 ? 'Submit to Preview' : uploadStep.step3 ? 'Publish' : uploadStep.step4 ? 'Check Live' : 'Submit'}</Typography>
                </Button>
                <UploaderP style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: "translateX(-50%)",
                    textAlign: 'center'
                }}>You are limited to create one web3 website only with regular account, kindly upgrade your account to
                    add
                    more!</UploaderP>

            </Box>}
        </>
    );
}

export default Upload;