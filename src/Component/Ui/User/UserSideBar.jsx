import React from 'react';
import {Avatar, Container, Grid} from "@mui/material";
import {useContext} from "react";
import {BrowserContextState} from "../../../Context/BrowserContext";
import styled from "styled-components";
import {useEffect, useState} from "react";
import SideMenuIcon from '../../../App/assets/svg/Icons/SideMenuIcon.svg';
import HomeIcon from '../../../App/assets/svg/Icons/Home.svg';
import HomeActiveIcon from '../../../App/assets/svg/Icons/HomeActive.svg';
import ClockIcon from '../../../App/assets/svg/Icons/Clock.svg';
import ClockActiveIcon from '../../../App/assets/svg/Icons/ClockActive.svg';
import ShopIcon from '../../../App/assets/svg/Icons/Shop.svg';
import ShopActiveIcon from '../../../App/assets/svg/Icons/ShopActive.svg';
import ChatIcon from '../../../App/assets/svg/Icons/Chat.svg';
import ChatActiveIcon from '../../../App/assets/svg/Icons/ChatActive.svg';
import UploadIcon from '../../../App/assets/svg/Icons/Upload.svg';
import UploadActiveIcon from '../../../App/assets/svg/Icons/UploadActive.svg';
import SettingIcon from '../../../App/assets/svg/Icons/Setting.svg';
import SettingActiveIcon from '../../../App/assets/svg/Icons/SettingAcive.svg';


const SideBarComponent = styled.div`
  width: 100%;
  max-width: ${props => props.large ? '328px' : '80px'};
  height: calc(100vh - 50px);
  background: ${props => props.large ? 'rgba(213, 213, 220, 0.3)' : 'rgba(0, 0, 0, 0.6)'};
  padding: 50px 0;
  position: absolute;
  top: 50px;
  right: ${props => props.large ? '80px' : '0'};
  text-align: center;
`

const SideBarAvatar = styled.div`
  width: ${props => props.large ? '100px' : '40px'};
  height: ${props => props.large ? '100px' : '40px'};
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
`
const SideBarAvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  position: relative;

`
const IconBtn = styled.img`
  cursor: pointer;

`;
const OnlineLight = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #29CB97;
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #fff;
`
const MenuItems = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`
const MenuItem = styled.li`
  margin: 20px 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
`

const MenuInIt = [
    {
        icon: HomeIcon,
        activeIcon: HomeActiveIcon,
        isActive: false,
        id: 1
    },
    {
        icon: ClockIcon,
        activeIcon: ClockActiveIcon,
        isActive: false,
        id: 2
    },
    {
        icon: ShopIcon,
        activeIcon: ShopActiveIcon,
        isActive: false,
        id: 3
    },
    {
        icon: ChatIcon,
        activeIcon: ChatActiveIcon,
        isActive: false,
        id: 4
    }
    , {
        icon: UploadIcon,
        activeIcon: UploadActiveIcon,
        isActive: false,
        id: 5
    }
    , {
        icon: SettingIcon,
        activeIcon: SettingActiveIcon,
        isActive: false,
        id: 6
    }

]


function UserSideBar() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    const [preview, setPreview] = useState('');
    const [menu, setMenu] = useState(MenuInIt);


    const handleMenuClick = (e,id) => {
        setMenu(menu.map(item => {
            item.isActive = item.id === id;
            return item;
        }))
    }


    useEffect(() => {
        if (!browserState.loginData.avatar) {
            setPreview(undefined);
            return
        }


        const objectUrl = URL.createObjectURL(browserState.loginData.avatar)
        setPreview(objectUrl)


        return () => URL.revokeObjectURL(objectUrl)
    }, [browserState.loginData.avatar])
    return (
        <>
            <Container sx={{display: browserState.isSideBarOpen ? 'block' : 'none'}}>
                <SideBarComponent large>

                </SideBarComponent>
                <SideBarComponent>

                    <SideBarAvatar>
                        <SideBarAvatarImg src={preview}/>
                        <OnlineLight/>
                    </SideBarAvatar>
                    <IconBtn src={SideMenuIcon} style={{marginTop: '15px'}}/>
                    <MenuItems >
                        {menu.map((item, index) => {
                            return (
                                <MenuItem key={index} style={{background: item.isActive ? '#0683FF' : ''}}>
                                    <IconBtn src={!item.isActive ? item.icon : item.activeIcon} alt={item.icon} style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%,-50%)',




                                    }} onClick={(e) => handleMenuClick(e,item.id)}/>
                                </MenuItem>
                            )

                        })}
                    </MenuItems>
                </SideBarComponent>

            </Container>
        </>
    );
}

export default UserSideBar;