import React from "react"

const SvgLocked = props => (
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
            d="M18,23H6c-1.7,0-3-1.3-3-3v-9h18v9 C21,21.7,19.7,23,18,23z"
        />
        <path
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M6,11V7c0-3.3,2.7-6,6-6l0,0c3.3,0,6,2.7,6,6v4"
        />
        <path
            fill={props.color}
            d="M12,19L12,19c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1l0,0c0.6,0,1,0.4,1,1v1C13,18.6,12.6,19,12,19z"
        />
    </svg>
)

export default SvgLocked
