import React from "react"

const SvgTopical = props => (
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
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M5.3,18.6 C6.5,19.8,8,20.2,8,20.2L22,8.6l-3.3-3.3l-3.3-3.3L3.8,16C3.8,16,4.2,17.5,5.3,18.6L5.3,18.6z"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
                d="M4.2,17l-1.9,1.8c-0.3,0.3-0.4,0.9,0,1.2L4,21.7 c0.3,0.3,0.8,0.3,1.2,0L7,19.8"
            />
        </g>
    </svg>
)

export default SvgTopical
