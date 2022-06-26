import {Avatar, Box, CssBaseline, Grid} from "@mui/material";
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MetaMask from '../../App/assets/svg/Icons/metamask-bw-2.svg';
import User from '../../App/assets/svg/Icons/amir-personal.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'


const Item = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(239, 248, 255, 0.2);
  border: none;
  cursor: pointer;
  margin: 10px;
  filter: drop-shadow(0px 3px 6px black);
  position: relative;
`
const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 20px;
  border: none;
  background: rgba(239, 248, 255, 0.2);
  padding: 0 40px;
  filter: drop-shadow(0px 3px 6px black);
  margin:  10px;
  
  

  &:focus {
    outline: none;
  }

`
const positionCenter = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

function Header() {

    return (
        <>
            <CssBaseline/>
            <Box sx={{bgcolor: 'rgba(239,248,255,0.2)', height: '50px', width: '100%'}}>
                <Grid container sx={{height: '100%'}}>
                    <Grid item lg={3} xs={3} sm={3} xl={3} md={3}>
                        <Item><ArrowBackIosIcon sx={{...positionCenter}}/></Item>
                        <Item><ArrowForwardIosIcon sx={{...positionCenter}}/></Item>
                        <Item><ReplayOutlinedIcon sx={{...positionCenter}}/></Item>
                        <Item><HomeOutlinedIcon sx={{...positionCenter}}/></Item>
                    </Grid>
                    <Grid item lg={6} xs={6} sm={6} xl={6} md={6} sx={{position:'relative'}}>
                        <SearchInput/>
                        <SearchIcon sx={{position:'absolute',top:'30%',left:'3%'}}/>
                    </Grid>
                    <Grid item lg={3} xs={3} sm={3} xl={3} md={3} sx={{textAlign:'right'}}>
                        <Item><Avatar src={MetaMask} alt={`Metamask`} sx={{...positionCenter,width:'20px',height:'20px'}} /></Item>
                        <Item><Avatar src={User} alt={`User`} sx={{...positionCenter,width:'100%',height:'100%'}} /></Item>
                        <Item><FontAwesomeIcon icon={faEllipsisVertical}  style={{...positionCenter}}/></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Header;