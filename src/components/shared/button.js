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

    transition: 0.1s ease-in;

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
