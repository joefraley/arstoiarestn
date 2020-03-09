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
import "./icon.scss"
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
    type: IconTypes
    size?: number
    color?: string
    secondaryColor?: string
    inverted?: boolean
}> = props => {
    // Default props
    const {
        type = "home",
        size = 24,
        color = props.inverted ? "#FFFFFF" : "#282831",
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
