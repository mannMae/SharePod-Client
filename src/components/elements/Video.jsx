import styled from 'styled-components';
import React from "react";

const Video = (props) => {
    const {height, width, src, controls} = props;

    const styles = {
        src: src,
        height:height,
        width:width,
    }
    if(controls) {
        return(
            <VideoWrapper controls>
                <source src={props.src}></source>
            </VideoWrapper>
        )
    }

    return (
        <VideoWrapper>
            <source src={props.src}></source>
        </VideoWrapper>
    )
}

Video.defaultProps = {
    controls:false,
};


const VideoWrapper = styled.video`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit:fill;
`;

export default Video;