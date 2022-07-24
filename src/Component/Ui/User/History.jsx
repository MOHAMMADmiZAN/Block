import React from 'react';
import styled from "styled-components";
import {useContext} from "react";
import {BrowserContextState} from "../../../Context/BrowserContext";
import checkIcon from '../../../App/assets/svg/Icons/Check.svg';
import GoogleIcon from '../../../App/assets/svg/Icons/Google.svg';
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TitleText = styled.h1`
  font-size: 24px;
  color: rgba(250, 250, 251, 0.6);
  font-weight: 300;
  padding-bottom: 10px;
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

const HistoryContainer = styled.div`
  margin-top: 10px;
`
const HistoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;

`
const IconBtn = styled.img`
  cursor: pointer;

`
const HistoryDate = styled.h6`
  font-size: 20px;
  color: #fff;
  font-weight: 300;
  margin-bottom: 20px;

`
const HistoryContentBox = styled.div`

`
const HistoryItemH6 = styled.h6`
  color: #fff;
  margin-left: 10px;

`

const historyData = [{
    date: ' Sunday , June 12, 2020', data: [{
        id: 1,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    }, {
        id: 2,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    }, {
        id: 3,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    }, {
        id: 3,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    }, {
        id: 3,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    }, {
        id: 3,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    }, {
        id: 3,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    }, {
        id: 3,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    }, {
        id: 3,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    }, {
        id: 3,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    }, {
        id: 3,
        name: 'random google search',
        url: 'https://www.google.com',
        time: '5:20 PM',
        status: 'Active',
        thumbnail: GoogleIcon
    },


    ]


}]

function History() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    return (<>
            <TitleText>Hi,{browserState.loginData.firstName} <TitleTextP>here’s your current
                sites</TitleTextP></TitleText>
            <HistoryContainer>
                {historyData.map((item, k) => (<HistoryContentBox key={k}>
                        <HistoryDate>{item.date}</HistoryDate>
                        {item.data.map((item, k) => (<HistoryItem key={k}>
                                <IconBtn src={checkIcon}/>
                                <HistoryItemH6>{item.time}</HistoryItemH6>
                                <img style={{marginLeft: '10px'}} src={item.thumbnail} alt={item.thumbnail}/>
                                <HistoryItemH6>{item.name}</HistoryItemH6>
                                <HistoryItemH6>{item.url}</HistoryItemH6>
                                <FontAwesomeIcon icon={faEllipsisVertical}
                                                 style={{color: '#fff', position: 'absolute', right: '0'}}/>
                            </HistoryItem>))}
                    </HistoryContentBox>

                ))}

            </HistoryContainer>


        </>);
}

export default History;