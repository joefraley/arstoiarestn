/**
 * Card
 *
 * Usage:
 *     <Card />
 * -----------------------------------------------------------------------------
 */
import React from "react"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Card: React.FunctionComponent<{
    /**
     * Props
     */
    readonly children?: any
    readonly size?: "small" | "medium"
    readonly onPress?: VoidFunction
}> = props => {
    /**
     * Template
     */
    return <div className="journi-card">{props.children && props.children}</div>
}

/**
 * Export component
 * -----------------------------------------------------------------------------
 */
export default Card
