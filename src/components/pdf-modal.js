import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LineBtn, TextBtn } from "./shared/button";
import {
    accentColour,
    projectorLight,
    themeColour,
    themeMuted,
    themeRule,
} from "./shared/colours";

const Backdrop = styled.div`
    position: fixed;
    z-index: 1000;
    inset: 0;
    display: grid;
    place-items: center;
    padding: clamp(0.5rem, 2vw, 1.5rem);
    background: rgba(2, 5, 7, 0.88);
    backdrop-filter: blur(8px);
`;

const Dialog = styled.section`
    display: flex;
    flex-direction: column;
    width: min(1400px, 100%);
    height: min(94dvh, 1050px);
    overflow: hidden;
    border: 1px solid ${themeRule};
    background: #0d1215;
    box-shadow: 0 1.5rem 5rem rgba(0, 0, 0, 0.55);
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
    min-height: 4.2rem;
    padding: 0.75rem clamp(0.75rem, 2vw, 1.4rem);
    border-bottom: 1px solid ${themeRule};
`;

const Title = styled.h2`
    min-width: 0;
    margin: 0 auto 0 0;
    overflow: hidden;
    color: ${themeColour};
    font-size: clamp(0.78rem, 1.4vw, 1rem);
    font-weight: 500;
    line-height: 1.35;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const SourceLink = styled.a`
    flex: 0 0 auto;
    color: ${projectorLight};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.62rem;
    letter-spacing: 0.06em;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        color: ${accentColour};
    }
`;

const CloseButton = styled.button`
    flex: 0 0 auto;
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid ${themeRule};
    background: transparent;
    color: ${themeColour};
    cursor: pointer;
    font-size: 1.35rem;

    &:hover,
    &:focus-visible {
        border-color: ${projectorLight};
        color: ${projectorLight};
    }
`;

const Viewer = styled.iframe`
    width: 100%;
    min-height: 0;
    flex: 1 1 auto;
    border: 0;
    background: #e8e8e8;
`;

const Hint = styled.span`
    color: ${themeMuted};
`;

const PdfModalLink = ({
    children,
    className,
    locale,
    pdfUrl,
    sourceUrl,
    title,
    variant = "text",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeRef = useRef(null);
    const previousFocusRef = useRef(null);
    const isJapanese = locale === "ja";
    const Trigger = variant === "line" ? LineBtn : TextBtn;

    useEffect(() => {
        if (!isOpen) return undefined;

        previousFocusRef.current = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();

        const closeOnEscape = (event) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", closeOnEscape);
            previousFocusRef.current?.focus();
        };
    }, [isOpen]);

    return (
        <>
            <Trigger
                className={className}
                type="button"
                onClick={() => setIsOpen(true)}
            >
                {children}
            </Trigger>
            {isOpen && (
                <Backdrop
                    role="presentation"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setIsOpen(false);
                        }
                    }}
                >
                    <Dialog role="dialog" aria-modal="true" aria-label={title}>
                        <Header>
                            <Title>{title}</Title>
                            <SourceLink
                                href={sourceUrl || pdfUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {isJapanese ? "出典 ↗" : "Source ↗"}
                            </SourceLink>
                            <CloseButton
                                ref={closeRef}
                                type="button"
                                aria-label={
                                    isJapanese
                                        ? "PDFビューアを閉じる"
                                        : "Close PDF viewer"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                ×
                            </CloseButton>
                        </Header>
                        <Viewer src={`${pdfUrl}#view=FitH`} title={title} />
                        <Hint hidden>
                            {isJapanese
                                ? "表示できない場合は、別タブでPDFを開いてください。"
                                : "If the viewer is unavailable, open the PDF in a new tab."}
                        </Hint>
                    </Dialog>
                </Backdrop>
            )}
        </>
    );
};

PdfModalLink.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    locale: PropTypes.string.isRequired,
    pdfUrl: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["line", "text"]),
};

export default PdfModalLink;
