import React from "react"

const SvgStar = props => (
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
        <polygon
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={10}
            points="12,3 15,9 21,10  17,14 18,21 12,17 6,21 7,14 3,10 9,9 "
        />
    </svg>
)

export default SvgStar
