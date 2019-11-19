import styled from "styled-components";
import {
    textBtnColour,
    textBtnHoverColour,
    textBtnDisabledColour,
} from "./colours";

export const TextBtn = styled.button`
    background: none;
    border: none;
    text-decoration: none;

    display: flex;
    align-items: center;
    text-align: center;
    padding: 0;

    cursor: pointer;
    font-size: 1em;

    transition: 0.2s cubic-bezier(0.355, 0.045, 0.645, 0);

    color: ${textBtnColour};

    &:hover:not(:disabled) {
        color: ${textBtnHoverColour};
    }

    &:disabled {
        color: ${textBtnDisabledColour};
    }

    &:focus {
        outline: none;
    }
`;

export const LineBtn = styled.button`
    background: none;
    color: ${textBtnColour};
    border: 1px solid ${textBtnColour};

    font-size: 1em;
    letter-spacing: 1px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;

    width: auto;
    padding: 0.25em 1em;
    display: inline-block;
    border-radius: 3px;

    cursor: pointer;

    transition: 0.2s cubic-bezier(0.355, 0.045, 0.645, 0);

    &:hover {
        border: 1px solid ${textBtnHoverColour};
        color: ${textBtnHoverColour};
        background: rgba(255, 255, 255, 0.2);
    }

    &:active {
        outline: rgba(255, 255, 255, 0.7);
    }

    &:focus {
        outline: rgba(255, 255, 255, 0.7);
    }
`;
