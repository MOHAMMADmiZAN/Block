import React from 'react';
import {useContext} from "react";
import {BrowserContextState} from "../../../Context/BrowserContext";
import styled from "styled-components";
import GroupShopIcon from "../../../App/assets/svg/Icons/GroupShop.svg";
import Member1Icon from "../../../App/assets/svg/avatar/m1.svg";
import Member2Icon from "../../../App/assets/svg/avatar/m2.svg";
import Member3Icon from "../../../App/assets/svg/avatar/m3.svg";
import Member4Icon from "../../../App/assets/svg/avatar/m4.svg";
import {Typography} from "@mui/material";
import FirstMessage from "../../../App/assets/svg/Icons/ChatGreen.svg";
import SecondMessage from "../../../App/assets/svg/Icons/Left Message Blue.svg";
import ThirdMessage from "../../../App/assets/svg/Icons/Right Message.svg";
import SendIcon from "../../../App/assets/svg/Icons/Send Icon.svg";
import Attachment from "../../../App/assets/svg/Icons/Attachment Icon.svg";


const TitleText = styled.h1`
  font-size: 24px;
  color: rgba(250, 250, 251, 0.6);
  font-weight: 300;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
`
const GroupMember = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #979797;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin: 0 5px;

`
const IconBtn = styled.img`
  cursor: pointer;


`;
const ChatContainer = styled.div`
  border: 1px solid rgba(146, 146, 157, 0.4);
  width: 100%;
  height: 700px;
  border-radius: 15px;
  margin-top: 30px;
  position: relative;
  padding: 30px;
`
const ChatImage = styled.img`
  position: absolute;

`
const ChatInputContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: rgba(112, 112, 112, 0.4);
  width: 93%;
  border-radius: 10px;
  cursor: pointer;

`
const ChatInputIcon = styled.img`
  padding: 0 15px;
`;
const ChatInputIcons = styled.div`
  display: flex;
  align-items: center;

`;


const ChatGroupData = [{
    title: 'Shopping', thumbnail: GroupShopIcon, ChatDate: 'June 19, 2021', id: 1, members: [{
        name: 'John Doe', avatar: Member1Icon, id: 1
    }, {
        name: 'John Doe', avatar: Member2Icon, id: 2
    }, {
        name: 'John Doe', avatar: Member3Icon, id: 3
    }, {
        name: 'John Doe', avatar: Member4Icon, id: 4
    }]

}]


function Chat() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    const [memberList, setMemberList] = React.useState(
        [{
            name: 'John Doe', avatar: Member1Icon, id: 1
        }, {
            name: 'John Doe', avatar: Member2Icon, id: 2
        }, {
            name: 'John Doe', avatar: Member3Icon, id: 3
        }, {
            name: 'John Doe', avatar: Member4Icon, id: 4
        }]
    );
    return (<>
        <TitleText>{ChatGroupData[0].title} {memberList.map(m => {
            return <GroupMember key={m.id}><IconBtn src={m.avatar}></IconBtn></GroupMember>
        })} <GroupMember><Typography paragraph={true} sx={{
            fontSize: '15px',
            lineHeight: '30px'
        }}>+3</Typography></GroupMember></TitleText>
        <ChatContainer>
            <ChatImage src={FirstMessage} style={{top: '30px', left: '30px'}}/>
            <ChatImage src={ThirdMessage} style={{top: '25%', right: '30px'}}/>
            <ChatImage src={SecondMessage} style={{bottom: '100px', left: '30px'}}/>
            <ChatInputContainer>
                <Typography paragraph={true} sx={{
                    fontSize: '15px',
                    marginBottom: '0',
                    color: '#707070'
                }}>Type Your Message</Typography>
                <ChatInputIcons>
                    <ChatInputIcon src={Attachment}/>
                    <ChatInputIcon src={SendIcon} style={{borderLeft:'1px solid #707070 '}}/>

                </ChatInputIcons>


            </ChatInputContainer>
        </ChatContainer>
    </>);
}

export default Chat;