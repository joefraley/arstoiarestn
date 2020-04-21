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

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    readonly name?: string // element name for analytics/testing
    readonly label?: string // button text
    readonly title?: string // element description for a11y
    readonly variant?: "primary" | "secondary" | "link" | "content"
    readonly size?: "small" | "medium" | "large"
    readonly icon?: IconTypes
    readonly inverted?: string
}

const variants = {
    primary: css`
        background: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.common.white};
    `,
    secondary: css`
        background: rgba($warm-gray-900, 0.3);
        color: $primary;
    `,
    link: css`
        background: transparent;
        color: $primary;
    `,
}

const sizes = {
    small: css`
        border-radius: 0.75rem;
        font-size: 0.875rem;
        height: 1.5rem;
        line-height: 1.5rem;
        padding-left: $spacing-xxs;
        padding-right: $spacing-xxs;
    `,
    large: css`
        border-radius: 1.25rem;
        font-size: 1rem;
        height: 2.5rem;
        line-height: 2.5rem;
        padding-left: $spacing-xs;
        padding-right: $spacing-xs;
    `,
}

const ButtonIcon = styled(Icon)``

const Styles = styled.button<Props>`
    appearance: none;
    background: none;
    border-radius: ${({ theme }) => theme.shape.borderRadius.md};
    font-family: ${({ theme }) => theme.typography.button.fontFamily};
    font-size: ${({ theme }) => theme.typography.button.fontSize};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    height: ${({ theme }) => theme.spacing.md};
    line-height: ${({ theme }) => theme.spacing.md};
    overflow: visible;
    padding-left: ${({ theme }) => theme.spacing.xs};
    padding-right: ${({ theme }) => theme.spacing.xs};
    text-transform: none;

    &:hover,
    &:focus {
        background: ${({ theme }) => theme.palette.action.hover};
    }
    &:active {
        transform: translateY(1px);
    }

    ${({ variant = "primary" }) => variants[variant]}
    ${({ size = "medium" }) => sizes[size]}

    ${ButtonIcon} {
        height: ${({ theme }) => theme.spacing.md};
        padding-left: 0;
        padding-right: 0;
        text-align: center;
        width: ${({ theme }) => theme.spacing.md};
        height: ${({ size = "medium", theme }) =>
            size === "large" ? theme.spacing.lg : theme.spacing.sm};
        width:  ${({ size = "medium", theme }) =>
            size === "large" ? theme.spacing.lg : theme.spacing.sm};
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
    label = "",
    name = "",
    onClick,
    size = "medium",
    variant = "primary",
}) => {
    const iconSizes = { large: 24, medium: 20, small: 16 }
    return (
        <Styles id={name} data-test={name} type="button" onClick={onClick}>
            {label && label}
            {icon && (
                <ButtonIcon
                    type={icon}
                    inverted={variant === "primary"}
                    size={iconSizes[size]}
                />
            )}
            {children && children}
        </Styles>
    )
}

export default Button
