import React from "react"

const SvgShare = props => (
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
        <ellipse
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            cx={18.7}
            cy={4.3}
            rx={3.3}
            ry={3.3}
        />
        <ellipse
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            cx={5.3}
            cy={12}
            rx={3.3}
            ry={3.3}
        />
        <ellipse
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            cx={18.7}
            cy={19.7}
            rx={3.3}
            ry={3.3}
        />
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            x1={8.2}
            y1={13.7}
            x2={15.8}
            y2={18}
        />
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            x1={15.8}
            y1={6}
            x2={8.2}
            y2={10.3}
        />
    </svg>
)

export default SvgShare
