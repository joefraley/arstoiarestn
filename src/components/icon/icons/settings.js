import React from "react"

const SvgSettings = props => (
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
            d=" M23,14v-4h-2c-0.7,0-1.3-0.4-1.5-1.1l0,0c-0.3-0.6-0.1-1.4,0.3-1.8l1.4-1.4l-2.8-2.8L17,4.3c-0.5,0.5-1.2,0.6-1.8,0.3l0,0 C14.4,4.3,14,3.7,14,3V1h-4v2c0,0.7-0.4,1.3-1.1,1.5l0,0C8.3,4.8,7.6,4.7,7.1,4.2L5.6,2.8L2.8,5.6L4.2,7c0.5,0.5,0.6,1.2,0.3,1.8 l0,0C4.3,9.6,3.7,10,3,10H1v4h2c0.7,0,1.3,0.4,1.5,1.1l0,0c0.3,0.6,0.1,1.4-0.3,1.8l-1.4,1.4l2.8,2.8L7,19.7 c0.5-0.5,1.2-0.6,1.8-0.3l0,0C9.6,19.7,10,20.3,10,21v2h4v-2c0-0.7,0.4-1.3,1.1-1.5l0,0c0.6-0.3,1.4-0.1,1.8,0.3l1.4,1.4l2.8-2.8 L19.7,17c-0.5-0.5-0.6-1.2-0.3-1.8l0,0c0.3-0.6,0.8-1.1,1.5-1.1L23,14z"
        />
        <circle
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            cx={12}
            cy={12}
            r={4}
        />
    </svg>
)

export default SvgSettings
