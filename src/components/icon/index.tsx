import React from "react"
import * as Icons from "./icons"
import { IconTypes } from "./types"

interface Props {
    type: IconTypes
    size?: number
    inverted?: boolean
    color?: string
    secondaryColor?: string
}

const Icon: React.FC<Props> = ({
    type = "home",
    size = 24,
    inverted = false,
    color = "currentcolor",
    secondaryColor = "transparent",
}) => {
    const SVG = Icons[type]

    return <SVG height={size} color={color} secondarycolor={secondaryColor} />
}

export default Icon
