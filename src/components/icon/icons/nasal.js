import React from "react"

const SvgNasal = props => (
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
                d="M13.9,12l-3.9,0 c-1.6,0-2.9,1.3-2.9,3V22h9.7V15C16.8,13.3,15.5,12,13.9,12z"
            />
            <polyline
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                points="10,12 11.1,7 12.9,7 14,12  "
            />
            <circle fill={props.color} cx={12} cy={4} r={1} />
            <circle fill={props.color} cx={10} cy={2} r={1} />
            <circle fill={props.color} cx={14} cy={2} r={1} />
        </g>
    </svg>
)

export default SvgNasal
