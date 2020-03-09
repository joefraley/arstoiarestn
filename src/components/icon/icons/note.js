import React from "react"

const SvgNote = props => (
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d=" M14.1,19H6.6C5.7,19,5,18.3,5,17.4V6.6C5,5.7,5.7,5,6.6,5h10.7c1,0,1.7,0.7,1.7,1.6V14L14.1,19z"
        />
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            x1={5}
            y1={9.1}
            x2={19}
            y2={9.1}
        />
        <polyline
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            points=" 14.1,19 14.1,14.1 19,14.1 "
        />
    </svg>
)

export default SvgNote
