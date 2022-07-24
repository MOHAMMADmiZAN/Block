import React from 'react';
import {useContext} from "react";
import {BrowserContextState} from "../../../Context/BrowserContext";
import styled from "styled-components";
import ShopIconLarge from '../../../App/assets/svg/Icons/ShopLarge.svg';


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
const ShopContainer = styled.div`
  border: 1px solid rgba(146, 146, 157, 0.4);
  width: 100%;
  height: 700px;

  border-radius: 15px;
  margin-top: 30px;
  padding: 30px;
  position: relative;
`
const ShopTitle = styled.h1`
  font-size: 16px;
  color: rgba(250, 250, 251, 0.6);
  font-weight: 300;
  margin-top: 10px;
  margin-left: 20px;
`;
const ShopContent = styled.div`
  text-align: center;
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const ShopIcon = styled.img``;
const ShopTitleP = styled.p`
  font-size: 16px;
  color: rgba(250, 250, 251, 0.6);
  font-weight: 300;
`


function Shop() {
    const {browserState, setBrowserState} = useContext(BrowserContextState);
    return (
        <>
            <TitleText>Hi, {browserState.loginData.firstName} <TitleTextP>here’s all your products Wishlist </TitleTextP></TitleText>
            <ShopContainer>
                <ShopTitleP>Cart</ShopTitleP>
                <ShopContent>
                    <ShopIcon src={ShopIconLarge}></ShopIcon>
                    <ShopTitle>Your Cart is Empty</ShopTitle>
                </ShopContent>
            </ShopContainer>

        </>
    );
}

export default Shop;