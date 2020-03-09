import React from "react"

const SvgShare2 = props => (
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
                d="M21,10v10.6 c0,1.3-1.1,2.4-2.4,2.4H5.4C4.1,23,3,21.9,3,20.6V10"
            />
            <polyline
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                points="15.8,5 11.8,1  7.8,5  "
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                x1={11.8}
                y1={1}
                x2={11.8}
                y2={14}
            />
        </g>
    </svg>
)

export default SvgShare2
