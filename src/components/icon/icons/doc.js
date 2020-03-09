import React from "react"

const SvgDoc = props => (
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
                d=" M17.4,6.4c0,3-2.4,5.4-5.4,5.4S6.6,9.4,6.6,6.4C6.7,3.4,9.1,1,12,1c1,0,2,0.3,2.8,0.8"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M15.6,14L12,17.2c0,0-2-1.7-3.7-3.1c-3.5,1.5-6,4.9-6,8.9h19.3C21.7,18.9,19.2,15.5,15.6,14z"
            />
            <circle
                fill="#FFFFFF"
                stroke={props.color}
                strokeWidth={1.7639}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                cx={16.3}
                cy={4}
                r={2.3}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={1.7639}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={7.7}
                y1={4}
                x2={13.7}
                y2={4}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={16.2}
                y1={18.7}
                x2={16.2}
                y2={21}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={15}
                y1={19.9}
                x2={17.5}
                y2={19.9}
            />
        </g>
    </svg>
)

export default SvgDoc
