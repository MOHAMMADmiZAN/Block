import React, {useEffect, useState,useContext} from 'react';
import {ethers} from "ethers";
import styled from "styled-components";
import {Button} from "@mui/material";

import {BrowserContextState} from "../../Context/BrowserContext";

const WalletCard = styled.div`
  width: 170px;
  padding: 20px 0;
  border-radius: 15px;
  background: rgba(31, 31, 31, 0.5);
  position: absolute;
  top: 0;
  right: 0;
`

function Index() {
    const [data, setData] = useState({
        address: "",
        Balance: null,
    });
    const {browserState, setBrowserState} = useContext(BrowserContextState);

   //metamask wallet disconnected function
    const handleDisconnect = () => {
        setBrowserState({...browserState, isShowWallet: false});

    }


    const btnHandler = () => {

        // Asking if metamask is already present or not
        if (window.ethereum) {

            // res[0] for fetching a first wallet
            window.ethereum.request({method: "eth_requestAccounts"})
                .then((res) => {
                   setBrowserState({...browserState,walletAddress: res[0]})
                    accountChangeHandler(res[0])
                });
        } else {
            alert("install metamask extension!!");
        }
    };
    // / getbalance function for getting a balance in
    // a right format with help of ethers
    const getBalance = (address) => {

        // Requesting balance method
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            .then((balance) => {

                // Setting balance
                setData({
                    ...data,
                    Balance: ethers.utils.formatEther(balance),
                });
            });
    };

    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        // Setting an address data
        setData({
            ...data,
            address: account,
        });


        // Setting a balance
        getBalance(account);
    };
    return (
        <>
            <WalletCard>
                <Button onClick={btnHandler}>Click</Button>
                {/*Balance: {data.Balance}*/}
                Address: {browserState.walletAddress}
            </WalletCard>
        </>
    );
}

export default Index;