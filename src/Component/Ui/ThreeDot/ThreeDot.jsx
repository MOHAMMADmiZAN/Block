import React, {useState} from 'react';
import styled from 'styled-components';
import close from '../../../App/assets/svg/Icons/close.svg';

import {useContext} from "react";
import {BrowserContextState} from "../../../Context/BrowserContext";


const init = {
    title: 'List Of Actions',
    icon: '',
    actions: [
        {
            actionName: 'Login',


        },
        {
            actionName: 'Signup',


        },
        {
            actionName: 'Settings',


        },
        {
            actionName: 'Close',


        }
    ]

}

const ThreeDotList = styled.div`
  width: 170px;
  padding: 20px 0;
  border-radius: 15px;
  background: rgba(31, 31, 31, 0.5);
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 9999;

`
const ThreeDotTitle = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  color: #71717A;
  padding: 0 15px 10px 15px;
`
const ThreeDotListItem = styled.li`
  font-size: 11px;
  color: #D5D5DC;
  padding: 7px 15px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: black;
    background: rgba(255, 255, 255, 0.7);
  }
`
const ThreeDotListUl = styled.ul`
`


function ThreeDot() {
    const [ThreeDotListData] = useState(init);
    const {browserState, setBrowserState} = useContext(BrowserContextState);


    const handleClick = (e) => {
        let {id} = e.target;
        if (id === 'Login') {
            setBrowserState({
                ...browserState,
                isLogin: true,
            })

        } else if (id === 'Signup') {
            setBrowserState({
                ...browserState,
                isSignup: true,
            })
        } else if (id === 'Settings') {
            setBrowserState({
                ...browserState,
                isSettings: true,
            })
        }
        else if (id === 'Close') {
            setBrowserState({
                ...browserState,
                isClose: true,
            })
        }
        console.log(browserState)
    }


return (
    <>
        <ThreeDotList>
            <ThreeDotTitle> {ThreeDotListData.title} <img src={close} alt={close} style={{cursor: 'pointer'}} id={'Close'} onClick={handleClick}/></ThreeDotTitle>
            <ThreeDotListUl>
                {ThreeDotListData.actions.map((item, index) => {
                    return (
                        <ThreeDotListItem key={index} id={`${item.actionName}`}
                                          onClick={handleClick}>{item.actionName}</ThreeDotListItem>
                    )
                })}
            </ThreeDotListUl>


        </ThreeDotList>
    </>
)
}


export default ThreeDot;