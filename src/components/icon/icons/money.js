import React from "react"

const SvgMoney = props => (
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
                d=" M6.5,17.6c4,3.8,11,1.9,11-1.9c0-2.8-3-3.8-5-3.8h-1h1h-1c-2,0-5-0.9-5-3.8c0-3.8,7-5.7,11-1.9"
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={12}
                y1={21.9}
                x2={12}
                y2={2}
            />
        </g>
    </svg>
)

export default SvgMoney
