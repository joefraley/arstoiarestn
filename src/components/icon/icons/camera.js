import React from "react"

const SvgCamera = props => (
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
            <circle
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                cx={12}
                cy={13}
                r={4}
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M20.7,21 c1.3,0,2.3-1.1,2.3-2.4V9c0-1.4-1-2.4-2.3-2.4h-2.9c-1,0-1.7-0.8-1.7-1.8l0,0c0-1-0.8-1.8-1.7-1.8H9.7C8.7,3,8,3.8,8,4.8l0,0 c0,1-0.8,1.8-1.7,1.8h-3C2,6.5,1,7.6,1,9v9.6C1,19.9,2,21,3.3,21H20.7z"
            />
        </g>
    </svg>
)

export default SvgCamera
