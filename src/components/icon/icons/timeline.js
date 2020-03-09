import React from "react"

const SvgTimeline = props => (
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
                fill={props.color}
                d="M8.2,11.6l6.5-3c0.5-0.2,1.1,0.3,0.8,0.8l-3,6.5c-0.2,0.5-1,0.5-1.2-0.1l-0.7-2c-0.1-0.2-0.2-0.3-0.4-0.4l-2-0.7 C7.7,12.6,7.7,11.8,8.2,11.6"
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

export default SvgTimeline
