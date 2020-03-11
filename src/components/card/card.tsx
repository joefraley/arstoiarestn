/**
 * Card
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { Button } from "components"
import "./card.scss"

/**
 * Types
 * -----------------------------------------------------------------------------
 */
interface Props
    extends React.HTMLAttributes<HTMLDivElement & HTMLButtonElement> {
    readonly children?: any // tslint:disable-line
    readonly size?: "small" | "medium"
    readonly onPress?: VoidFunction
}

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Card: React.FunctionComponent<Props> = props => {
    /**
     * Template
     */
    if (props.onPress) {
        return (
            <Button
                name="card-button"
                title="Click to see card details"
                className={`journi-card ${props.className}`}
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
