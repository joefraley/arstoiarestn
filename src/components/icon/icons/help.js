import React from "react"

const SvgHelp = props => (
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
            <path fill="none" stroke={props.color} strokeWidth={2} strokeLinecap="round" d="M12,13.5v1.1" />
            <circle
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                cx={12}
                cy={12}
                r={11}
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                d="M12,7.2c1.7,0,3,1.4,3,3s-1.4,3-3,3"
            />
            <circle fill={props.color} cx={12} cy={17.5} r={1} />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                d="M9.1,9.2c0.5-1.2,1.6-2,2.9-2"
            />
        </g>
    </svg>
)

export default SvgHelp
