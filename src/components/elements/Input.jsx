import React from 'react';
import styled from 'styled-components';

const Input = ({ children, ...props }) =>{
    const { id, type, placeholder, onChange } = props;
    return (
        <InputWrapper
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          onChange={onChange}
        />
    );
};

const InputWrapper = styled.input`

`

export default Input;