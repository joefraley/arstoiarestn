import React from "react"

const SvgLightbulb = props => (
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
            strokeMiterlimit={10}
            d="M15,17.1v2.8 c0,1.6-1.2,3.1-2.8,3.2C10.4,23.1,9,21.7,9,20v-1v-2.1c0-1.4-0.5-2.7-1.6-3.7C5.9,12,4.9,10,5,7.8C5.1,4.1,8.2,1.1,11.8,1 c4-0.1,7.2,3.1,7.2,7c0,2.1-0.9,4-2.4,5.3C15.5,14.2,15,15.6,15,17.1z"
        />
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            x1={9}
            y1={18}
            x2={15}
            y2={18}
        />
    </svg>
)

export default SvgLightbulb
