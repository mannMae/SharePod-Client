import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { text, _onClick,  children, margin, width, padding} = props;

    const styles = {
        margin:margin,
        width:width,
        padding:padding,
    };

    return (
        <>
            <ElButton {...styles} onClick={_onClick}>
                {text ? text : children}
            </ElButton>
        </>
    );    
};

Button.defaultProps = {
    text:false,
    children:null,
    _onClick: () => {},
    is_float:false,
    margin:false,
    width:"100%",
    padding: "15px 46px",
};

const ElButton = styled.button`
    width:${(props) => props.width};
    background-color:#8c8c8c;
    color:#fff;
    padding:${(props) => props.padding};
    box-sizing:border-box;
    border:none;
    border-radius:10px;
    ${(props) => (props.margin? `margin: ${props.margin};` : "")}
`;


export default Button;