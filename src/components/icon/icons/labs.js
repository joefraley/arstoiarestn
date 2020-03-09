import React from "react"

const SvgLabs = props => (
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
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M11.9,21.9H5.7 c-2,0-3.4-2.1-2.6-4l5.4-12V2.1h7V6l5.4,12c0.8,1.9-0.5,4-2.6,4h-6.2h-0.2V21.9z"
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={6.5}
                y1={11}
                x2={10.3}
                y2={11}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={4.2}
                y1={16}
                x2={19.8}
                y2={16}
            />
        </g>
    </svg>
)

export default SvgLabs
