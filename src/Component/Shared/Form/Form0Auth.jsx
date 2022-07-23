import React from 'react';
import styled from "styled-components";

const FormOAuthComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`
function Form0Auth({children}) {
    return (
        <FormOAuthComponent>{children}</FormOAuthComponent>
    );
}

export default Form0Auth;