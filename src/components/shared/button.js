import styled from "styled-components";
import {
    accentColour,
    textBtnColour,
    textBtnDisabledColour,
    textBtnHoverColour,
    themeRule,
} from "./colours";

const interactive = `
    cursor: pointer;
    transition: color 180ms ease, border-color 180ms ease, background 180ms ease;
    &:focus-visible { outline: 2px solid ${accentColour}; outline-offset: 4px; }
`;

export const TextBtn = styled.button`
    display: inline-flex;
    align-items: center;
    border: 0;
    background: none;
    color: ${textBtnColour};
    font: inherit;
    ${interactive}
    &:hover:not(:disabled) {
        color: ${textBtnHoverColour};
    }
    &:disabled {
        color: ${textBtnDisabledColour};
        cursor: default;
    }
`;

export const TextLink = styled.a`
    display: inline-flex;
    align-items: center;
    color: ${textBtnColour};
    text-decoration: none;
    ${interactive}
    &:hover:not(:disabled) {
        color: ${textBtnHoverColour};
    }
`;

export const LineBtn = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 0.85rem 1.1rem;
    border: 1px solid ${themeRule};
    background: rgba(8, 8, 8, 0.25);
    color: ${textBtnColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-decoration: none;
    text-transform: uppercase;
    ${interactive}
    &:hover {
        border-color: ${accentColour};
        background: ${accentColour};
        color: #04070a;
    }
`;

export const LineLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.65rem 0.8rem;
    border: 1px solid ${themeRule};
    color: ${textBtnColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.64rem;
    letter-spacing: 0.08em;
    text-decoration: none;
    text-transform: uppercase;
    ${interactive}
    &:hover {
        border-color: ${accentColour};
        color: ${accentColour};
    }
`;
