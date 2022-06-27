import {Avatar, Box, Grid} from "@mui/material";
import styled from "styled-components";
import MetaMask from '../../App/assets/svg/Icons/metamask-bw-2.svg';
import User from '../../App/assets/svg/Icons/amir-personal.svg';
import LeftIcon from '../../App/assets/svg/Icons/Left.svg';
import RightIcon from '../../App/assets/svg/Icons/Right.svg';
import Reload from '../../App/assets/svg/Icons/Reload.svg';
import HomeIcon from '../../App/assets/svg/Icons/Home.svg';
import SearchIcon from '../../App/assets/svg/Icons/Search.svg';
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
  background: linear-gradient(360deg, rgba(239, 248, 255, 0.5) 0%, rgba(17, 29, 20, 0.2) 50%, rgba(239, 248, 255, 0.3) 100%);
  padding: 0 30px;
  margin: 10px;
  position: relative;

  &:focus {
    outline: none;
  }

  &:after {
    content: 'after';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

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
            <Box sx={{background: 'rgba(239,248,255,0.2)', height: '50px', width: '100%'}}>
                <Grid container sx={{height: '100%'}}>
                    <Grid item lg={3} xs={3} sm={3} xl={3} md={3}>
                        <Item><Avatar src={LeftIcon} sx={{...positionCenter, width: '10px', height: '17px'}}/> </Item>
                        <Item><Avatar src={RightIcon} sx={{...positionCenter, width: '10px', height: '17px'}}/></Item>
                        <Item><Avatar src={Reload} sx={{...positionCenter, width: '16px', height: '17px'}}/></Item>
                        <Item><Avatar src={HomeIcon} sx={{...positionCenter, width: '17px', height: '18px'}}/></Item>
                    </Grid>
                    <Grid item lg={6} xs={6} sm={6} xl={6} md={6} sx={{position:'relative'}}>
                        <SearchInput/>
                        <Avatar src={SearchIcon} sx={{...positionCenter, width: '20px', height: '20px', position:'absolute',top:'50%',left:"30px"}}/>

                    </Grid>
                    <Grid item lg={3} xs={3} sm={3} xl={3} md={3} sx={{textAlign: 'right'}}>
                        <Item><Avatar src={MetaMask} alt={`Metamask`}
                                      sx={{...positionCenter, width: '20px', height: '20px'}}/></Item>
                        <Item><Avatar src={User} alt={`User`} sx={{...positionCenter, width: '100%', height: '100%'}}/></Item>
                        <Item><FontAwesomeIcon icon={faEllipsisVertical} style={{...positionCenter}}/></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Header;