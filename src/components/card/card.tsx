/**
 * Card
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { Button } from "components"
import "./card.scss"

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
    if (props.onPress) {
        return (
            <Button
                name="card-button"
                title="Click to see card details"
                className="journi-card"
                variant="content"
                onPress={() => false}
            >
                {props.children && props.children}
            </Button>
        )
    }
    return <div className="journi-card">{props.children && props.children}</div>
}

/**
 * Export component
 * -----------------------------------------------------------------------------
 */
export default Card
