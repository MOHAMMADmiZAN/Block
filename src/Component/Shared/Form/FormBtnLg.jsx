import React from 'react';
import styled from "styled-components";
const FormButtonLarge = styled.button`
  width: 100%;
  border-radius: 20px;
  margin-top: 10px;
  background: #0683FF;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  border: none;
  outline: none;

`
function FormBtnLg({children,onClick}) {
    return (
        <FormButtonLarge onClick={onClick}>{children}</FormButtonLarge>
    );
}

export default FormBtnLg;