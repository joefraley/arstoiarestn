import React from "react"

const SvgSort = props => (
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
        <polyline
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={10}
            points="15,2 15,21  22,14.6 "
        />
        <polyline
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinejoin="round"
            strokeMiterlimit={10}
            points="9,22 9,3 2,9.4  "
        />
    </svg>
)

export default SvgSort
