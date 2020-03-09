import React from "react"

const SvgMeduparrow = props => (
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
            <polyline
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                points="23,16 15,8.4  7,16  "
            />
        </g>
    </svg>
)

export default SvgMeduparrow
