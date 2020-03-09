import React from "react"

const SvgInfo = props => (
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
            <circle
                fill="none"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                cx={12}
                cy={12}
                r={7.5}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={12}
                y1={15.5}
                x2={12}
                y2={11}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeLinecap="square"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={12}
                y1={16}
                x2={12}
                y2={14.8}
            />
            <circle fill={props.color} cx={12} cy={8.5} r={0.5} />
        </g>
    </svg>
)

export default SvgInfo
