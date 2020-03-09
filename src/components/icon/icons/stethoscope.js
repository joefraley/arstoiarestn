import React from "react"

const SvgStethoscope = props => (
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
                d=" M18.4,14.6l0,2.4c0,2.8-2.3,5-5.3,5s-5-2.2-5-5l0-4.6"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M5.1,2H3v5c0,2.8,2.2,5,5,5 s5-2.2,5-5V2h-2.1"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M15.7,12c0-1.5,1.2-2.6,2.6-2.6c1.5,0,2.6,1.2,2.6,2.6s-1.2,2.6-2.6,2.6C16.9,14.6,15.7,13.4,15.7,12z"
            />
        </g>
    </svg>
)

export default SvgStethoscope
