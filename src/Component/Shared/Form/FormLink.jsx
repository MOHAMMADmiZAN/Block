import React from 'react';
import styled from "styled-components";
const FormLinkComponent = styled.a`
  color: #0683FF;
  cursor: pointer;
`
function FormLink({children,href}) {
    return (
       <FormLinkComponent herf={href}>{children}</FormLinkComponent>
    );
}

export default FormLink;