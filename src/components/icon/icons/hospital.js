import React from "react"

const SvgHospital = props => (
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
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            x1={6}
            y1={3}
            x2={6}
            y2={21}
        />
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            x1={18}
            y1={3}
            x2={18}
            y2={21}
        />
        <line fill="none" stroke={props.color} strokeWidth={2} strokeMiterlimit={10} x1={6} y1={12} x2={18} y2={12} />
    </svg>
)

export default SvgHospital
