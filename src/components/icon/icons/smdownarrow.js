import React from "react"

const SvgSmdownarrow = props => (
    <svg
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        enableBackground="new 0 0 24 24"
        xmlSpace="preserve"
        height={props.height}
        width={props.height}
        {...props}
    >
        <polyline
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            points="17,9 12,14 7,9 "
        />
    </svg>
)

export default SvgSmdownarrow
