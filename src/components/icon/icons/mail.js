import React from "react"

const SvgMail = props => (
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
                strokeMiterlimit={10}
                d="M21.8,5.1l-8.2,8.1 c-0.9,0.9-2.3,0.9-3.1,0L2.2,5.1"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M20.5,20h-17 C2.1,20,1,18.9,1,17.6V6.4C1,5.1,2.1,4,3.5,4h17C21.9,4,23,5.1,23,6.4v11.1C23,18.9,21.9,20,20.5,20z"
            />
        </g>
    </svg>
)

export default SvgMail
