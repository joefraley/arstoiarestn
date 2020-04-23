/**
 * Button
 *
 * TODO: Analytics event tracking
 * TODO: Element `data-test` tags for testing
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { Icon, Row } from "components"
import { IconTypes } from "components/icon/types"
import styled, { css } from "styled-components/macro"
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
        background: ${({ theme }) => theme.palette.secondary.light};
        color: ${({ theme }) => theme.palette.secondary.contrastText};
    `,
    link: css`
        background: transparent;
        color: ${({ theme }) => theme.palette.primary.main};
    `,
    content: css`
        color: currentcolor;
    `,
}

const sizes = {
    small: css`
        border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
        font-size: ${modularScale(-2, "1rem", "perfectFourth")};
        min-height: ${({ theme }) => theme.spacing.sm};
        padding-left: ${({ theme }) => theme.spacing.xss};
        padding-right: ${({ theme }) => theme.spacing.xss};
    `,
    large: css`
        border-radius: ${({ theme }) => theme.shape.borderRadius.lg};
        font-size: ${modularScale(1, "1rem", "perfectFourth")};
        min-height: ${({ theme }) => theme.spacing.lg};
        padding-left: ${({ theme }) => theme.spacing.xs};
        padding-right: ${({ theme }) => theme.spacing.xs};
    `,
}

const ButtonIcon = styled(Icon)`
    color: inherit;
`

const Styles = styled(Row)<Props>`
    appearance: none;
    background: none;
    border-radius: ${({ theme }) => theme.shape.borderRadius.lg};
    font-family: ${({ theme }) => theme.typography.button.fontFamily};
    font-size: ${({ theme }) => theme.typography.button.fontSize};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    min-height: ${({ theme }) => theme.spacing.lg};
    overflow: visible;
    padding-left: ${({ theme }) => theme.spacing.xs};
    padding-right: ${({ theme }) => theme.spacing.xs};
    cursor: pointer;
    text-transform: none;

    &:hover,
    &:focus {
        opacity: ${({ theme }) => theme.palette.action.hover};
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
        flex-grow: 0;
        flex-shrink: 0;
        padding-left: 0;
        padding-right: 0;
        text-align: center;

        svg {
            position: relative;
            top: ${({ size = "medium" }) => {
                const offset = {
                    large: "7px",
                    medium: "5px",
                    small: "3px",
                }
                return offset[size]
            }};
        }
    }
`

const ButtonLabel = styled.span`
    align-item: center;
    color: currentcolor;
    display: inline-flex;
    flex-grow: 0;
    font-size: inherit;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: left;
    vertical-align: middle;
`

const iconSizes = { large: 24, medium: 20, small: 16 }
const Button: React.FC<Props> = ({
    children,
    icon,
    inverted = false,
    label = "",
    name = "",
    onClick,
    size = "medium",
    variant = "primary",
    ...props
}) => {
    return (
        <Styles
            as="button"
            data-test={name}
            grow={0}
            id={name}
            inverted={inverted}
            onClick={onClick}
            size={size}
            type="button"
            variant={variant}
            {...props}
        >
            {icon && (
                <ButtonIcon
                    inverted={variant === "primary"}
                    size={iconSizes[size]}
                    type={icon}
                />
            )}
            {label && <ButtonLabel>{label}</ButtonLabel>}
            {children && children}
        </Styles>
    )
}

export default Button
