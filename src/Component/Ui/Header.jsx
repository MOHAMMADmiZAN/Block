import {Avatar, Box, CssBaseline, Grid} from "@mui/material";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

import MetaMask from '../../App/assets/svg/Icons/metamask-bw-2.svg';
import User from '../../App/assets/svg/Icons/amir-personal.svg';
import LeftIcon from '../../App/assets/svg/Icons/Left.svg';
import RightIcon from '../../App/assets/svg/Icons/Right.svg';
import Reload from '../../App/assets/svg/Icons/Reload.svg';
import HomeIcon from '../../App/assets/svg/Icons/Home.svg';
// import SearchIcon from '../../App/assets/svg/Icons/search.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'



const Item = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: url("/src/App/assets/svg/Icons/buttonCircel.svg") no-repeat center;
  cursor: pointer;
  margin: 10px;
  position: relative;
`
const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 20px;
  border: none;
  background: rgba(239, 248, 255, 0.1);
  padding: 0 40px;
  margin: 10px;
  position: relative;


  &:focus {
    outline: none;
  }
  &:before{
    content: '';
    background: url("/src/App/assets/svg/Icons/search.svg");
    position: absolute;
    top: 50%;
    left: 50%;
    width: 17px;
    height: 17px;
  }

`
const positionCenter = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

}
const IconSize = {
    width: '20px',
    height: '20px',
}

function Header() {

    return (
        <>
            <Box sx={{bgcolor: 'rgba(239,248,255,0.2)', height: '50px', width: '100%'}}>
                <Grid container sx={{height: '100%'}}>
                    <Grid item lg={3} xs={3} sm={3} xl={3} md={3}>
                        <Item> <Avatar src={LeftIcon} sx={{...positionCenter,width:'10px',height:'17px'}}/> </Item>
                        <Item><Avatar src={RightIcon} sx={{...positionCenter,width:'10px',height:'17px'}}/></Item>
                        <Item><Avatar src={Reload} sx={{...positionCenter,width:'16px',height:'17px'}}/></Item>
                        <Item><Avatar src={HomeIcon} sx={{...positionCenter,width:'17px',height:'18px'}}/></Item>
                    </Grid>
                    <Grid item lg={6} xs={6} sm={6} xl={6} md={6} sx={{position: 'relative'}}>
                        <SearchInput/>
                        {/*<SearchIcon sx={{position: 'absolute', top: '30%', left: '3%'}}/>*/}
                    </Grid>
                    <Grid item lg={3} xs={3} sm={3} xl={3} md={3} sx={{textAlign: 'right'}}>
                        <Item><Avatar src={MetaMask} alt={`Metamask`}
                                      sx={{...positionCenter,...IconSize}}/></Item>
                        <Item><Avatar src={User} alt={`User`} sx={{...positionCenter, width: '100%', height: '100%'}}/></Item>
                        <Item><FontAwesomeIcon icon={faEllipsisVertical} style={{...positionCenter}}/></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Header;