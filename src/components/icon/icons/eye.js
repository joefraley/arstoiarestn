import React from "react"

const SvgEye = props => (
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
        <circle fill="none" stroke={props.color} strokeWidth={2} strokeMiterlimit={10} cx={12} cy={12} r={3} />
        <path
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M22.6,12c0,0-4.8-6.6-10.6-6.6S1.4,12,1.4,12 s4.8,6.5,10.6,6.5S22.6,12,22.6,12z"
        />
    </svg>
)

export default SvgEye
