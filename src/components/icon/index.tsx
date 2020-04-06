/**
 * Icon
 *
 * TODO:
 * [ ] Better theme color props
 *
 * Usage:
 *     <Icon />
 * -----------------------------------------------------------------------------
 */
import React from "react"
import * as Icons from "./icons"
import { IconTypes } from "./types"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Icon: React.FunctionComponent<{
    /**
     * Props
     */
    readonly type: IconTypes
    readonly size?: number
    readonly color?: string
    readonly secondaryColor?: string
    readonly inverted?: boolean
}> = props => {
    // Default props
    const {
        type = "home",
        size = 24,
        color = props.inverted ? "#FFFFFF" : "#64009e", // TODO: JSON variables?
        secondaryColor = "transparent",
    } = props

    // Determine which SVG
    const SVG = Icons[type]

    /**
     * Template
     */
    return <SVG height={size} color={color} secondaryColor={secondaryColor} />
}

/**
 * Export component
 * -----------------------------------------------------------------------------
 */
export default Icon
