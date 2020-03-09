import React from "react"

const SvgFlag = props => (
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
            d=" M4,2v20 M14.1,3.3H4v8.8h10.1V3.3z M10.6,12.2V15H20l-1.8-4L20,6.3h-5.6 M14.1,12.1l-3.5,3"
        />
    </svg>
)

export default SvgFlag
