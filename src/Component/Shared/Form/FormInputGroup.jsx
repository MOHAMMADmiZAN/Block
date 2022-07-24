import React from 'react';
import styled from "styled-components";

const FormInputGroupComponent = styled.div`
  position: relative;
  padding: 20px 0;
`
const FormLabel = styled.label`
  font-size: 13px;
  color: #fff;
  font-weight: 300;
  padding: 2px 5px;
  background: #000;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  min-width: 70%;
  position: absolute;
  top: 8px;
`
const FormInput = styled.input`
  width: 100%;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background: transparent;
  outline: none;
  color: #92929D;

  &:focus {
    border: 1px solid skyblue;
  }
`
const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: red;
`;

const FromSelectGroupComponent = styled.div`
  position: relative;
  padding: 20px 0;
`
const FormSelect = styled.select`
  width: 100%;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background: transparent;
  outline: none;
  color: #92929D;
`
const FormOption = styled.option`

`

function FormInputGroup({
                            label,
                            name,
                            value,
                            defaultValue,
                            type,
                            placeholder,
                            error,
                            onChange,
                            onFocus,
                            onBlur
                        }) {
    return (
        <>
            <FormInputGroupComponent>
                <FormLabel htmlFor={name}>{label}</FormLabel>
                <FormInput placeholder={placeholder ?? ''}
                           value={value}
                           onChange={onChange}
                           onFocus={onFocus}
                           onBlur={onBlur}
                           error={error}
                           id={name}
                           type={type}
                           defaultValue={defaultValue}
                />

                {error && <ErrorMessage>{error}</ErrorMessage>}
            </FormInputGroupComponent>
        </>
    );
}

export default FormInputGroup;