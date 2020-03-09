import React from "react"

const SvgRx = props => (
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
        <path
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M19.4,20.5L8.3,9.4H4.9h4.4c0,0,2.8,0,2.8-2.8 S9.4,3.8,9.4,3.8H4.9v11.1"
        />
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeMiterlimit={10}
            x1={10.5}
            y1={20.5}
            x2={19.4}
            y2={11.6}
        />
    </svg>
)

export default SvgRx
