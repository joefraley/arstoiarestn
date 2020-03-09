import React from "react"

const SvgClock = props => (
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
        <g>
            <polyline
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                points="12,6 12,12  15,15  "
            />
            <circle
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                cx={12}
                cy={12}
                r={11}
            />
        </g>
    </svg>
)

export default SvgClock
