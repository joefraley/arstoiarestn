import React from "react"

const SvgMappin = props => (
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
                strokeWidth={1.9774}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20,6.3 c3.8,7.6-5.5,15-7.6,16.5c-0.3,0.2-0.6,0.2-0.8,0C9.8,21.6,3,16.2,3,10.1c0-4.6,3.4-8.4,7.8-9C14.7,0.6,18.3,2.8,20,6.3z"
            />
            <circle
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                cx={12}
                cy={9}
                r={3}
            />
        </g>
    </svg>
)

export default SvgMappin
