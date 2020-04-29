import React from "react"
import styled from "styled-components/macro"
import { Button } from "components"
import { default as Layer } from "../layer"

interface Props
    extends React.HTMLAttributes<HTMLDivElement & HTMLButtonElement> {
    readonly children?: any // tslint:disable-line
    readonly size?: "small" | "medium"
    readonly onPress?: VoidFunction
}

const Styles = styled(Layer)<Props>`
    padding: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
    flex-grow: 0;
`

const Card: React.FC<Props> = ({ children, onPress }) => {
    if (onPress) {
        return (
            <Styles
                as={Button}
                name="card-button"
                title="Click to see card details"
                variant="content"
                onClick={onPress}
            >
                {children && children}
            </Styles>
        )
    }
    return <Styles>{children && children}</Styles>
}

export default Card
