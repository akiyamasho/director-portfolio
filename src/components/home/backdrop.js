import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

import homeVideo from "../../assets/home.mp4";

const fadeIn = keyframes`
    from {
        background: rgba(0, 0, 0, 0.2);
    }
    
    to {
        background: rgba(0, 0, 0, 0.5);
    }
`;

const VideoBackdrop = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.7);

    animation: ${fadeIn} 1s ease-in forwards;
`;

const VideoBg = styled.video`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -2;
`;

const Backdrop = () => (
    <Fragment>
        <VideoBackdrop>&nbsp;</VideoBackdrop>
        <VideoBg loop muted autoPlay>
            <source src={homeVideo} type="video/mp4" />
        </VideoBg>
    </Fragment>
);

export default Backdrop;
