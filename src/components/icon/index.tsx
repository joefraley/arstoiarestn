import React from "react"
import * as Icons from "./icons"
import { IconTypes } from "./types"

interface Props {
    readonly type: IconTypes
    readonly size?: number
    readonly inverted?: boolean
    readonly color?: string
    readonly secondaryColor?: string
}

const Icon: React.FC<Props> = ({
    type = "home",
    size = 24,
    inverted = false,
    color = "currentcolor",
    secondaryColor = "transparent",
    ...props
}) => {
    const SVG = Icons[type]

    return (
        <SVG
            {...props}
            height={size}
            color={color}
            secondarycolor={secondaryColor}
        />
    )
}

export default Icon
