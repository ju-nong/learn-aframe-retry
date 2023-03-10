import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { lighten, darken } from "polished";

interface StyledProps {
    colorConfig: {
        bgColor: string;
        color: string;
    };

    positionConfig: {
        right: number;
        bottom: number;
    };
}

const JumpButtonStyled = styled.button<StyledProps>`
    position: fixed;
    z-index: 100;
    border-radius: 100%;
    cursor: pointer;

    ${(props) => {
        const { color, bgColor } = props.colorConfig;
        const { right, bottom } = props.positionConfig;

        return css`
            right: ${right}px;
            bottom: ${bottom}px;

            color: ${color};
            background-color: ${bgColor};

            &.hover {
                color: ${lighten(0.2, color)};
                background-color: ${lighten(0.2, bgColor)};
            }

            &.active {
                color: ${darken(0.2, color)};
                background-color: ${darken(0.2, bgColor)};
            }
        `;
    }}

    &.large {
        width: 7rem;
        height: 7rem;
        font-size: 1.75rem;
    }

    &.medium {
        width: 5rem;
        height: 5rem;
        font-size: 1.25rem;
    }

    &.large {
        width: 3rem;
        height: 3rem;
        font-size: 0.75rem;
    }
`;

interface JumpButtonProps {
    size: "large" | "medium" | "small";
    theme: "dark" | "white" | "primary";
    position?: {
        right: number;
        bottom: number;
    };
}

function JumpButton({ size, theme, position }: JumpButtonProps) {
    const colorConfig = {
        dark: {
            bgColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
        },
        primary: {
            bgColor: "rgba(238, 187, 255, 0.7)",
            color: "#fff",
        },
        white: {
            bgColor: "rgba(255, 255, 255, 0.7)",
            color: "#000",
        },
    };

    const positionConfig = {
        right: position?.right ?? 30,
        bottom: position?.bottom ?? 60,
    };

    return (
        <JumpButtonStyled
            colorConfig={colorConfig[theme]}
            positionConfig={positionConfig}
            className={size}
            id="jump"
        >
            JUMP
        </JumpButtonStyled>
    );
}

export { JumpButton as default };
