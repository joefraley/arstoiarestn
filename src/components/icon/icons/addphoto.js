import React from "react"

const SvgAddphoto = props => (
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
        <circle
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            cx={10.5}
            cy={11.5}
            r={3.5}
        />
        <path
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            d="M20,12V7c0-1.1-0.9-2-2-2 h-2.5C14.7,5,14,4.3,14,3.5l0,0C14,2.7,13.3,2,12.5,2h-4C7.7,2,7,2.7,7,3.5l0,0C7,4.3,6.3,5,5.5,5H3C1.9,5,1,5.9,1,7v10 c0,1.1,0.9,2,2,2h10"
        />
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            x1={20}
            y1={16}
            x2={20}
            y2={22}
        />
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            x1={23}
            y1={19}
            x2={17}
            y2={19}
        />
    </svg>
)

export default SvgAddphoto
