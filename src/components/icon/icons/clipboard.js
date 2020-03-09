import React from "react"

const SvgClipboard = props => (
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
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M9.8,3.1L9.8,3.1c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M17.4,23.1H6.6 c-1.3,0-2.4-1.1-2.4-2.4V4h15.6v16.7C19.8,22,18.7,23.1,17.4,23.1z"
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
                x1={8.1}
                y1={5.8}
                x2={16.1}
                y2={5.8}
            />
        </g>
    </svg>
)

export default SvgClipboard
