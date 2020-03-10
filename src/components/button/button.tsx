/**
 * Button
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { Icon } from "components"
import { IconTypes } from "components/icon/types"
import "./button.scss"

/**
 * Types
 * -----------------------------------------------------------------------------
 */
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    readonly onPress: VoidFunction
    readonly name: string // element name for analytics/testing
    readonly label?: string // button text
    readonly title?: string // element description for a11y
    readonly variant?: "primary" | "secondary" | "link" | "content"
    readonly size?: "small" | "medium" | "large"
    readonly icon?: IconTypes
    readonly inverted?: string
}

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Button: React.FunctionComponent<Props> = props => {
    /**
     * Destructured default props
     */
    const {
        onPress,
        name,
        className,
        label,
        icon,
        variant = "primary",
        size = "medium",
        inverted = false,
        ...elementProps
    } = props

    /**
     * Define variant styles
     */
    const classNames = [
        "journi-button",
        `journi-button-${variant}`,
        `journi-button-${size}`,
        icon ? "journi-button-icon" : "",
        inverted ? "journi-button-inverted" : "",
        className,
    ].join(" ")

    /**
     * Define icon props
     */
    const iconInverted = variant === "primary"
    const iconSize = size === "large" ? 24 : size === "medium" ? 20 : 16

    /**
     * Template
     */
    return (
        <button
            id={name}
            className={classNames}
            type="button"
            onClick={props.onPress}
            {...elementProps}
        >
            {props.label && props.label}
            {icon && (
                <Icon type={icon} inverted={iconInverted} size={iconSize} />
            )}
            {props.children && props.children}
        </button>
    )
}

/**
 * Export component
 * -----------------------------------------------------------------------------
 */
export default Button
