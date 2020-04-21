/**
 * Button
 *
 * TODO: Analytics event tracking
 * TODO: Element `data-test` tags for testing
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { Icon } from "components"
import { IconTypes } from "components/icon/types"
import styled, { css } from "styled-components"
import { modularScale } from "polished"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    readonly icon?: IconTypes
    readonly inverted?: boolean
    readonly label?: string // button text
    readonly name?: string // element name for analytics/testing
    readonly size?: "small" | "medium" | "large"
    readonly title?: string // element description for a11y
    readonly variant?: "primary" | "secondary" | "link" | "content"
}

const variants = {
    primary: css`
        background: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.primary.contrastText};
    `,
    secondary: css`
        background: ${({ theme }) => theme.palette.secondary.dark};
        color: ${({ theme }) => theme.palette.secondary.contrastText};
    `,
    link: css`
        background: transparent;
        color: ${({ theme }) => theme.palette.primary.main};
    `,
}

const sizes = {
    small: css`
        border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
        font-size: ${modularScale(-2, "1rem", "perfectFourth")};
        height: ${({ theme }) => theme.spacing.sm};
        line-height: ${({ theme }) => theme.spacing.sm};
        padding-left: ${({ theme }) => theme.spacing.xss};
        padding-right: ${({ theme }) => theme.spacing.xss};
    `,
    large: css`
        border-radius: ${({ theme }) => theme.shape.borderRadius.lg};
        font-size: ${modularScale(1, "1rem", "perfectFourth")};
        height: ${({ theme }) => theme.spacing.lg};
        line-height: ${({ theme }) => theme.spacing.lg};
        padding-left: ${({ theme }) => theme.spacing.xs};
        padding-right: ${({ theme }) => theme.spacing.xs};
    `,
}

const ButtonIcon = styled(Icon)`
    color: inherit;
`

const Styles = styled.button<Props>`
    align-items: center;
    appearance: none;
    background: none;
    border-radius: ${({ theme }) => theme.shape.borderRadius.md};
    display: inline-flex;
    font-family: ${({ theme }) => theme.typography.button.fontFamily};
    font-size: ${({ theme }) => theme.typography.button.fontSize};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    height: ${({ theme }) => theme.spacing.md};
    justify-content: center;
    line-height: ${({ theme }) => theme.spacing.md};
    overflow: visible;
    padding-left: ${({ theme }) => theme.spacing.xs};
    padding-right: ${({ theme }) => theme.spacing.xs};
    text-transform: none;

    &:hover,
    &:focus {
        opaciy: ${({ theme }) => theme.palette.action.hover};
    }
    &:active {
        transform: translateY(1px);
    }

    ${({ variant = "primary" }) => variants[variant]}
    ${({ size = "medium" }) => {
        const styles = sizes[size]
        return styles
    }}

    ${ButtonIcon} {
        height: ${({ size = "medium", theme }) =>
            size === "large"
                ? theme.spacing.lg
                : size === "medium"
                ? theme.spacing.md
                : theme.spacing.sm};
        padding-left: 0;
        padding-right: 0;
        text-align: center;
        width:  ${({ size = "medium", theme }) =>
            size === "large"
                ? theme.spacing.lg
                : size === "medium"
                ? theme.spacing.md
                : theme.spacing.sm};
        svg {
            position: relative;
            top: ${({ size = "medium" }) => {
                const sizes = {
                    large: "7px",
                    medium: "5px",
                    small: "3px",
                }
                return sizes[size]
            }};
        }
    }
`

const Button: React.FunctionComponent<Props> = ({
    children,
    icon,
    inverted = false,
    label = "",
    name = "",
    onClick,
    size = "medium",
    variant = "primary",
}) => {
    const iconSizes = { large: 24, medium: 20, small: 16 }
    return (
        <Styles
            data-test={name}
            id={name}
            inverted={inverted}
            onClick={onClick}
            size={size}
            type="button"
            variant={variant}
        >
            {label && label}
            {icon && (
                <ButtonIcon
                    inverted={variant === "primary"}
                    size={iconSizes[size]}
                    type={icon}
                />
            )}
            {children && children}
        </Styles>
    )
}

export default Button
