import React from 'react';
import {Button, Container, Grid, Typography} from "@mui/material";
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
import LogoutIcon from '../../../App/assets/svg/Icons/Logout.svg';
import FormLink from "../../Shared/Form/FormLink";
import GroupShopIcon from '../../../App/assets/svg/Icons/GroupShop.svg';
import GroupGroceryIcon from '../../../App/assets/svg/Icons/GroupGrocery.svg';
import GroupWorkIcon from '../../../App/assets/svg/Icons/GroupWork.svg';
import GroupFunIcon from '../../../App/assets/svg/Icons/GroupFun.svg';
import GroupRandomIcon from '../../../App/assets/svg/Icons/GroupRandom.svg';
import Member1Icon from '../../../App/assets/svg/avatar/m1.svg';
import Member2Icon from '../../../App/assets/svg/avatar/m2.svg';
import Member3Icon from '../../../App/assets/svg/avatar/m3.svg';
import Member4Icon from '../../../App/assets/svg/avatar/m4.svg';


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
  width: ${props => props.large ? '70px' : '40px'};
  height: ${props => props.large ? '70px' : '40px'};
  border-radius: 50%;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const MenuItem = styled.li`
  margin: 20px 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
`
const UserTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const UserTitleP = styled.p`
  font-size: 15px;
  font-weight: 500;

`
const UserTitleSpan = styled.span`
  font-size: 11px;
`
const UserSocialItems = styled.ul`
`
const UserSocialItem = styled.li`
  display: inline-block;
  padding: 10px;

`
const UserSocial = styled.div`

`
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #979797;
  margin-top: 30px;
`
const UsersGroup = styled.div`
  padding: 15px;
`
const UserGroupTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const UserGroupContent = styled.div`
  margin-top: 15px;
`


const UserGroupThumbnail = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 15px;
`
const UserGroupMember = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #979797;
  border-radius: 50%;
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
const UserSocialData = [
    {
        label: 'Followers',
        value: '32.5k'

    },
    {
        label: 'Following',
        value: '50'
    },
    {
        label: 'Friends',
        value: '50'
    }
]

const userGroupData = [
    {
        title: 'Shopping',
        thumbnail: GroupShopIcon,
        lastChatDate: 'June 19, 2021',
        id: 1,
        members: [
            {
                name: 'John Doe',
                avatar: Member1Icon,
                id: 1
            },
            {
                name: 'John Doe',
                avatar: Member2Icon,
                id: 2
            },
            {
                name: 'John Doe',
                avatar: Member3Icon,
                id: 3
            },
            {
                name: 'John Doe',
                avatar: Member4Icon,
                id: 4
            },


        ]
    },
    {
        title: 'Grocery',
        thumbnail: GroupGroceryIcon,
        lastChatDate: 'June 21, 2021',
        id: 1,
        members: [
            {
                name: 'John Doe',
                avatar: Member1Icon,
                id: 1
            },
            {
                name: 'John Doe',
                avatar: Member2Icon,
                id: 2
            },
            {
                name: 'John Doe',
                avatar: Member3Icon,
                id: 3
            },
            {
                name: 'John Doe',
                avatar: Member4Icon,
                id: 4
            },


        ]
    },
    {
        title: 'Work',
        thumbnail: GroupWorkIcon,
        lastChatDate: 'June 21, 2022',
        id: 1,
        members: [
            {
                name: 'John Doe',
                avatar: Member1Icon,
                id: 1
            },
            {
                name: 'John Doe',
                avatar: Member2Icon,
                id: 2
            },
            {
                name: 'John Doe',
                avatar: Member3Icon,
                id: 3
            },
            {
                name: 'John Doe',
                avatar: Member4Icon,
                id: 4
            },


        ]
    },
    {
        title: 'Fun',
        thumbnail: GroupFunIcon,
        lastChatDate: 'June 25, 2021',
        id: 1,
        members: [
            {
                name: 'John Doe',
                avatar: Member1Icon,
                id: 1
            },
            {
                name: 'John Doe',
                avatar: Member2Icon,
                id: 2
            },
            {
                name: 'John Doe',
                avatar: Member3Icon,
                id: 3
            },
            {
                name: 'John Doe',
                avatar: Member4Icon,
                id: 4
            },


        ]
    },


]


function UserSideBar() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    const [preview, setPreview] = useState('');
    const [menu, setMenu] = useState(MenuInIt);


    const handleMenuClick = (e, id) => {
        console.log(import.meta.env.APP_NAME);
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
                    <SideBarAvatar large>
                        <SideBarAvatarImg src={preview} large/>
                    </SideBarAvatar>
                    <UserTitle><UserTitleP>@{browserState.loginData.firstName + browserState.loginData.lastName}</UserTitleP><IconBtn
                        src={LogoutIcon} style={{marginLeft: '10px'}}/></UserTitle>
                    <UserTitleSpan>Dubai,UAE</UserTitleSpan>

                    <UserSocialItems>
                        {UserSocialData.map(item => {
                            return (
                                <UserSocialItem key={item.label}>
                                    <UserSocial>
                                        <UserTitleP>{item.label}</UserTitleP>
                                        <span style={{color: 'rgba(0,0,0,0.4)', fontWeight: '400'}}>{item.value}</span>
                                    </UserSocial>
                                </UserSocialItem>
                            )
                        })
                        }
                    </UserSocialItems>
                    <Divider/>

                    <Button variant="contained"
                            sx={{borderRadius: '20px', margin: '15px 0 10px 0', background: '#0683FF', width: 220}}
                            size={`large`}>New Group Trip</Button>
                    <Typography paragraph={true} sx={{color: 'rgba(0,0,0,0.4)', fontWeight: '400', fontSize: '11px'}}>Go
                        anywhere in the Web3 with your friends</Typography>


                    <UsersGroup>
                        <UserGroupTitle>
                            <Typography variant={`h6`}>
                                Recently used groups
                            </Typography>
                            <FormLink>View ALL</FormLink>
                        </UserGroupTitle>
                        <UserGroupContent>
                            {userGroupData.map(item => {
                                return (
                                    <Grid container={true} key={item.id} sx={{padding:'10px 0', borderBottom:'1px solid #000'}}>
                                        <Grid item xs={3} sm={6} md={3} lg={3}>
                                            <UserGroupThumbnail src={item.thumbnail}/>

                                        </Grid>
                                        <Grid item xs={9} sm={6} md={9} lg={9}>
                                            <Grid container={true} alignItems={`center`}>
                                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                                    <Typography variant={`h6`}>{item.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                                    <Typography pragraph>{item.lastChatDate}</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container={true} alignItems={`center`} sx={{marginTop: '10px'}}>
                                                {item.members.map(member => {
                                                    return (
                                                        <Grid item xs={3} sm={3} md={2} lg={2} key={member.id}>
                                                            <UserGroupMember>
                                                                <IconBtn src={member.avatar}
                                                                         style={{width: '100%', height: '100%'}}/>
                                                            </UserGroupMember>

                                                        </Grid>
                                                    )
                                                })
                                                }
                                            </Grid>
                                        </Grid>

                                    </Grid>


                                )
                            })}
                        </UserGroupContent>
                    </UsersGroup>


                </SideBarComponent>
                <SideBarComponent>

                    <SideBarAvatar>
                        <SideBarAvatarImg src={preview}/>
                        <OnlineLight/>
                    </SideBarAvatar>
                    <IconBtn src={SideMenuIcon} style={{marginTop: '15px'}}/>
                    <MenuItems>
                        {menu.map((item, index) => {
                            return (
                                <MenuItem key={index} style={{background: item.isActive ? '#0683FF' : ''}}>
                                    <IconBtn src={!item.isActive ? item.icon : item.activeIcon} alt={item.icon} style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%,-50%)',
                                    }} onClick={(e) => handleMenuClick(e, item.id)}/>
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