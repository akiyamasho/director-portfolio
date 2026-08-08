import React from "react";
import styled from "styled-components";
import homeVideo from "../../assets/home.mp4";

const Scene = styled.div`
    position: fixed;
    z-index: 0;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
`;

const Veil = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
            90deg,
            rgba(4, 7, 10, 0.74) 0%,
            rgba(4, 7, 10, 0.48) 55%,
            rgba(4, 7, 10, 0.2) 100%
        ),
        linear-gradient(0deg, rgba(4, 7, 10, 0.7), transparent 48%);
`;

const Video = styled.video`
    position: absolute;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.72) contrast(1.08) brightness(0.82);
`;

const Backdrop = () => (
    <Scene aria-hidden="true">
        <Veil />
        <Video loop muted autoPlay playsInline>
            <source src={homeVideo} type="video/mp4" />
        </Video>
    </Scene>
);

export default Backdrop;
