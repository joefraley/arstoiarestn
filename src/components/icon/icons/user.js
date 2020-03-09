import React from "react"

const SvgUser = props => (
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
        <ellipse
            transform="matrix(0.3827 -0.9239 0.9239 0.3827 1.8677 14.7883)"
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            cx={12}
            cy={6}
            rx={5}
            ry={5}
        />
        <path
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            d="M3,23c0-5,4-9,9-9 c5,0,9,4,9,9H3z"
        />
    </svg>
)

export default SvgUser
