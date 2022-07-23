import React, {useEffect, useState} from 'react';
import PlusIcon from "../../../App/assets/svg/Icons/plus.svg";
import {Button} from "@mui/material";

const ProfileAddStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '10px',
    border: '1px solid #000',
}


function ImageAddBtn({children, change}) {


    return (
        <Button variant="outlined" component="label" sx={{...ProfileAddStyle}}>
            {!children&&<img src={PlusIcon} alt={PlusIcon}/>}
            {children}
            <input hidden accept="image/*" multiple type="file" onChange={change}/>
        </Button>
    );
}

export default ImageAddBtn;