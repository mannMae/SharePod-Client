import React from 'react';
import styled from 'styled-components';

const Input = ({ children, ...props }) =>{
    const { id, type, placeholder, onChange, width, height } = props;

    const styles = {
      width:width,
      height:height,
    }
    return (
        <InputWrapper
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          onChange={onChange}
          {...styles}
        />
    );
};

Input.defaultProps = {
  width:100,
  height:20,
};

const InputWrapper = styled.input`
  --w:${(props) => props.width}px;
  --h:${(props) => props.height}px;
  width:var(--w);
  height:var(--h);
`

export default Input;