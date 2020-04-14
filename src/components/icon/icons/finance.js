import React from "react"

const SvgFinance = props => (
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
            <ellipse fill={props.secondarycolor} cx={12} cy={12} rx={11} ry={11} />
            <ellipse
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                cx={12}
                cy={12}
                rx={11}
                ry={11}
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M8.3,16c2.7,2.7,7.3,1.3,7.3-1.3c0-2-2-2.7-3.3-2.7h-0.7c-1.3,0-3.3-0.7-3.3-2.7c0-2.7,4.6-4,7.3-1.3"
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={12.3}
                y1={19.3}
                x2={12.3}
                y2={18}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={12.3}
                y1={6.1}
                x2={12.3}
                y2={4.7}
            />
        </g>
    </svg>
)

export default SvgFinance
