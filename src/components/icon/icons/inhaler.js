import React from "react"

const SvgInhaler = props => (
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
                d="M13,16.5l3.7-13.4 c0.1-0.5,0.6-1.4,1.9-1l2.6,0.9c0.8,0.4,0.9,1.2,0.8,1.7l-4.3,15.5C16.8,22,15.9,22,14.9,22"
            />
            <polyline
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                points="15.3,22 7,22 7,17.9 13,16.5  "
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={16.3}
                y1={6.5}
                x2={21.1}
                y2={6.5}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={10}
                y1={21.4}
                x2={10}
                y2={18}
            />
        </g>
        <path fill={props.color} d="M2.9,22c0,0.5-0.4,1-1,1c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1S2.9,21.4,2.9,22z" />
        <path fill={props.color} d="M3,18c0,0.5-0.5,1-1,1s-1-0.5-1-1s0.5-1,1-1S3,17.5,3,18z" />
        <path fill={props.color} d="M5,20c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.5-1,1-1C4.6,19,5,19.5,5,20z" />
    </svg>
)

export default SvgInhaler
