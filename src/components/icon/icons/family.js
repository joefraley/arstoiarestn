import React from "react"

const SvgFamily = props => (
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
        <g id="fills">
            <circle fill={props.secondaryColor} cx={8.4} cy={7.1} r={3.9} />
            <path fill={props.secondaryColor} d="M15.4,21c0-3.9-3.2-7.1-7.1-7.1S1.3,17.1,1.3,21H15.4z" />
        </g>
        <g id="lines">
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={1.998}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M8.3,11.1L8.3,11.1C6,11.1,4,9.3,4,7.1C4,4.8,6,3,8.3,3s4.3,1.8,4.3,4.1S10.7,11.1,8.3,11.1z"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={1.998}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M14.2,21h1.5c0-3.8-3.3-6.9-7.3-6.9S1,17.2,1,21h9"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={1.998}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M23,21c0-3.8-3.3-6.9-7.3-6.9"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={1.998}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M15.9,11.1c2.2-0.1,4-1.9,4-4c0-2.2-1.8-3.9-4-4"
            />
        </g>
    </svg>
)

export default SvgFamily
