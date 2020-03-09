import React from "react"

const SvgHome = props => (
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
        <polygon fill={props.secondaryColor} points="3,23 3,11 12,2 21,11 21,23 " />
        <polyline
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            points=" 4,15 4,23 20,23 20,15 "
        />
        <polyline
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            points=" 1,12.9 12,2 23,13 "
        />
    </svg>
)

export default SvgHome
