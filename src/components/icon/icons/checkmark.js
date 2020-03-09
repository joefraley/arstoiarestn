import React from "react"

const SvgCheckmark = props => (
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
            strokeLinejoin="round"
            strokeMiterlimit={10}
            points=" 7,13.5 9.7,16.2 17.9,8 "
        />
        <circle
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeMiterlimit={10}
            cx={12}
            cy={12}
            r={11}
        />
    </svg>
)

export default SvgCheckmark
